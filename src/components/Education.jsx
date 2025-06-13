export default function Education() {
  return (
    <section id="education" className="py-12">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Education</h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Bachelor of Engineering in Computer Science</h3>
          <p className="text-gray-600">Graduated in 2020</p>
          <p className="mt-2 text-gray-700">Completed my BE in CSE with a focus on software development and computer systems.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">MERN Full Stack Development</h3>
          <p className="text-gray-600">SLA Institute</p>
          <p className="mt-2 text-gray-700">
            Completed comprehensive training in MongoDB, Express.js, React, and Node.js.
            Gained hands-on experience in building full-stack web applications.
          </p>
        </div>
      </div>
    </section>
  );
}