export default function ProjectsSection() {
  const projects = [
    {
      title: "Projet N°1 : Restaurant Chef's kitchen",
      image: "/Images/Chefkitchen.png",
      description:
        "Création d'un site web responsive static avec HTML / CSS & Boostrap pour un restaurant.",
    },
    {
      title: "Projet N°2 : Landing page KEA boutique",
      image: "/Images/Landing_page.jpg",
      description:
        "Landing page responsive avec header, produits et pied de page pour une boutique en ligne.",
    },
  ];

  return (
    <section id="projets" className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg p-4">
          <h3 className="text-xl font-bold mt-2 mb-4">{project.title}</h3>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
}
