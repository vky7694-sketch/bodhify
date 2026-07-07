import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import EnrollButton from "../../components/EnrollButton";

const courseData: Record<string, any> = {
  "drone-engineering": {
    title: "Drone Engineering",
    overview:
      "Design, control and programming of multirotor drones, sensors, flight controllers, and mission planning for aerial applications.",
    price: 79,
    totalHours: 30,
    lessons: [
      { title: "Introduction to Drones & Systems", hours: 1 },
      { title: "Multirotor Aerodynamics", hours: 3 },
      { title: "Flight Controllers & Firmware", hours: 4 },
      { title: "Sensors: IMU, GPS, Lidar", hours: 4 },
      { title: "Control Systems & PID Tuning", hours: 5 },
      { title: "Autonomous Navigation & Missions", hours: 6 },
      { title: "Payloads & Applications", hours: 3 },
      { title: "Field Testing & Safety", hours: 4 },
    ],
  },
  "rc-plane-design": {
    title: "RC Plane Design & Flight",
    overview:
      "Radio-controlled fixed-wing aircraft design, aerodynamics, electronics integration, and practical flight training.",
    price: 65,
    totalHours: 20,
    lessons: [
      { title: "Fixed-Wing Fundamentals", hours: 2 },
      { title: "Airframe Design & Materials", hours: 4 },
      { title: "Propulsion & Power Systems", hours: 3 },
      { title: "Radio Systems & Telemetry", hours: 3 },
      { title: "Flight Techniques & Trim", hours: 4 },
      { title: "Maintenance & Field Ops", hours: 4 },
    ],
  },
  "augmented-reality": {
    title: "Augmented Reality (AR)",
    overview:
      "AR development fundamentals, spatial computing, marker/markerless tracking, and building interactive AR experiences.",
    price: 69,
    totalHours: 25,
    lessons: [
      { title: "AR Concepts & Tooling", hours: 2 },
      { title: "Computer Vision Basics", hours: 4 },
      { title: "Tracking & Spatial Anchors", hours: 5 },
      { title: "AR UX / Interaction", hours: 4 },
      { title: "Platform SDKs (ARKit/ARCore)", hours: 5 },
      { title: "Building AR Apps", hours: 5 },
    ],
  },
  "virtual-reality": {
    title: "Virtual Reality (VR)",
    overview:
      "VR systems, immersive UX design, performance optimization, and building interactive virtual environments.",
    price: 79,
    totalHours: 30,
    lessons: [
      { title: "VR Fundamentals", hours: 3 },
      { title: "3D Interaction & UX", hours: 6 },
      { title: "Performance & Optimization", hours: 5 },
      { title: "Engine Workflows (Unity/Unreal)", hours: 8 },
      { title: "Networking & Multi-user VR", hours: 4 },
      { title: "Project: Build a VR Scene", hours: 4 },
    ],
  },
  "iot": {
    title: "Internet of Things (IoT)",
    overview:
      "End-to-end IoT development: sensors, embedded systems, connectivity, cloud integration, and data analytics.",
    price: 74,
    totalHours: 35,
    lessons: [
      { title: "Embedded Systems Basics", hours: 5 },
      { title: "Sensors & Signal Conditioning", hours: 6 },
      { title: "Connectivity (WiFi/BLE/LoRa)", hours: 6 },
      { title: "Edge Computing & Firmware", hours: 6 },
      { title: "Cloud Integration & MQTT", hours: 6 },
      { title: "Data Analytics & Dashboards", hours: 6 },
    ],
  },
  "gate-preparation": {
    title: "GATE Preparation",
    overview: "Complete GATE preparation with PYQs, mock tests, notes, and AI explanations.",
    price: 49,
    totalHours: 300,
    lessons: [
      { title: "Syllabus & Exam Pattern", hours: 2 },
      { title: "Core Concepts Review", hours: 120 },
      { title: "Problem Solving Sessions", hours: 100 },
      { title: "Previous Year Questions (PYQs)", hours: 40 },
      { title: "Mock Tests & Analysis", hours: 30 },
      { title: "Revision Strategy", hours: 8 },
    ],
  },
  "gate-mechanical": {
    title: "GATE Mechanical Engineering",
    overview: "Thermodynamics, SOM, FM, TOM, Manufacturing and Engineering Mathematics focused for GATE.",
    price: 55,
    totalHours: 180,
    lessons: [
      { title: "Engineering Mathematics", hours: 30 },
      { title: "Thermodynamics", hours: 30 },
      { title: "Strength of Materials", hours: 25 },
      { title: "Theory of Machines", hours: 25 },
      { title: "Manufacturing Processes", hours: 25 },
      { title: "Practice & PYQs", hours: 45 },
    ],
  },
  "gate-ece": {
    title: "GATE Electronics & Communication",
    overview: "Analog, Digital, Signals, Communication Systems, Networks and Control for GATE preparation.",
    price: 55,
    totalHours: 170,
    lessons: [
      { title: "Network Theory & Signals", hours: 30 },
      { title: "Analog Circuits", hours: 30 },
      { title: "Digital Electronics", hours: 30 },
      { title: "Communication Systems", hours: 40 },
      { title: "Control Systems", hours: 20 },
      { title: "PYQs & Mock Tests", hours: 20 },
    ],
  },
  "gate-aptitude": {
    title: "GATE Aptitude",
    overview: "Quantitative aptitude, reasoning and verbal ability for GATE.",
    price: 39,
    totalHours: 60,
    lessons: [
      { title: "Quantitative Techniques", hours: 20 },
      { title: "Logical Reasoning", hours: 15 },
      { title: "Verbal Ability", hours: 15 },
      { title: "Practice Tests", hours: 10 },
    ],
  },
  "mechanical-engineering": {
    title: "Mechanical Engineering",
    overview: "Machine Design, Thermodynamics, Manufacturing, CAD, CAM, CAE and Industrial Engineering.",
    price: 59,
    totalHours: 120,
    lessons: [
      { title: "Statics & Dynamics", hours: 15 },
      { title: "Machine Design Basics", hours: 25 },
      { title: "Thermodynamics & Heat Transfer", hours: 20 },
      { title: "Manufacturing Processes", hours: 20 },
      { title: "CAD/CAM Intro", hours: 20 },
      { title: "Project & Case Studies", hours: 20 },
    ],
  },
  "electronics-communication": {
    title: "Electronics & Communication",
    overview: "Electronic Devices, Analog Circuits, Digital Electronics, Embedded Systems and VLSI.",
    price: 59,
    totalHours: 95,
    lessons: [
      { title: "Electronic Devices", hours: 15 },
      { title: "Analog Circuit Design", hours: 20 },
      { title: "Digital Systems", hours: 20 },
      { title: "Embedded Systems", hours: 20 },
      { title: "VLSI Basics", hours: 20 },
    ],
  },
  "electrical-engineering": {
    title: "Electrical Engineering",
    overview: "Power Systems, Electrical Machines, Control Systems and Protection.",
    price: 55,
    totalHours: 85,
    lessons: [
      { title: "Circuit Theory", hours: 15 },
      { title: "Electrical Machines", hours: 20 },
      { title: "Power Systems", hours: 20 },
      { title: "Control Systems", hours: 15 },
      { title: "Protection & Relays", hours: 15 },
    ],
  },
  "ai": {
    title: "Artificial Intelligence",
    overview: "Machine Learning, Deep Learning, Computer Vision, NLP and Generative AI.",
    price: 69,
    totalHours: 150,
    lessons: [
      { title: "ML Foundations", hours: 30 },
      { title: "Deep Learning", hours: 40 },
      { title: "Computer Vision", hours: 25 },
      { title: "NLP & Transformers", hours: 30 },
      { title: "Generative AI & Projects", hours: 25 },
    ],
  },
  "robotics": {
    title: "Robotics",
    overview: "Industrial Robotics, ROS2, Mechatronics, Automation and Robot Programming.",
    price: 65,
    totalHours: 80,
    lessons: [
      { title: "Robotics Fundamentals", hours: 10 },
      { title: "Mechanics & Kinematics", hours: 20 },
      { title: "ROS2 Basics", hours: 20 },
      { title: "Control & Planning", hours: 15 },
      { title: "Industrial Applications", hours: 15 },
    ],
  },
  "civil-engineering": {
    title: "Civil Engineering",
    overview: "Structures, Surveying, Construction, Geotechnical and Environmental Engineering.",
    price: 52,
    totalHours: 75,
    lessons: [
      { title: "Strength of Materials", hours: 15 },
      { title: "Structural Analysis", hours: 20 },
      { title: "Surveying & Geomatics", hours: 10 },
      { title: "Construction Materials", hours: 15 },
      { title: "Project: Design Exercise", hours: 15 },
    ],
  },
  "automobile-engineering": {
    title: "Automobile Engineering",
    overview: "IC Engines, Electric Vehicles, Hybrid Vehicles and Vehicle Dynamics.",
    price: 58,
    totalHours: 70,
    lessons: [
      { title: "Engine Fundamentals", hours: 15 },
      { title: "Vehicle Dynamics", hours: 15 },
      { title: "EV Systems & Batteries", hours: 20 },
      { title: "Hybrid Architectures", hours: 10 },
      { title: "Diagnostics & Maintenance", hours: 10 },
    ],
  },
};

const coursePrices: Record<string, number> = {
  "drone-engineering": 79,
  "rc-plane-design": 65,
  "augmented-reality": 69,
  "virtual-reality": 79,
  "iot": 74,
  "gate-preparation": 49,
  "gate-mechanical": 55,
  "gate-ece": 55,
  "gate-aptitude": 39,
  "mechanical-engineering": 59,
  "electronics-communication": 59,
  "electrical-engineering": 55,
  "ai": 69,
  "robotics": 65,
  "civil-engineering": 52,
  "automobile-engineering": 58,
};

export default async function CourseDetail({ params }: any) {
  const { slug } = await params;
  const data = courseData[slug] || null;
  const price = coursePrices[slug] ?? 49;

  if (!data) {
    return (
      <main className="min-h-screen bg-[#020617] text-white pt-24">
        <Navbar />
        <div className="max-w-4xl mx-auto p-8">
          <h1 className="text-3xl font-bold">Course not found</h1>
          <p className="mt-4 text-gray-400">We don't have details for this course yet.</p>
          <Link href="/courses" className="inline-flex items-center gap-2 mt-6 text-blue-400">
            <ArrowLeft /> Back to courses
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const totalLessons = data.lessons.length;

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-24">
      <Navbar />

      <section className="max-w-5xl mx-auto px-6 py-16">
        <Link href="/courses" className="text-blue-400 inline-flex items-center gap-2 mb-6">
          <ArrowLeft /> Back
        </Link>

        <h1 className="text-4xl font-black">{data.title}</h1>
        <p className="text-gray-400 mt-4">{data.overview}</p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 text-gray-300">
            <Clock /> <span>{data.totalHours} hours</span>
          </div>
          <div className="text-gray-300">{totalLessons} lessons</div>
          <div className="text-gray-300">Price: ${price}</div>
        </div>

        <div className="mt-10 bg-white/5 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Course lessons</h2>
          <ol className="space-y-3">
            {data.lessons.map((l: any, i: number) => (
              <li key={i} className="flex justify-between items-center border-b border-white/5 pb-3">
                <div>
                  <div className="font-semibold">{i + 1}. {l.title}</div>
                  <div className="text-sm text-gray-400">Approx. {l.hours} hours</div>
                </div>
                <div className="text-sm text-gray-300">{l.hours}h</div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-gray-300">Secure enrollment powered by Firebase.</div>
          <EnrollButton slug={slug} title={data.title} price={price} />
        </div>

      </section>

      <Footer />
    </main>
  );
}
