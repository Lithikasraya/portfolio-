import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'SmartCity Intern',
    description: 'Worked at SmartCity Lab, focusing on IoT device integration and smart solutions for urban environments. Assisted in sensor deployment, data collection, and real-time monitoring projects.',
    year: '2025'
  }
];

export default function Experience() {
  return (
  <section id="experience" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black dark:text-white">
          <span className="text-purple-700 dark:text-purple-300">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Removed Briefcase icon, only logo will show next to title */}
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/Screenshot 2025-09-06 105632.png" alt="SmartCity Lab Logo" className="w-8 h-8 object-contain" />
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                    </div>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-sm text-blue-300 border border-blue-500/30">
                    {exp.year}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
