export default function Projects() {
  // Replace with your actual projects
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with React frontend and Node.js backend",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS",
      technologies: ["React", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Application for managing tasks with user authentication",
      technologies: ["React", "Firebase", "Material UI"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link} 
              className="text-blue-600 hover:text-blue-800 font-medium inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}