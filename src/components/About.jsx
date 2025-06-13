export default function About() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">About Me</h2>
        
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="w-48 h-48 mx-auto rounded-full bg-gray-200 overflow-hidden mb-6">
                {/* Replace with your image */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg className="w-3/4 h-3/4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800">Your Name</h3>
                <p className="text-gray-600">MERN Stack Developer</p>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-gray-700 mb-4">
                I'm a Computer Science graduate (2020) with specialized training in MERN Full Stack Development from SLA Institute. 
                I'm passionate about building modern web applications with clean, efficient code.
              </p>
              <p className="text-gray-700 mb-4">
                As a freelance developer, I've worked on various projects that have helped me hone my skills in React, Node.js, 
                and database management. I enjoy solving complex problems and creating intuitive user experiences.
              </p>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">Personal Details:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                  <li><span className="font-medium">Location:</span> Your City</li>
                  <li><span className="font-medium">Email:</span> your.email@example.com</li>
                  <li><span className="font-medium">Degree:</span> BE Computer Science</li>
                  <li><span className="font-medium">Freelance:</span> Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}