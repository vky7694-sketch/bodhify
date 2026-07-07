import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiKeT84-yFlfu5pSRMbX_ug2rqyOufIw8",
  authDomain: "bodhify-3ffd3.firebaseapp.com",
  projectId: "bodhify-3ffd3",
  storageBucket: "bodhify-3ffd3.firebasestorage.app",
  messagingSenderId: "720080473637",
  appId: "1:720080473637:web:c3d76abd1bac7feef6f9cc",
  measurementId: "G-4CDF9NLYH5",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);

let dbInstance;
try {
  dbInstance = getFirestore(app);
  // quick debug log to help diagnose "Database '(default)' not found" issues
  // (will appear in browser console)
  // eslint-disable-next-line no-console
  console.log("Firebase initialized:", { projectId: firebaseConfig.projectId, appName: app.name });
} catch (err) {
  // eslint-disable-next-line no-console
  console.error("Firestore initialization error:", err);
}

export const db = dbInstance;
export const googleProvider = new GoogleAuthProvider();

export default app;