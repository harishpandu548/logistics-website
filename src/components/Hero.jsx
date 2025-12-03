export default function Hero({ title, subtitle, cta }) {
  return (
    <section
      className="relative  flex items-center justify-center h-96 mb-12"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1596464716121-47eac97d450b')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/40 p-8 rounded text-center text-white">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-4">{subtitle}</p>
        {cta && (
          <a
            href={cta.link}
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  );
}
