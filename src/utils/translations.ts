export type Language = 'en' | 'fr';

export interface Translations {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    getInTouch: string;
    viewMyWork: string;
    downloadCV: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    description3: string;
    quickFacts: string;
    fact1: string;
    fact2: string;
    fact3: string;
    fact4: string;
  };
  experience: {
    title: string;
    education: string;
    education1: {
      title: string;
      school: string;
      period: string;
      description: string;
    };
    education2: {
      title: string;
      school: string;
      period: string;
      description: string;
    };
    professional: string;
    internship: {
      title: string;
      company: string;
      period: string;
      description1: string;
      description2: string;
      description3: string;
    };
  };
  projects: {
    title: string;
    project1: {
      title: string;
      description: string;
      period: string;
    };
    project2: {
      title: string;
      description: string;
      period: string;
      viewProject: string;
    };
    project3: {
      title: string;
      description: string;
      period: string;
      viewProject: string;
    };
    project4: {
      title: string;
      description: string;
      period: string;
      viewProject: string;
    };
    project5: {
      title: string;
      description: string;
      period: string;
      viewProject: string;
    };
    project6: {
      title: string;
      description: string;
      period: string;
      viewProject: string;
    };
  };
  skills: {
    title: string;
    programmingLanguages: string;
    ai: string;
    tools: string;
    languages: string;
    arabic: string;
    french: string;
    english: string;
    german: string;
    native: string;
    advanced: string;
    beginner: string;
  };
  contact: {
    title: string;
    description: string;
    contactInfo: string;
    availability: string;
    internshipDuration: string;
    startDate: string;
    focusAreas: string;
    sendEmail: string;
    connectLinkedIn: string;
    downloadCV: string;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      title: 'Hedi Bayoudh',
      subtitle: 'Future Computer Science & AI Engineer',
      description: 'Final year engineering student in digital systems, seeking a 6-month internship in development and artificial intelligence. Passionate about contributing to innovative AI and software development projects.',
      getInTouch: 'Get In Touch',
      viewMyWork: 'View My Work',
      downloadCV: 'Download CV',
    },
    about: {
      title: 'About Me',
      description1: 'I am a final year engineering student in digital systems at INP Lorraine Ensem, specializing in the design and integration of digital systems that combine electronics, computer science, and networks.',
      description2: 'With a strong foundation from my preparatory classes (MP) and hands-on experience in AI and web development, I am passionate about creating innovative solutions that bridge the gap between technology and real-world applications.',
      description3: 'I am currently seeking a 6-month internship starting in late February to apply my technical knowledge and contribute to cutting-edge projects in AI and software development.',
      quickFacts: 'Quick Facts',
      fact1: 'Final year engineering student',
      fact2: 'Specialized in AI and digital systems',
      fact3: 'Fluent in French, English (C1 TOEIC 965), Arabic',
      fact4: 'Available for 6-month internship',
    },
    experience: {
      title: 'Experience & Education',
      education: 'Education',
      education1: {
        title: 'Cycle ingénieur en système numérique',
        school: 'INP Lorraine Ensem • 2023-2026',
        period: '2023-2026',
        description: 'Courses focused on the design and integration of digital systems combining electronics, computer science, and networks.',
      },
      education2: {
        title: 'Classe préparatoire aux grandes écoles MP',
        school: 'Esprit-prépa Tunis • 2021-2023',
        period: '2021-2023',
        description: 'Two years of preparatory classes focused on mathematics, physics, and computer science, preparing for engineering school entrance exams.',
      },
      professional: 'Professional Experience',
      internship: {
        title: 'Web Development & AI Intern',
        company: 'Inoteqia, Tunis • Summer 2025',
        period: 'Summer 2025',
        description1: 'Participated in the development and maintenance of the web application backend',
        description2: 'Developed AI models and integrated them with FastAPI (LangChain, RAG)',
        description3: 'Created and tested backend APIs in Spring Boot (Postman, IntelliJ IDEA)',
      },
    },
    projects: {
      title: 'Featured Projects',
      project1: {
        title: 'Elokencia - Smart Work Tool',
        description: 'AI-powered platform for meeting analysis and smart work adaptation. Developed AI models for meeting analysis and integrated via FastAPI using LangChain and RAG.',
        period: 'Inoteqia, Tunis • Summer 2025',
      },
      project2: {
        title: 'Real-time AI Chatbot',
        description: 'Interactive real-time AI chatbot with intuitive interface, multilingual support, and personalized conversation modes (CV Critic, Language Tutor, etc.).',
        period: 'Personal Project • Summer 2025',
        viewProject: 'View Project',
      },
      project3: {
        title: 'TETRIS for Everyone',
        description: 'Developed a Tetris game on LED matrix with ESP32 microcontroller in C++. Created a responsive web interface for smartphone play via Wi-Fi with real-time WebSocket communication.',
        period: 'INP Lorraine Ensem • 2023-2024',
        viewProject: 'View Project',
      },
      project4: {
        title: 'Labyrinth Adventure Game',
        description: 'A Java-based 2D adventure game where players explore a labyrinth, collect keys to progress through levels, and battle monsters and ghosts. Features object-oriented programming principles and agile project management.',
        period: 'Academic Project • 2023-2024',
        viewProject: 'View Project',
      },
      project5: {
        title: 'Robot Path Optimization',
        description: 'Developed an automated path optimization system for LEGO Mindstorms EV3 robot. Implemented algorithmic optimization and mathematical modeling to determine optimal traversal paths, with automated control systems using MATLAB/Simulink.',
        period: 'Academic Project • 2023-2024',
        viewProject: 'View Project',
      },
      project6: {
        title: 'Concurrent Traffic Simulation',
        description: 'Developed a concurrent road traffic simulation in C using pthreads. Implemented thread management and synchronization algorithms to model and coordinate vehicle flows, avoiding conflicts in a multi-threaded environment.',
        period: 'Academic Project • 2023-2024',
        viewProject: 'View Project',
      },
    },
    skills: {
      title: 'Technical Skills',
      programmingLanguages: 'Programming Languages',
      ai: 'AI & Machine Learning',
      tools: 'Tools & Frameworks',
      languages: 'Languages',
      arabic: 'Arabic',
      french: 'French',
      english: 'English',
      german: 'German',
      native: 'Native',
      advanced: 'Advanced',
      beginner: 'Beginner',
    },
    contact: {
      title: 'Get In Touch',
      description: 'I\'m currently seeking a 6-month internship in development and artificial intelligence starting in late February. Let\'s discuss how I can contribute to your team\'s innovative projects.',
      contactInfo: 'Contact Information',
      availability: 'Availability',
      internshipDuration: 'Internship Duration',
      startDate: 'Start Date',
      focusAreas: 'Focus Areas',
      sendEmail: 'Send Email',
      connectLinkedIn: 'Connect on LinkedIn',
      downloadCV: 'Download CV',
    },
    footer: {
      copyright: '© 2025 Hedi Bayoudh. All rights reserved.',
    },
  },
  fr: {
    nav: {
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      skills: 'Compétences',
      contact: 'Contact',
    },
    hero: {
      title: 'Hedi Bayoudh',
      subtitle: 'Futur Ingénieur en Informatique et IA',
      description: 'Étudiant ingénieur en dernière année de systèmes numériques, recherchant un stage de 6 mois en développement et intelligence artificielle. Passionné par la contribution à des projets innovants d\'IA et de développement logiciel.',
      getInTouch: 'Me Contacter',
      viewMyWork: 'Voir Mon Travail',
      downloadCV: 'Télécharger CV',
    },
    about: {
      title: 'À Propos de Moi',
      description1: 'Je suis étudiant ingénieur en dernière année de systèmes numériques à l\'INP Lorraine Ensem, spécialisé dans la conception et l\'intégration de systèmes numériques qui combinent électronique, informatique et réseaux.',
      description2: 'Avec une solide base de mes classes préparatoires (MP) et une expérience pratique en IA et développement web, je suis passionné par la création de solutions innovantes qui comblent le fossé entre la technologie et les applications réelles.',
      description3: 'Je recherche actuellement un stage de 6 mois commençant fin février pour appliquer mes connaissances techniques et contribuer à des projets de pointe en IA et développement logiciel.',
      quickFacts: 'Faits Rapides',
      fact1: 'Étudiant ingénieur en dernière année',
      fact2: 'Spécialisé en IA et systèmes numériques',
      fact3: 'Maîtrise du français, anglais (C1 TOEIC 965), arabe',
      fact4: 'Disponible pour un stage de 6 mois',
    },
    experience: {
      title: 'Expérience & Formation',
      education: 'Formation',
      education1: {
        title: 'Cycle ingénieur en système numérique',
        school: 'INP Lorraine Ensem • 2023-2026',
        period: '2023-2026',
        description: 'Cours axés sur la conception et l\'intégration de systèmes numériques combinant électronique, informatique et réseaux.',
      },
      education2: {
        title: 'Classe préparatoire aux grandes écoles MP',
        school: 'Esprit-prépa Tunis • 2021-2023',
        period: '2021-2023',
        description: 'Deux années de classes préparatoires axées sur les mathématiques, la physique et l\'informatique, préparant aux concours d\'entrée en école d\'ingénieur.',
      },
      professional: 'Expérience Professionnelle',
      internship: {
        title: 'Stagiaire Développement Web & IA',
        company: 'Inoteqia, Tunis • Été 2025',
        period: 'Été 2025',
        description1: 'Participé au développement et à la maintenance du backend de l\'application web',
        description2: 'Développé des modèles d\'IA et les ai intégrés avec FastAPI (LangChain, RAG)',
        description3: 'Créé et testé des APIs backend en Spring Boot (Postman, IntelliJ IDEA)',
      },
    },
    projects: {
      title: 'Projets Phares',
      project1: {
        title: 'Elokencia - Outil de Travail Intelligent',
        description: 'Développement d\'une plateforme innovante alimentée par l\'intelligence artificielle dédiée à l\'analyse approfondie de réunions et à l\'adaptation intelligente des méthodes de travail. Développement et intégration de modèles d\'IA avancés pour l\'analyse sémantique des réunions, avec une architecture robuste utilisant FastAPI, LangChain et les techniques de RAG (Retrieval-Augmented Generation).',
        period: 'Inoteqia, Tunis • Été 2025',
      },
      project2: {
        title: 'Chatbot IA en Temps Réel',
        description: 'Développement d\'un chatbot intelligent interactif fonctionnant en temps réel, doté d\'une interface utilisateur intuitive et moderne. Le système intègre un support multilingue avancé et propose des modes de conversation personnalisés et spécialisés, notamment un critiqueur de CV intelligent et un tuteur de langue adaptatif, démontrant une expertise approfondie en traitement du langage naturel.',
        period: 'Projet Personnel • Été 2025',
        viewProject: 'Voir le Projet',
      },
      project3: {
        title: 'TETRIS pour Tous',
        description: 'Développement d\'un jeu Tetris innovant sur matrice LED haute résolution, implémenté avec un microcontrôleur ESP32 en C++. Conception et développement d\'une interface web responsive et élégante permettant de jouer directement depuis un smartphone via connexion Wi-Fi, avec une communication WebSocket bidirectionnelle en temps réel pour une expérience de jeu fluide et interactive.',
        period: 'INP Lorraine Ensem • 2023-2024',
        viewProject: 'Voir le Projet',
      },
      project4: {
        title: 'Jeu d\'Aventure Labyrinthe',
        description: 'Développement d\'un jeu d\'aventure 2D immersif en Java, offrant une expérience de jeu riche où les joueurs explorent des labyrinthes complexes, collectent des clés stratégiques pour débloquer de nouveaux niveaux et affrontent des créatures variées (monstres et fantômes). Le projet démontre une maîtrise approfondie des principes de programmation orientée objet et de la gestion de projet agile.',
        period: 'Projet Académique • 2023-2024',
        viewProject: 'Voir le Projet',
      },
      project5: {
        title: 'Optimisation de Parcours Robot',
        description: 'Développement d\'un système d\'optimisation de parcours automatisé sophistiqué pour robot LEGO Mindstorms EV3. Implémentation d\'algorithmes d\'optimisation avancés et développement de modèles mathématiques complexes pour déterminer les trajectoires de navigation optimales. Le système intègre des mécanismes de contrôle automatisés utilisant MATLAB/Simulink, démontrant une expertise en robotique et en optimisation algorithmique.',
        period: 'Projet Académique • 2023-2024',
        viewProject: 'Voir le Projet',
      },
      project6: {
        title: 'Simulation de Trafic Concurrent',
        description: 'Développement d\'une simulation de trafic routier complexe et réaliste en langage C utilisant la bibliothèque pthreads. Implémentation d\'algorithmes sophistiqués de gestion de threads et de synchronisation pour modéliser et coordonner efficacement les flux de véhicules multiples, en évitant les conditions de course et les conflits dans un environnement de programmation concurrente multi-threadé.',
        period: 'Projet Académique • 2023-2024',
        viewProject: 'Voir le Projet',
      },
    },
    skills: {
      title: 'Compétences Techniques',
      programmingLanguages: 'Langages de Programmation',
      ai: 'IA & Machine Learning',
      tools: 'Outils & Frameworks',
      languages: 'Langues',
      arabic: 'Arabe',
      french: 'Français',
      english: 'Anglais',
      german: 'Allemand',
      native: 'Natif',
      advanced: 'Avancé',
      beginner: 'Débutant',
    },
    contact: {
      title: 'Me Contacter',
      description: 'Je recherche actuellement un stage de 6 mois en développement et intelligence artificielle commençant fin février. Discutons de comment je peux contribuer aux projets innovants de votre équipe.',
      contactInfo: 'Informations de Contact',
      availability: 'Disponibilité',
      internshipDuration: 'Durée du Stage',
      startDate: 'Date de Début',
      focusAreas: 'Domaines de Focus',
      sendEmail: 'Envoyer un Email',
      connectLinkedIn: 'Se Connecter sur LinkedIn',
      downloadCV: 'Télécharger CV',
    },
    footer: {
      copyright: '© 2025 Hedi Bayoudh. Tous droits réservés.',
    },
  },
};

export const getTranslation = (language: Language) => translations[language];
