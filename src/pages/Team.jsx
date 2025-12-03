// src/pages/Team.jsx
import TeamCard from "../components/TeamCard";
// import member1 from "../assets/team/member1.jpg";
// import member2 from "../assets/team/member2.jpg";

// const team = [
//   { name: "John Doe", role: "CEO", image: member1 },
//   { name: "Jane Smith", role: "COO", image: member2 },
// ];

export default function Team() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
        Meet Our Team
      </h1>
      <h2 className="text-red-900">Hello</h2>
      {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <TeamCard key={member.name} {...member} />
        ))}
      </div> */}
    </section>
  );
}
