export default function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS/Tailwind", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "Git", level: 80 },
  ];

  return (
    <section id="skills" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">My Skills</h2>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}