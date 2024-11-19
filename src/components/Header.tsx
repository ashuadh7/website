import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            JD
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}