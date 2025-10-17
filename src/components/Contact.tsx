import { Mail, Github, Linkedin, Send } from 'lucide-react';

const contacts = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lithikasrayac@gmail.com',
    link: 'mailto:lithikasrayac@gmail.com',
    gradient: 'gradient-purple'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'https://github.com/Lithikasraya',
    link: 'https://github.com/Lithikasraya',
    gradient: 'gradient-blue'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/lithika-sraya-c-672581292',
    link: 'https://www.linkedin.com/in/lithika-sraya-c-672581292',
    gradient: 'gradient-pink'
  }
];

export default function Contact() {
  return (
  <section id="contact" className="py-20 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black dark:text-white">
          <span className="text-purple-700 dark:text-purple-300">Get In Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Feel free to reach out for collaborations, opportunities, or just a friendly chat!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 text-center"
            >
              <div className={`w-16 h-16 ${contact.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">{contact.label}</h3>
              <p className="text-gray-400 text-sm break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
          <Send className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">Let's Create Something Amazing</h3>
          <p className="text-gray-400 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:lithika.sraya@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 gradient-multi rounded-full font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            Send a Message
          </a>
        </div>
      </div>
    </section>
  );
}
