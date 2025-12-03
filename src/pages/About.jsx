import { motion } from "framer-motion";
import { FaMountain, FaTruck, FaBuilding, FaGlobe } from "react-icons/fa";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 50 },
    }),
  };

  const floatShape = {
    animate: {
      y: ["0%", "5%", "0%"],
      transition: { repeat: Infinity, duration: 6, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative overflow-hidden z-0 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      {/* Floating background shapes */}
      <motion.div
        className="absolute top-10 left-1/4 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-blue-200 rounded-full opacity-30 mix-blend-multiply"
        variants={floatShape}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-10 right-1/3 w-36 sm:w-48 md:w-72 h-36 sm:h-48 md:h-72 bg-orange-300 rounded-full opacity-20 mix-blend-multiply"
        variants={floatShape}
        animate="animate"
      />

      {/* Hero Section */}
      <motion.div
        className="mx-auto text-center py-12 px-4 sm:px-6 md:px-8 max-w-4xl bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg relative z-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
          RP ASSOCIATES
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide">
          Mining | Trading | Logistics | Construction
        </p>
      </motion.div>

      {/* About Us / Our Story */}
      <motion.div
        className="max-w-6xl mx-auto p-5 sm:p-6 md:p-8 space-y-6 mt-12 relative z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-4"
          custom={1}
          variants={fadeInUp}
        >
          About Us
        </motion.h2>

        <motion.p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl" custom={2} variants={fadeInUp}>
          RP ASSOCIATES was established in 2020 by Mr. Srinivas Raju Sagi, a visionary entrepreneur recognized
          for his dynamic leadership. The company has evolved from a specialized mining operation into a versatile
          enterprise, excelling in mineral trading, end-to-end logistics, and civil construction services.
        </motion.p>

        <motion.p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl" custom={3} variants={fadeInUp}>
          Headquartered in Visakhapatnam, RP ASSOCIATES connects diverse industries with precision and efficiency. 
          Positioned as a strategic gateway to international markets, the company utilizes advanced infrastructure 
          and an expert team to address the changing demands of its clients.
        </motion.p>

        <motion.p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl" custom={4} variants={fadeInUp}>
          RP Associates has a state-of-the-art crushing plant. They source premium raw materials such as stone aggregates, limestone, river sand, quartz, and bauxite from their own mines, ensuring stringent quality control throughout every stage to uphold reliability and excellence.
        </motion.p>

        <motion.p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl" custom={5} variants={fadeInUp}>
          RP ASSOCIATES stands as a trusted partner, committed to sustainable growth, ethical business practices, and creating long-lasting partnerships that deliver shared success.
        </motion.p>
      </motion.div>

      {/* Services Section */}
      <motion.div
        className="max-w-6xl mx-auto p-5 sm:p-6 md:p-8 space-y-8 mt-12 relative z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6" custom={1} variants={fadeInUp}>
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
          {[
            { icon: <FaMountain className="text-blue-500 text-4xl sm:text-5xl" />, title: "Mining", desc: "Raising, crushing, screening, and transportation. Expertise in coal, manganese, and overburden removal across India." },
            { icon: <FaGlobe className="text-orange-500 text-4xl sm:text-5xl" />, title: "Mineral Trading", desc: "Stone aggregates, Manganese, Coal, and Bauxite trading across India and international markets." },
            { icon: <FaTruck className="text-green-500 text-4xl sm:text-5xl" />, title: "End-to-End Logistics", desc: "Ocean freight & surface transportation, break bulk cargo handling, and on-time delivery." },
            { icon: <FaBuilding className="text-purple-500 text-4xl sm:text-5xl" />, title: "Construction", desc: "Engineering, procurement, and construction solutions tailored to client requirements." },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-white shadow-lg rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:space-x-4 items-center hover:shadow-2xl hover:scale-105 transition-all min-w-[260px]"
              custom={i + 2}
              variants={fadeInUp}
            >
              <div className="mb-4 sm:mb-0">{service.icon}</div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-1">{service.title}</h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="max-w-6xl mx-auto p-5 sm:p-6 md:p-8 space-y-8 mt-12 relative z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6" custom={1} variants={fadeInUp}>
          Our Team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {[
            { name: "Srinivasa Raju Sagi", role: "Managing Director", desc: "Created entities delivering iconic industrial, civil, residential, and commercial developments." },
            { name: "Siva Shanakran A C", role: "Director Marine & Logistics", desc: "Marine engineer with 30+ years in marine works, industrial infrastructure, and buildings." },
            { name: "Gautham", role: "Director Projects", desc: "Civil engineer with 15+ years executing marine works, building projects, and industrial infrastructure." },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              className="bg-white shadow-lg rounded-xl p-6 sm:p-8 text-center hover:scale-105 hover:shadow-2xl transition-all min-w-[260px]"
              custom={i + 2}
              variants={fadeInUp}
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-1">{member.name}</h3>
              <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
