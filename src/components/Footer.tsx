import { Heart } from 'lucide-react';

export default function Footer() {
  return (
  <footer className="py-8 px-6 border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black transition-colors duration-300">
      <div className="container mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-black dark:text-white">
          Made by <span className="text-purple-700 dark:text-purple-300">Lithika Sraya C</span>
        </p>
  <p className="text-sm mt-2 text-gray-700 dark:text-gray-400">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
