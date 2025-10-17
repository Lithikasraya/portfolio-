import { Code, Sparkles, Globe, Brain } from 'lucide-react';

const projects = [
  {
    title: 'AI Task Manager',
    description: 'An intelligent task management application that uses machine learning to prioritize tasks and predict completion times.',
    technologies: ['React', 'Python', 'TensorFlow', 'Node.js'],
    icon: Brain,
    gradient: 'gradient-purple'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management, payment integration, and user analytics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    icon: Globe,
    gradient: 'gradient-blue'
  },
  {
    title: 'Weather Forecast App',
    description: 'A beautiful weather application with interactive maps, hourly forecasts, and severe weather alerts using real-time API data.',
    technologies: ['JavaScript', 'API Integration', 'CSS3', 'Chart.js'],
    icon: Sparkles,
    gradient: 'gradient-pink'
  },
  {
    title: 'Code Snippet Library',
    description: 'A personal code snippet manager with syntax highlighting, tagging system, and instant search functionality.',
    technologies: ['React', 'Firebase', 'Monaco Editor', 'TypeScript'],
    icon: Code,
    gradient: 'gradient-purple'
  }
];

export default function Projects() {
  return (
  <section id="projects" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black dark:text-white">
          <span className="text-purple-700 dark:text-purple-300">Featured Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className={`w-16 h-16 ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 group-hover:border-purple-500/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
