export default function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
            MERN Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
            BE CSE graduate (2020) | MERN Full Stack certified from SLA | Freelance developer building modern web applications.
          </p>
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden shadow-xl">
            {/* Replace with your image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-3/4 h-3/4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}