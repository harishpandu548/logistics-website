// src/components/TeamCard.jsx
export default function TeamCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
  );
}
