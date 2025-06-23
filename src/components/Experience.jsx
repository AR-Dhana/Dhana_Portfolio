export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Career Journey</h2>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Freelance Developer</h3>
          <p className="text-gray-600">2024 - Present</p>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
            <li>Developed and deployed web applications for various clients</li>
            <li>Collaborated with clients to understand requirements and deliver solutions</li>
            <li>Worked with technologies including React, Node.js, MongoDB, and Tailwind CSS</li>
            <li>Implemented responsive designs and optimized performance</li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">MERN Stack Training</h3>
          <p className="text-gray-600">SLA Institute</p>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
            <li>Completed intensive full-stack development program</li>
            <li>Built multiple projects including e-commerce platforms and social media applications</li>
            <li>Learned modern development practices and tools</li>
          </ul>
        </div>
      </div>
    </section>
  );
}