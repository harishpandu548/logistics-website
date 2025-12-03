import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services"; // Added if you have a Services page
// import NotFound from "./pages/NotFound"; // Optional 404 page

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products/:productName" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> Optional catch-all */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
