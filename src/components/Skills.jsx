export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS/Bootstrap/Tailwind", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 93 },
    { name: "Express.js", level: 95 },
    { name: "MongoDB", level: 95 },
    { name: "MySQL", level: 95 },
    { name: "Git", level: 98 },
    { name: "Canva", level: 85 },
    { name: "Figma", level: 80 },
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
      <div className="max-w-3xl mx-auto mt-8 px-4 border-l-4 border-blue-100 pl-4">
        <p className="text-gray-600 italic text-sm md:text-base">
          <span className="font-semibold">Note:</span> "Technology is a vast and ever-growing field. The levels shown reflect my current working proficiency based on real-world usage. I view learning as a continuous journey and actively strive to deepen my expertise every day."
        </p>
      </div>
    </section>
  );
}