import {
    mobile,
    backend,
    web,
    javascript, 
    html,
    css,
    reactjs,
    tailwind,
    bootstrap,
    git,
    figma,
    Pantech,
    Vitran,
    quizGranny,
    carrent,
    jobit,
    tripguide,
    threejs,
    c,
  } from "../assets";
  import chess from '../assets/chess.png'
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: mobile,
    },
    {
      title: "Team Oriented",
      icon: backend,
    },
    {
      title: "Chess Enthusiast",
      icon: chess,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Quiz Granny",
      icon: quizGranny,
      iconBg: "#383E56",
      date: "March 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using Frontend technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Pantech",
      icon: Pantech,
      iconBg: "#E6DEDD",
      date: "May 2024 - Aug 2024",
      points: [
        "Developing and maintaining frontend web applications using React.js and other modern JavaScript frameworks.",
        "Implementing responsive and interactive user interfaces using HTML, CSS, and JavaScript.",
        "Collaborating with designers and backend developers to create seamless user experiences and integrate frontend with APIs.",
        "Optimizing frontend performance and ensuring cross-browser compatibility.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Vitran",
      icon: Vitran,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Developing and maintaining the company's main website using cutting-edge technologies, contributing to the startup's online presence and brand identity.",
        "Collaborating with cross-functional teams to implement new features and optimize user experience, directly impacting the company's growth and user acquisition.",
        "Participating in agile development processes and contributing to the startup's fast-paced, innovative environment.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "DOC AI",
      description:
        "Web-based platform that provides instant health consultations through an AI chatbot, offering personalized medical advice and efficient symptom assessment for users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Weather App",
      description:
        "A responsive and user-friendly weather application built with HTML, CSS, and JavaScript. It provides real-time weather information & forecasts for locations worldwide.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Netflix Clone",
      description:
        "A Netflix Clone built with React and Tailwind CSS, featuring a responsive design and a focus on user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export {services, technologies, experiences, testimonials, projects };