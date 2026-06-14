import { Code, Sparkles, Globe, Brain, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Solar Dashboard',
    description: 'A comprehensive solar energy monitoring dashboard displaying real-time energy generation, consumption metrics, and performance analytics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    icon: Sparkles,
    gradient: 'gradient-pink',
    link: 'https://dashboard-liart-rho.vercel.app/'
  },
  {
    title: 'Customer Lifetime Service',
    description: 'A comprehensive customer relationship management system designed to track and optimize customer lifetime value with advanced analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    icon: Brain,
    gradient: 'gradient-purple',
    link: 'https://github.com/Lithikasraya/customer-life-time-service-project-'
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management, payment integration, and user analytics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    icon: Globe,
    gradient: 'gradient-blue',
    link: ''
  },
  {
    title: 'Code Snippet Library',
    description: 'A personal code snippet manager with syntax highlighting, tagging system, and instant search functionality.',
    technologies: ['React', 'Firebase', 'Monaco Editor', 'TypeScript'],
    icon: Code,
    gradient: 'gradient-purple',
    link: ''
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
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (!project.link) {
                  e.preventDefault();
                }
              }}
              className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div className={`w-16 h-16 ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                {project.link && <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </div>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
