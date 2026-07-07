import { collection, doc, addDoc, setDoc, deleteDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

type QueueItem =
  | { op: "add"; collectionPath: string; data: any }
  | { op: "set"; docPath: string; data: any }
  | { op: "delete"; docPath: string };

const STORAGE_KEY = "offline_writes";

function readQueue(): QueueItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as QueueItem[];
  } catch (e) {
    console.error("offlineQueue read error", e);
    return [];
  }
}

function writeQueue(q: QueueItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(q));
  } catch (e) {
    console.error("offlineQueue write error", e);
  }
}

export async function enqueue(item: QueueItem) {
  if (typeof window === "undefined") return;
  const q = readQueue();
  q.push(item);
  writeQueue(q);
  // try processing immediately
  processQueue().catch((e) => console.error("processQueue immediate error", e));
}

export async function processQueue() {
  if (!db) return; // Firestore not initialized
  const q = readQueue();
  if (!q.length) return;

  const remaining: QueueItem[] = [];

  for (const item of q) {
    try {
      if (item.op === "add") {
        const parts = item.collectionPath.split("/").filter(Boolean);
        await addDoc(collection(db, parts.join("/")), item.data);
      } else if (item.op === "set") {
        const parts = item.docPath.split("/").filter(Boolean);
        await setDoc(doc(db, parts.join("/")), item.data);
      } else if (item.op === "delete") {
        const parts = item.docPath.split("/").filter(Boolean);
        await deleteDoc(doc(db, parts.join("/")));
      }
    } catch (err) {
      console.error("offlineQueue op failed, will retry:", err, item);
      remaining.push(item);
    }
  }

  writeQueue(remaining);
}

// periodically retry
if (typeof window !== "undefined") {
  window.addEventListener("online", () => processQueue());
  setInterval(() => {
    processQueue().catch((e) => {});
  }, 10000);
}

export default { enqueue, processQueue };
