'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('about')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                {t.nav.experience}
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                {t.nav.projects}
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                {t.nav.contact}
              </button>
              {/* Language Dropdown */}
              <div className="relative language-dropdown">
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm font-medium px-3 py-1 rounded-md border border-slate-300 dark:border-slate-600"
                >
                  <Image
                    src={language === 'en' ? '/uk.png' : '/france.png'}
                    alt={language === 'en' ? 'UK Flag' : 'French Flag'}
                    width={20}
                    height={15}
                    className="w-5 h-4 rounded-sm"
                  />
                  <span>{language === 'en' ? 'EN' : 'FR'}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isLanguageDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-md shadow-lg border border-slate-200 dark:border-slate-700 z-50">
                    <button
                      onClick={() => {
                        setLanguage('fr');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                        language === 'fr' ? 'bg-slate-100 dark:bg-slate-700' : ''
                      }`}
                    >
                      <Image
                        src="/france.png"
                        alt="French Flag"
                        width={20}
                        height={15}
                        className="w-5 h-4 rounded-sm"
                      />
                      <span>Français</span>
                    </button>
                    <button
                      onClick={() => {
                        setLanguage('en');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors ${
                        language === 'en' ? 'bg-slate-100 dark:bg-slate-700' : ''
                      }`}
                    >
                      <Image
                        src="/uk.png"
                        alt="UK Flag"
                        width={20}
                        height={15}
                        className="w-5 h-4 rounded-sm"
                      />
                      <span>English</span>
                    </button>
                  </div>
                )}
              </div>
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
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                {t.nav.experience}
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                {t.nav.projects}
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                {t.nav.skills}
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                {t.nav.contact}
              </button>
              {/* Language Dropdown Mobile */}
              <div className="border-t border-slate-200 dark:border-slate-700 mt-2 pt-2">
                <div className="px-4 py-2 text-slate-600 dark:text-slate-300 text-sm font-medium">
                  Langue / Language
                </div>
                <button
                  onClick={() => {
                    setLanguage('fr');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors ${
                    language === 'fr' ? 'bg-slate-100 dark:bg-slate-700' : ''
                  }`}
                >
                  <Image
                    src="/france.png"
                    alt="French Flag"
                    width={20}
                    height={15}
                    className="w-5 h-4 rounded-sm"
                  />
                  <span>Français</span>
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors ${
                    language === 'en' ? 'bg-slate-100 dark:bg-slate-700' : ''
                  }`}
                >
                  <Image
                    src="/uk.png"
                    alt="UK Flag"
                    width={20}
                    height={15}
                    className="w-5 h-4 rounded-sm"
                  />
                  <span>English</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            {t.hero.title}
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8">
            {t.hero.subtitle}
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
            >
              {t.hero.getInTouch}
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors"
            >
              {t.hero.viewMyWork}
            </button>
            <a 
              href="/cv-hedi-bayoudh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
            >
              {t.hero.downloadCV}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {t.about.description1}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                {t.about.description2}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                {t.about.description3}
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.about.quickFacts}</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  {t.about.fact1}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  {t.about.fact2}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  {t.about.fact3}
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mr-3"></span>
                  {t.about.fact4}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t.experience.title}</h2>
          
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t.experience.education}</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{t.experience.education1.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{t.experience.education1.school}</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    {t.experience.education1.description}
                  </p>
                </div>
                <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-6">
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{t.experience.education2.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{t.experience.education2.school}</p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">
                    {t.experience.education2.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t.experience.professional}</h3>
              <div className="border-l-4 border-slate-600 dark:border-slate-400 pl-6">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{t.experience.internship.title}</h4>
                <p className="text-slate-600 dark:text-slate-300">{t.experience.internship.company}</p>
                <ul className="text-slate-600 dark:text-slate-400 mt-2 space-y-1">
                  <li>• {t.experience.internship.description1}</li>
                  <li>• {t.experience.internship.description2}</li>
                  <li>• {t.experience.internship.description3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t.projects.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.projects.project1.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t.projects.project1.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">FastAPI</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">LangChain</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">RAG</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Spring Boot</span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">{t.projects.project1.period}</p>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.projects.project2.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t.projects.project2.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">Django</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">LangChain</span>
                <span className="bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm">WebSockets</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.projects.project2.period}</p>
                <a 
                  href="https://github.com/hedibay/django-react-langchain-chat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  {t.projects.project2.viewProject}
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.projects.project3.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t.projects.project3.description}
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
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.projects.project3.period}</p>
                <a 
                  href="/Tetris.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  {t.projects.project3.viewProject}
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.projects.project4.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t.projects.project4.description}
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
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.projects.project4.period}</p>
                <a 
                  href="https://github.com/uzi-belfayez/ACL_Project" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  {t.projects.project4.viewProject}
                </a>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.projects.project5.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t.projects.project5.description}
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
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.projects.project5.period}</p>
                <a 
                  href="/sami_rapport.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  {t.projects.project5.viewProject}
                </a>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.projects.project6.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {t.projects.project6.description}
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
                <p className="text-sm text-slate-500 dark:text-slate-400">{t.projects.project6.period}</p>
                <a 
                  href="https://github.com/hedibay/traffic-simulation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                >
                  {t.projects.project6.viewProject}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">{t.skills.title}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t.skills.programmingLanguages}</h3>
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t.skills.ai}</h3>
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{t.skills.tools}</h3>
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
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">{t.skills.languages}</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{t.skills.arabic}</h4>
                <p className="text-slate-600 dark:text-slate-300">{t.skills.native}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{t.skills.french}</h4>
                <p className="text-slate-600 dark:text-slate-300">{t.skills.advanced}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{t.skills.english}</h4>
                <p className="text-slate-600 dark:text-slate-300">C1 TOEIC 965</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{t.skills.german}</h4>
                <p className="text-slate-600 dark:text-slate-300">{t.skills.beginner}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">{t.contact.title}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            {t.contact.description}
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.contact.contactInfo}</h3>
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
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{t.contact.availability}</h3>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{t.contact.internshipDuration}</h4>
                  <p className="text-slate-600 dark:text-slate-300">6 months</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{t.contact.startDate}</h4>
                  <p className="text-slate-600 dark:text-slate-300">Late February 2025</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{t.contact.focusAreas}</h4>
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
              {t.contact.sendEmail}
            </a>
            <a 
              href="https://www.linkedin.com/in/hedi-bayoudh"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-colors"
            >
              {t.contact.connectLinkedIn}
            </a>
            <a 
              href="/cv-hedi-bayoudh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {t.contact.downloadCV}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            {t.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
