'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800 dark:text-white">
              Hedi Bayoudh
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600 dark:text-slate-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 border-t border-slate-200 dark:border-slate-700">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                About
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                Experience
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                Skills
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            Hedi Bayoudh
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8">
            Future Computer Science & AI Engineer
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            Final year engineering student in digital systems, seeking a 6-month internship in development and artificial intelligence. 
            Passionate about contributing to innovative AI and software development projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              Get In Touch
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors"
            >
              View My Work
            </button>
            <a 
              href="/cv-hedi-bayoudh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I am a final year engineering student in digital systems at INP Lorraine Ensem, specializing in the design and integration of digital systems that combine electronics, computer science, and networks.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                With a strong foundation from my preparatory classes (MP) and hands-on experience in AI and web development, I am passionate about creating innovative solutions that bridge the gap between technology and real-world applications.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                I am currently seeking a 6-month internship starting in late February to apply my technical knowledge and contribute to cutting-edge projects in AI and software development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Quick Facts</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  Final year engineering student
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  Specialized in AI and digital systems
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  Fluent in French, English (C1 TOEIC 965), Arabic
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  Available for 6-month internship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">Experience & Education</h2>
          
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Cycle ingénieur en système numérique</h4>
                  <p className="text-slate-600 dark:text-slate-300">INP Lorraine Ensem • 2023-2026</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Courses focused on the design and integration of digital systems combining electronics, computer science, and networks.
                  </p>
                </div>
                <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Classe préparatoire aux grandes écoles MP</h4>
                  <p className="text-slate-600 dark:text-slate-300">Esprit-prépa Tunis • 2021-2023</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    Two years of preparatory classes focused on mathematics, physics, and computer science, preparing for engineering school entrance exams.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Professional Experience</h3>
              <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">Web Development & AI Intern</h4>
                <p className="text-slate-600 dark:text-slate-300">Inoteqia, Tunis • Summer 2025</p>
                <ul className="text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                  <li>• Participated in the development and maintenance of the web application backend</li>
                  <li>• Developed AI models and integrated them with FastAPI (LangChain, RAG)</li>
                  <li>• Created and tested backend APIs in Spring Boot (Postman, IntelliJ IDEA)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Elokencia - Smart Work Tool</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                AI-powered platform for meeting analysis and smart work adaptation. Developed AI models for meeting analysis and integrated via FastAPI using LangChain and RAG.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">FastAPI</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">LangChain</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">RAG</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Spring Boot</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Inoteqia, Tunis • Summer 2025</p>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Real-time AI Chatbot</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Interactive real-time AI chatbot with intuitive interface, multilingual support, and personalized conversation modes (CV Critic, Language Tutor, etc.).
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Django</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">LangChain</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">WebSockets</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">Personal Project • Summer 2025</p>
                <a 
                  href="https://github.com/hedibay/django-react-langchain-chat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">TETRIS for Everyone</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Developed a Tetris game on LED matrix with ESP32 microcontroller in C++. Created a responsive web interface for smartphone play via Wi-Fi with real-time WebSocket communication.
              </p>
              <div className="mb-4">
                <Image 
                  src="/images/Tetris.webp" 
                  alt="TETRIS Game on LED Matrix" 
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-slate-200 dark:border-slate-600"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">C++</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">ESP32</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">WebSocket</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Web Interface</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">INP Lorraine Ensem • 2023-2024</p>
                <a 
                  href="/Tetris.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Labyrinth Adventure Game</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                A Java-based 2D adventure game where players explore a labyrinth, collect keys to progress through levels, and battle monsters and ghosts. Features object-oriented programming principles and agile project management.
              </p>
              <div className="mb-4">
                <Image 
                  src="/images/labyrinth-game.png" 
                  alt="Labyrinth Adventure Game Screenshot" 
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-slate-200 dark:border-slate-600"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Java</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">OOP</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Game Development</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Maven</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">Academic Project • 2023-2024</p>
                <a 
                  href="https://github.com/uzi-belfayez/ACL_Project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Robot Path Optimization</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Developed an automated path optimization system for LEGO Mindstorms EV3 robot. Implemented algorithmic optimization and mathematical modeling to determine optimal traversal paths, with automated control systems using MATLAB/Simulink.
              </p>
              <div className="mb-4">
                <Image 
                  src="/images/robot.webp" 
                  alt="LEGO Mindstorms EV3 Robot" 
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-slate-200 dark:border-slate-600"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">MATLAB</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Simulink</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">LEGO EV3</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Robotics</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">Academic Project • 2023-2024</p>
                <a 
                  href="/sami_rapport.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Concurrent Traffic Simulation</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Developed a concurrent road traffic simulation in C using pthreads. Implemented thread management and synchronization algorithms to model and coordinate vehicle flows, avoiding conflicts in a multi-threaded environment.
              </p>
              <div className="mb-4">
                <Image 
                  src="/images/traffic-simulation.png.webp" 
                  alt="Concurrent Traffic Simulation Grid" 
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-lg mb-4 border border-slate-200 dark:border-slate-600"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">C</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">pthreads</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Concurrency</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Synchronization</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">Academic Project • 2023-2024</p>
                <a 
                  href="https://github.com/hedibay/traffic-simulation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">Technical Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Programming Languages</h3>
              <div className="space-y-3">
                {['Java', 'JavaScript', 'Python', 'C++', 'C', 'SQL', 'VHDL', 'CSS', 'MatLab'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                    <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">AI & Machine Learning</h3>
              <div className="space-y-3">
                {['PyTorch', 'TensorFlow', 'LangChain', 'LLM Agents', 'RAG', 'FastAPI', 'Machine Learning', 'Deep Learning', 'NLP'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                    <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Frameworks */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Tools & Frameworks</h3>
              <div className="space-y-3">
                {['Django', 'React', 'Spring Boot', 'Git', 'Docker', 'Postman', 'IntelliJ IDEA'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                    <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="mt-12 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">Languages</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Arabic</h4>
                <p className="text-slate-600 dark:text-slate-300">Native</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">French</h4>
                <p className="text-slate-600 dark:text-slate-300">Advanced</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">English</h4>
                <p className="text-slate-600 dark:text-slate-300">C1 TOEIC 965</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">German</h4>
                <p className="text-slate-600 dark:text-slate-300">Beginner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            I&apos;m currently seeking a 6-month internship in development and artificial intelligence starting in late February. 
            Let&apos;s discuss how I can contribute to your team&apos;s innovative projects.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-slate-600 dark:text-slate-400">📧</span>
                  <a href="mailto:hedi.bayoudh4@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                    hedi.bayoudh4@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-slate-600 dark:text-slate-400">📱</span>
                  <span className="text-slate-600 dark:text-slate-300">+33 6 15 23 03 91</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-slate-600 dark:text-slate-400">📍</span>
                  <span className="text-slate-600 dark:text-slate-300">Villers-lès-Nancy, France</span>
                </div>
                <div className="flex items-center">
                  <span className="w-6 h-6 mr-3 text-slate-600 dark:text-slate-400">💼</span>
                  <a href="https://www.linkedin.com/in/hedi-bayoudh" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Availability</h3>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Internship Duration</h4>
                  <p className="text-slate-600 dark:text-slate-300">6 months</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Start Date</h4>
                  <p className="text-slate-600 dark:text-slate-300">Late February 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Focus Areas</h4>
                  <p className="text-slate-600 dark:text-slate-300">AI Development, Web Development, Software Engineering</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:hedi.bayoudh4@gmail.com"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/hedi-bayoudh"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="/cv-hedi-bayoudh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Hedi Bayoudh. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
