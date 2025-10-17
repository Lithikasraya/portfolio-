import { Award } from 'lucide-react';
const certifications = [
  {
    title: 'Machine Learning ',
    note: 'IIIT HYDERABAD',
    year: '2024',
    image: '../public/ml.jpg'
  },
  {
    title: 'python ',
    note: 'infosys',
    year: '2024',
  image: '/python.png'
  },
  {
    title: 'kali linux basics',
    note: 'simplilearn',
    year: '2024',
  image: '/kali basics.png'
  },
  {
    title: 'harware basics ',
    note: 'cisco',
    year: '2025',
  image: '/hardware.png'
  },
  {
    title: 'ethical hacking',
    note: 'infosys',
    year: '2024',
  image: '/ethical hacking.png'
  },
  {
    title: 'cyber security modulus ',
    note: '',
    year: '2024',

  image: '/cyber.png'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-black dark:text-white">
          <span className="text-purple-700 dark:text-purple-300">Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
            > <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="w-12 h-12 gradient-pink rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                {cert.note}
              </p>
              <span className="inline-block px-3 py-1 bg-pink-500/20 rounded-full text-xs text-pink-300 border border-pink-500/30">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
