// src/components/Footer.jsx
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/rp-logo.png";

export default function Footer() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 18 },
    },
    exit: { opacity: 0, y: -5, transition: { duration: 0.2 } },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 relative overflow-hidden">
      {/* Floating Shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 bg-blue-700 rounded-full opacity-20 mix-blend-multiply"
        animate={{ y: ["0%", "10%", "0%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-28 sm:w-40 md:w-48 h-28 sm:h-40 md:h-48 bg-orange-600 rounded-full opacity-10 mix-blend-multiply"
        animate={{ y: ["0%", "-10%", "0%"] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* 
          Responsive grid:
          - 1 column:   <640px
          - 2 columns:  640–1023px
          - 4 columns:  ≥1024px
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Logo & About */}
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <img
              src={logo}
              alt="RP Associates Logo"
              className="h-20 sm:h-24 mb-4"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              RP ASSOCIATES
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Mining, Trading, Logistics & Construction
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-white text-xl sm:text-2xl mt-4">
              <motion.a
                whileHover={{ scale: 1.3, color: "#3b82f6" }}
                href="#"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3, color: "#00acee" }}
                href="#"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3, color: "#e1306c" }}
                href="#"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3, color: "#0077b5" }}
                href="#"
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links with Dropdown */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="font-semibold text-white mb-4 text-lg sm:text-xl">
              Quick Links 🔗
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li>
                <Link
                  className="block hover:text-orange-400 hover:scale-105 transition-all"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="block hover:text-orange-400 hover:scale-105 transition-all"
                  to="/about"
                >
                  About Us
                </Link>
              </li>

              {/* Products Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setIsProductsOpen((p) => !p)}
                  className="flex items-center gap-1 hover:text-orange-400 hover:scale-105 transition-all mx-auto lg:mx-0"
                >
                  Products
                  <motion.span
                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <FaChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isProductsOpen && (
                    <motion.ul
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="pl-4 mt-2 space-y-1 text-left"
                    >
                      {[
                        "Stone Aggregates",
                        "Quartz",
                        "Granite Slabs",
                        "Coal",
                        "Bauxite",
                      ].map((item) => (
                        <motion.li
                          key={item}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "#fbbf24",
                            color: "#000",
                          }}
                          className="rounded"
                        >
                          <Link
                            to={`/products/${item
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block px-2 py-1"
                            onClick={() => setIsProductsOpen(false)}
                          >
                            {item}
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link
                  className="block hover:text-orange-400 hover:scale-105 transition-all"
                  to="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="block hover:text-orange-400 hover:scale-105 transition-all"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="font-semibold text-white mb-4 text-lg sm:text-xl">
              Services ⚙️
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li className="hover:text-orange-400 hover:scale-105 transition-all">
                Mining ⛏️
              </li>
              <li className="hover:text-orange-400 hover:scale-105 transition-all">
                Trading 💰
              </li>
              <li className="hover:text-orange-400 hover:scale-105 transition-all">
                Logistics 🚛
              </li>
              <li className="hover:text-orange-400 hover:scale-105 transition-all">
                Construction 🏗️
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="text-center lg:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3 className="font-semibold text-white mb-4 text-lg sm:text-xl">
              Contact Us 📞
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              D. No. 50-52-4, Sai Kola Complex, Krishna Mandir Road
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              North Extension, Seethammadhara, Visakhapatnam – 530 013
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              Phone: 📱 9440886767
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-4">
              Email: ✉️ Raju@rpassociates.org.in
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 border-t border-gray-700 py-6 text-center text-gray-500 text-xs sm:text-sm relative z-10"
      >
        © {new Date().getFullYear()} RP ASSOCIATES. All rights reserved.
      </motion.div>
    </footer>
  );
}
