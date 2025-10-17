import { ArrowDown } from 'lucide-react';
// ...existing code...

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          <div className="relative group">
            <div className="absolute -inset-1 gradient-multi rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10">
              <img
                src="/WhatsApp Image 2025-10-11 at 12.24.48_3c23712e.jpg"
                alt="Lithika Sraya C"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in text-black dark:text-white">
              Lithika Sraya C
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-semibold text-purple-700 dark:text-purple-300">
              Aspiring Developer · ML Enthusiast · Frontend Learner .Cybersecurity Enthusiast .Full Stack 
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Passionate about creating elegant solutions through code and exploring the endless possibilities of machine learning and web development.
            </p>
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center gap-3 px-8 py-4 gradient-multi rounded-full font-semibold text-lg transition-transform hover:scale-105 active:scale-95"
            >
              View My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/50" />
      </div>
    </section>
  );
}
