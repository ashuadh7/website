const skills = {
  "Frontend": ["React", "TypeScript", "TailwindCSS", "Next.js", "Vue.js"],
  "Backend": ["Node.js", "Python", "Express", "Django", "PostgreSQL"],
  "DevOps": ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"],
  "Tools": ["Git", "VS Code", "Figma", "Postman", "Jest"]
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}