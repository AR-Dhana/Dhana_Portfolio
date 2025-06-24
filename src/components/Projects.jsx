export default function Projects() {
  // Replace with your actual projects
  const projects = [
    {
      title: "GoNx Promoters",
      description: `A clean, responsive static website developed for GoNx Promoters. 
      Built using semantic HTML5, modular CSS3, and vanilla JavaScript (ES6), 
      the site emphasizes performance, SEO optimization, and cross-device compatibility.
      The project involved end-to-end deployment activities including domain registration, 
      nameserver configuration, and cPanel-based hosting setup.
      Assets were optimized for minimal load times, and the site was made SSL-ready for secure access.`,
      technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "Bootstarp", "Square Brothers", "Shared Hosting (cPanel)", "Domain registration", "DNS configuration", "Full cPanel Handling"],
      link: "https://www.gonxpromoters.in/",
      isFreelance: true // Add this flag
    },
    {
      title: "A Car Care",
      description: `A fully responsive static website developed for a car service and detailing center to showcase service offerings, 
      location details, and branding information. Built using HTML5, CSS3, JavaScript (ES6), 
      and PHP for structuring reusable page components and maintaining code modularity. 
      The site is optimized for fast load times, SEO, and cross-device compatibility.
      The project included domain registration and deployment using GoDaddy’s shared hosting services. 
      DNS setup was handled through the GoDaddy control panel, and the website was deployed via cPanel File Manager. 
      SSL configuration was applied for secure access over HTTPS.`,
      technologies: ["HTML5", "CSS3", "JavaScript (ES6)", "PHP", "GoDaddy", "Shared Hosting (cPanel)", "Domain registration", "DNS configuration", "Full cPanel Handling"],
      link: "https://acarcare.in/",
      isFreelance: true // Add this flag
    },
    {
      title: "Portfolio",
      description: "Application for managing tasks with user authentication",
      technologies: ["React", "Firebase", "Material UI"],
      link: "#"
    }
  ];

  return (
    // <section id="projects" className="py-18">
    //   <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>

    //   <div className="grid w-3/6  grid-cols-1 text-center md:grid-cols-1 lg:grid-cols-1 gap-6 mx-auto">
    //     {projects.map((project, index) => (
    //       <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
    //         <p className="text-gray-600 mb-4">{project.description}</p>
    //         <div className="flex flex-wrap gap-2 mb-4 justify-center">
    //           {project.technologies.map((tech, i) => (
    //             <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
    //               {tech}
    //             </span>
    //           ))}
    //         </div>
    //         <a
    //           href={project.link}
    //           className="text-blue-600 hover:text-blue-800 font-medium inline-block"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           View Project →
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>





    // <section id="projects" className="py-18">
    //   <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>

    //   <div className="grid w-3/6 grid-cols-1 text-center md:grid-cols-1 lg:grid-cols-1 gap-6 mx-auto">
    //     {projects.map((project, index) => (
    //       <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative">

    //         {project.title === "GoNx Promoters" && (
    //           <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg rounded-tr-lg">
    //             Freelancing project
    //           </span>
    //         )}

    //         <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
    //         <p className="text-gray-600 mb-4">{project.description}</p>
    //         <div className="flex flex-wrap gap-2 mb-4 justify-center">
    //           {project.technologies.map((tech, i) => (
    //             <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
    //               {tech}
    //             </span>
    //           ))}
    //         </div>
    //         <a
    //           href={project.link}
    //           className="text-blue-600 hover:text-blue-800 font-medium inline-block"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           View Project →
    //         </a>
    //       </div>
    //     ))}
    //   </div>
    // </section>




    <section id="projects" className="py-18">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Projects</h2>

      <div className="grid w-auto grid-cols-1 text-center gap-6 md:grid-cols-1 md:w-3/4 md:mx-auto lg:grid-cols-1 lg:w-3/6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow relative">
            {/* Freelance Flag/Badge - shown only when isFreelance is true */}
            {project.isFreelance && (
              <span className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg rounded-tr-lg">
                Freelancing Project
              </span>
            )}

            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
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