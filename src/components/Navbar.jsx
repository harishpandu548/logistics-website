import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/RP logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Products",
      dropdown: ["Stone Aggregates", "Quartz", "Granite Slabs", "Coal", "Bauxite"],
    },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const MotionLink = motion(Link);

  // Close dropdown/mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsProductsOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Motion variants
  const containerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 150, damping: 20 } },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { type: "spring", stiffness: 150, damping: 20 } },
    exit: { height: 0, opacity: 0, transition: { type: "spring", stiffness: 150, damping: 20 } },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      ref={navRef}
    >
      {/* Desktop Navbar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-amber-700 flex justify-between items-center max-w-7xl mx-auto px-5 py-2 rounded-b-lg shadow-md">
        {/* Logo */}
        <motion.div variants={itemVariants}>
          <MotionLink to="/" className="flex items-center space-x-2" whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 200 }}>
            <img src={logo} alt="RP Logo" className="h-10 w-auto" />
            <h1 className="text-sm font-semibold text-white">RP ASSOCIATES</h1>
          </MotionLink>
        </motion.div>

        {/* Desktop Links */}
        <motion.ul className="hidden md:flex space-x-8 items-center font-medium">
          {navLinks.map((link) => {
            const isActive = link.path ? (link.path === "/" ? location.pathname === "/" : location.pathname.startsWith(link.path)) : false;
            const hasDropdown = !!link.dropdown;

            return (
              <motion.li
                key={link.name}
                className="relative"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                onMouseEnter={() => hasDropdown && setIsProductsOpen(true)}
                onMouseLeave={() => hasDropdown && setIsProductsOpen(false)}
              >
                {hasDropdown ? (
                  <button
                    type="button"
                    onClick={() => setIsProductsOpen((prev) => !prev)}
                    className={`relative flex items-center gap-1 text-lg font-medium ${location.pathname.startsWith("/products") ? "text-amber-400" : "text-white"}`}
                  >
                    {link.name}
                    <motion.span animate={{ rotate: isProductsOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="inline-block">
                      <FaChevronDown size={14} />
                    </motion.span>
                  </button>
                ) : (
                  <MotionLink to={link.path} className={`relative text-lg font-medium ${isActive ? "text-amber-400" : "text-white"}`}>
                    {link.name}
                    <motion.span className="absolute -bottom-1 left-0 h-0.5 bg-amber-400" animate={{ width: isActive ? "100%" : 0 }} whileHover={{ width: "100%" }} transition={{ type: "spring", stiffness: 100 }} />
                  </MotionLink>
                )}

                {/* Dropdown */}
                {hasDropdown && (
                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.ul
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 bg-slate-800 text-white rounded-md shadow-lg w-48 z-50"
                      >
                        {link.dropdown.map((item) => (
                          <motion.li key={item} whileHover={{ scale: 1.05, backgroundColor: "#fbbf24", color: "#000" }} transition={{ type: "spring", stiffness: 200 }}>
                            <Link to={`/products/${item.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setIsProductsOpen(false)} className="block w-full h-full px-4 py-2 text-sm">
                              {item}
                            </Link>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Desktop Social */}
        <motion.div className="hidden md:flex space-x-4 text-white text-xl" variants={itemVariants}>
          <motion.a whileHover={{ scale: 1.3 }} href="#"><FaFacebook /></motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="#"><FaTwitter /></motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="#"><FaInstagram /></motion.a>
          <motion.a whileHover={{ scale: 1.3 }} href="#"><FaLinkedin /></motion.a>
        </motion.div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl focus:outline-none">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit" className="md:hidden bg-slate-900 text-white overflow-hidden">
            <motion.ul initial="hidden" animate="visible" exit="hidden" className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const hasDropdown = !!link.dropdown;
                return (
                  <motion.li key={link.name} className="relative">
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => setIsProductsOpen((prev) => !prev)}
                          className="flex justify-between w-full px-2 py-2 font-medium text-white"
                        >
                          {link.name}
                          <motion.span animate={{ rotate: isProductsOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <FaChevronDown />
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {isProductsOpen && (
                            <motion.ul
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="pl-4 mt-1 flex flex-col space-y-1"
                            >
                              {link.dropdown.map((item) => (
                                <motion.li key={item} whileHover={{ scale: 1.05, backgroundColor: "#fbbf24", color: "#000" }}>
                                  <Link
                                    to={`/products/${item.toLowerCase().replace(/\s+/g, "-")}`}
                                    onClick={() => {
                                      setIsMobileMenuOpen(false);
                                      setIsProductsOpen(false);
                                    }}
                                    className="block px-2 py-1 rounded"
                                  >
                                    {item}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-2 py-2 font-medium hover:text-amber-400"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
