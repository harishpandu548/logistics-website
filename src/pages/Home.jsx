import { useState, useEffect, useRef } from "react";
import {AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTruck, FaIndustry, FaShieldAlt, FaClock } from "react-icons/fa";

// Images
import shipContainer from "../assets/ship-with-container.jpg";
import stoneCrusher from "../assets/four-stage-stone-crusher.png";
import buildings from "../assets/few-building.png";
import lorryGoods from "../assets/lorry-carrying-goods.jpg";

// Slide data
const slides = [
  {
    name: "Efficient Shipping Solutions",
    image: shipContainer,
    description:
      "Reliable and timely container transport for businesses worldwide, ensuring your goods reach safely and on schedule.",
  },
  {
    name: "Advanced Stone Crushing",
    image: stoneCrusher,
    description:
      "High-performance four-stage crushers designed for construction and industrial efficiency, delivering consistent quality aggregates.",
  },
  {
    name: "Modern Infrastructure Development",
    image: buildings,
    description:
      "Building sustainable and durable structures with top-quality materials and expert craftsmanship for commercial and residential projects.",
  },
  {
    name: "Safe & Reliable Transport",
    image: lorryGoods,
    description:
      "Dependable logistics services for transporting goods across regions with safety, punctuality, and professional handling.",
  },
];

// "Why Choose Us" data
const features = [
  {
    icon: <FaTruck size={30} />,
    title: "Timely Delivery",
    description: "Ensuring your shipments arrive on time, every time.",
  },
  {
    icon: <FaIndustry size={30} />,
    title: "Modern Equipment",
    description: "High-tech machines for precise and efficient operations.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Safety First",
    description: "Safe handling of goods and adherence to industry standards.",
  },
  {
    icon: <FaClock size={30} />,
    title: "24/7 Support",
    description: "Round-the-clock assistance for queries and logistics tracking.",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlide = useRef();
  const length = slides.length;

  // Auto slide effect
  useEffect(() => {
    startAutoSlide();
    const handleScroll = () => startAutoSlide();
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(autoSlide.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const startAutoSlide = () => {
    clearInterval(autoSlide.current);
    autoSlide.current = setInterval(() => handleNext(), 5000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrent((prev) => (prev + 1) % length);
    startAutoSlide();
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + length) % length);
    startAutoSlide();
  };

  const handleAnimationComplete = () => setIsAnimating(false);

  // Slider Variants
  const imageVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, type: "spring", stiffness: 100, damping: 25 },
    },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.95, transition: { duration: 0.8 } }),
  };

  const textContainerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.5 } },
  };

  const arrowVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, type: "spring", stiffness: 120, damping: 18 } },
  };

  const dotVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 18 } },
  };

  // Feature animation variants
  const featureVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring", stiffness: 120, damping: 18 } },
  };

  return (
    <div className="w-full">
      {/* Hero Slider */}
      <section className="relative w-full h-[90vh] md:h-[95vh] lg:h-screen overflow-hidden bg-gray-900">
        <AnimatePresence initial={false} custom={direction} onExitComplete={handleAnimationComplete}>
          <motion.div
            key={current}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt={slides[current].name}
              className="w-full h-full object-cover"
              draggable={false}
            />

            <AnimatePresence initial={true} mode="wait">
              <motion.div
                key={`text-${current}`}
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute bottom-20 md:bottom-32 lg:bottom-40 left-1/2 transform -translate-x-1/2 text-center px-4 sm:px-6 md:px-8 max-w-3xl"
              >
                <motion.h2
                  key={`title-${current}`}
                  variants={textItemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl mb-4 leading-tight"
                >
                  {slides[current].name}
                </motion.h2>
                <motion.p
                  key={`desc-${current}`}
                  variants={textItemVariants}
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white drop-shadow-md"
                >
                  {slides[current].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <motion.button
          onClick={handlePrev}
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2, rotate: -10 }}
          className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 sm:p-4 hover:bg-orange-400 hover:text-white transition-all z-30 shadow-lg"
        >
          <FaChevronLeft size={20} className="sm:text-2xl" />
        </motion.button>

        <motion.button
          onClick={handleNext}
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.2, rotate: 10 }}
          className="absolute right-3 sm:right-5 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 sm:p-4 hover:bg-orange-400 hover:text-white transition-all z-30 shadow-lg"
        >
          <FaChevronRight size={20} className="sm:text-2xl" />
        </motion.button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 sm:bottom-8 w-full flex justify-center space-x-2 sm:space-x-3 z-30">
          {slides.map((_, idx) => (
            <motion.div
              key={idx}
              onClick={() => {
                if (isAnimating || idx === current) return;
                setDirection(idx > current ? 1 : -1);
                setCurrent(idx);
                startAutoSlide();
              }}
              variants={dotVariants}
              initial="hidden"
              animate="visible"
              className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full cursor-pointer ${idx === current ? "bg-orange-400" : "bg-gray-300"}`}
              whileHover={{ scale: 1.5, backgroundColor: "#f97316" }}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
            We deliver top-notch services with efficiency, safety, and innovation. Your trust drives our commitment.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureVariants}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <div className="text-orange-400 mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
