import dhanaImage from '../assets/Dhana-image-png2.jpeg';
import { NavLink } from "react-router-dom";

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

          <div className="flex flex-wrap gap-4">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-6 py-3 border bg-gray-800 text-white rounded-lg ${isActive ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-800'}`
              }
            >
              Contact Me
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `px-6 py-3 border bg-gray-800 text-white rounded-lg ${isActive ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-blue-800'}`
              }
            >
              View Projects
            </NavLink>
            <a
              href="Dhanalakshmi - MERN.pdf"
              download="Dhanalakshmi_AR_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Get My Resume
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden shadow-xl">
            <img
              src={dhanaImage}
              alt="Dhanalakshmi"
              className="w-full h-90 object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
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