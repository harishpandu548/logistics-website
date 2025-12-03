import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Product images
import bauxiteImg from "../assets/bauxite.jpeg";
import coalImg from "../assets/coal.jpg";
import quartzImg from "../assets/quartz.jpg";
import stoneImg from "../assets/stone.jpg";
import graniteImg from "../assets/granite.jpg";

export default function ProductDetail() {
  const { productName } = useParams();
  const navigate = useNavigate();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [direction, setDirection] = useState(0);

  const products = [
    {
      name: "bauxite",
      displayName: "Bauxite",
      description:
        "Aluminum-rich bauxite sourced sustainably, ideal for industrial use and construction applications.",
      image: bauxiteImg,
      details: [
        "Sourced from certified mines ensuring sustainable practices.",
        "High aluminum content for industrial processing.",
        "Environmentally conscious extraction and transport.",
      ],
    },
    {
      name: "coal",
      displayName: "Coal",
      description:
        "Premium coal for industrial energy needs, providing consistent output and reliability.",
      image: coalImg,
      details: [
        "High calorific value for energy efficiency.",
        "Low sulfur content ensures cleaner combustion.",
        "Suitable for thermal power plants and industrial furnaces.",
      ],
    },
    {
      name: "quartz",
      displayName: "Quartz",
      description:
        "Premium quartz for industrial and decorative use, perfect for countertops, electronics, and glass manufacturing.",
      image: quartzImg,
      details: [
        "High purity quartz suitable for electronics and optics.",
        "Ideal for countertops and decorative surfaces.",
        "Consistent grain and color quality for industrial applications.",
      ],
    },
    {
      name: "stone-aggregates",
      displayName: "Stone Aggregates",
      description:
        "Durable stone aggregates for construction projects, ensuring strong foundations and quality concrete mixes.",
      image: stoneImg,
      details: [
        "Crushed stone aggregates for concrete and asphalt.",
        "Sizes ranging from fine to coarse for flexibility.",
        "Ensures long-lasting durability for construction projects.",
      ],
    },
    {
      name: "granite-slabs",
      displayName: "Granite Slabs",
      description:
        "High-quality granite slabs for buildings, flooring, and interiors. Aesthetic, durable, and perfect for various applications.",
      image: graniteImg,
      details: [
        "Natural stone with premium polish and finish.",
        "Ideal for countertops, flooring, and wall cladding.",
        "Available in multiple colors and thickness options.",
      ],
    },
  ];

  useEffect(() => {
    const prodIndex = products.findIndex(
      (p) => p.name === productName.toLowerCase()
    );
    if (prodIndex === -1) {
      navigate("/");
    } else {
      setCurrentProduct({ ...products[prodIndex], index: prodIndex });
    }
  }, [productName]);

  if (!currentProduct) return null;

  // Hero image animation
  const fadeSlideVariants = {
    enter: { opacity: 0, scale: 0.95 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.5 } },
  };

  // Detail cards animation
  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 120 } },
  };

  const handleNavigate = (idx) => {
    const dir = idx > currentProduct.index ? 1 : -1;
    setDirection(dir);
    navigate(`/products/${products[idx].name}`);
  };

  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={currentProduct.name}
            src={currentProduct.image}
            alt={currentProduct.displayName}
            className="w-full h-full object-cover"
            custom={direction}
            variants={fadeSlideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            draggable={false}
          />
        </AnimatePresence>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black opacity-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        />

        {/* Text on Image */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={`title-${currentProduct.name}`}
              custom={direction}
              variants={fadeSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-xl mb-4"
            >
              {currentProduct.displayName}
            </motion.h1>
            <motion.p
              key={`desc-${currentProduct.name}`}
              custom={direction}
              variants={fadeSlideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl drop-shadow-md"
            >
              {currentProduct.description}
            </motion.p>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Details Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
        >
          Key Features & Details
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {currentProduct.details.map((detail, idx) => (
              <motion.div
                key={`${currentProduct.name}-detail-${idx}`}
                variants={detailVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ delay: idx * 0.2 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 flex items-start hover:shadow-2xl hover:scale-105 transition-transform cursor-pointer"
              >
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{detail}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 pb-16">
        {currentProduct.index > 0 && (
          <button
            onClick={() => handleNavigate(currentProduct.index - 1)}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform w-48 sm:w-auto"
          >
            Previous
          </button>
        )}
        {currentProduct.index < products.length - 1 && (
          <button
            onClick={() => handleNavigate(currentProduct.index + 1)}
            className="bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform w-48 sm:w-auto"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
}
