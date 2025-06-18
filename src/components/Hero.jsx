import { Link, NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Dhanalakshmi AR</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
            MERN Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            BE CSE graduate (2020) | MERN Full Stack certified from SLA | Freelance developer building modern web applications.
          </p>
          
          <div className="flex space-x-4">
            {/* <Link
              to="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Projects
            </Link> */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-6 py-3 border bg-blue-300 text-gray-700 rounded-lg ${isActive ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              Contact Me
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-6 py-3 border bg-blue-300 text-gray-700 rounded-lg ${isActive ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              View Projects
            </NavLink>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden shadow-xl">
            {/* Replace with your actual image */}
            <img
              src="Dhana-image-png2.jpeg"
              alt="Dhanalakshmi"
              className="w-full h-90 object-cover"
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            {/* Fallback remains but hidden by default */}
            <div className="w-full h-full hidden items-center justify-center text-gray-400">
              <svg className="w-3/4 h-3/4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}