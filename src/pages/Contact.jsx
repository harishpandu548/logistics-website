import { motion } from "framer-motion";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, type: "spring", stiffness: 70 },
    }),
  };

  return (
    <section className="max-w-4xl mx-auto p-8 mt-16">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 1 } }}
      >
        Have questions or need a custom quote? Send us a message and our team will get back to you within one business day.
      </motion.p>

      {/* Form */}
      <motion.form
        className="space-y-6 bg-white shadow-xl p-8 rounded-2xl border border-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
      >
        {/* Name */}
        <motion.div variants={fadeInUp} custom={1}>
          <label className="block mb-2 font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Your Name"
            required
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeInUp} custom={2}>
          <label className="block mb-2 font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="your@email.com"
            required
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeInUp} custom={3}>
          <label className="block mb-2 font-medium text-gray-700">Message</label>
          <textarea
            rows="5"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Write your message..."
            required
          />
        </motion.div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fadeInUp}
          custom={4}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
