export default function SkillsSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 bg-gray-100">
      {["HTML", "CSS", "JavaScript"].map((skill) => (
        <div key={skill} className="bg-white p-4 shadow text-center font-medium">
          {skill}
        </div>
      ))}
    </section>
  );
}
