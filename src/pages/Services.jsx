import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaWarehouse,
  FaTruck,
  FaBoxes,
  FaShieldAlt,
  FaIndustry,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";

// Services Data
const services = [
  {
    title: "Freight Transport",
    desc: "Reliable road, air, and sea transport tailored to your timelines. We ensure goods reach safely across the globe.",
    icon: <FaShippingFast className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
  {
    title: "Warehousing Solutions",
    desc: "Secure storage facilities with real-time inventory management and 24/7 monitoring to keep your products safe.",
    icon: <FaWarehouse className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
  {
    title: "Customs Clearance",
    desc: "Expert handling of import/export documentation and duties, ensuring smooth cross-border logistics.",
    icon: <FaShieldAlt className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
  {
    title: "Last-Mile Delivery",
    desc: "Fast, reliable local delivery to your customers’ doorstep with tracking at every step.",
    icon: <FaBoxes className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
  {
    title: "Heavy Machinery Transport",
    desc: "Specialized logistics for industrial and construction equipment with utmost care and compliance.",
    icon: <FaIndustry className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock assistance for queries, tracking, and logistics solutions, keeping you informed at all times.",
    icon: <FaClock className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
  {
    title: "Eco-Friendly Logistics",
    desc: "We integrate sustainable practices in transportation and warehousing to minimize carbon footprint.",
    icon: <FaHandsHelping className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
  {
    title: "Fleet Management",
    desc: "Optimized fleet operations for maximum efficiency and timely deliveries across multiple locations.",
    icon: <FaTruck className="text-orange-500 text-5xl sm:text-6xl md:text-5xl" />,
  },
];

// Steps / Process
const steps = [
  {
    step: "1",
    title: "Consultation & Planning",
    desc: "Understand client needs and design an optimized logistics strategy.",
  },
  {
    step: "2",
    title: "Execution & Tracking",
    desc: "Transport and handle goods with real-time monitoring and updates.",
  },
  {
    step: "3",
    title: "Delivery & Feedback",
    desc: "Ensure timely delivery and gather client feedback for continuous improvement.",
  },
];

// Stats
const stats = [
  { label: "Projects Completed", value: 1200 },
  { label: "Satisfied Clients", value: 950 },
  { label: "Years of Experience", value: 15 },
  { label: "Countries Served", value: 25 },
];

export default function ServicesPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 sm:py-24 md:py-32 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
        >
          Comprehensive logistics and infrastructure solutions to help your business operate efficiently, safely, and on time.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-orange-400 transition-all flex flex-col items-center text-center min-h-[300px]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-base">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Steps / How We Work */}
      <section className="bg-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg"
          >
            Step-by-step approach to ensure your goods are handled professionally.
          </motion.p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.3 }}
              className="bg-orange-50 rounded-xl p-6 sm:p-8 shadow hover:shadow-xl border-l-4 border-orange-400 transition-transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4">{s.step}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-base">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-gray-100 py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="bg-white rounded-xl shadow p-6 sm:p-8 hover:shadow-2xl transition-transform hover:scale-105"
            >
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500">{stat.value}+</h3>
              <p className="mt-2 text-gray-700 text-sm sm:text-base md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-orange-500 py-16 sm:py-20 md:py-24 text-white text-center px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          Ready to Optimize Your Logistics?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-base sm:text-lg md:text-xl mb-8"
        >
          Contact us today and let our experts design a solution tailored to your business.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          Get in Touch
        </motion.button>
      </section>
    </div>
  );
}
