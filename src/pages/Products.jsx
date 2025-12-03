import React from "react";
import { motion } from "framer-motion";

// Import product images
import bauxiteImg from "../assets/bauxite.jpeg";
import coalImg from "../assets/coal.jpg";
import quartzImg from "../assets/quartz.jpg";
import stoneImg from "../assets/stone.jpg";
import graniteImg from "../assets/granite.jpg";

export default function Products() {
  const products = [
    { id: 1, name: "Bauxite", description: "Aluminum-rich bauxite sourced sustainably.", image: bauxiteImg },
    { id: 2, name: "Coal", description: "High-quality coal for industrial energy needs.", image: coalImg },
    { id: 3, name: "Quartz", description: "Premium quartz for industrial and decorative use.", image: quartzImg },
    { id: 4, name: "Stone Aggregates", description: "Durable stone aggregates for construction.", image: stoneImg },
    { id: 5, name: "Granite Slabs", description: "High-quality granite slabs for buildings & interiors.", image: graniteImg },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 70 },
    }),
  };

  return (
    <section className="max-w-7xl mx-auto p-8 mt-16">
      <motion.h2
        className="text-4xl font-bold text-blue-700 mb-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        viewport={{ once: true }}
      >
        Our Products
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer hover:scale-105 hover:shadow-2xl transition-all"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i + 1}
            variants={fadeInUp}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover"
              draggable={false}
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{product.name}</h3>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
