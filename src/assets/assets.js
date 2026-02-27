import fasteat from '../assets/fasteat.png';
import hiddle from '../assets/hiddle.png';
import timemust from '../assets/timemust.png';
import lifeofme from '../assets/logo.png';
import { FaCloud, FaCode, FaDatabase, FaLightbulb, FaPaintBrush, FaReact, FaServer, FaTools } from "react-icons/fa";

export const assets = {

};

export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        color: 'text-orange',
        description: 'I enjoy solving complex problems and building creative solutions that improve user experience and business efficiency.'
    },
    {
        icon: FaPaintBrush,
        title: 'Design',
        color: 'text-orange',
        description: 'I create clean, modern, and user-friendly interfaces with strong attention to detail and usability.'
    },
    {
        icon: FaCode,
        title: 'Clean code',
        color: 'text-orange',
        description: 'I follow best practices, write maintainable code, and build scalable architectures that are easy to understand and extend.'
    }
];

export const skills = [
    {
        icon: FaReact,
        title: 'Frontend Developmet',
        description: 'I build responsive and interactive user interfaces using HTML, CSS, JavaScript, and React. I focus on creating clean, modern designs and smooth user experiences that work seamlessly across all devices.',
        techs: ["Rect.js", "Next.js", "HTML"]
    },
    {
        icon: FaServer,
        title: 'Backend Developmet',
        description: 'I develop secure and scalable server-side applications using Node.js and Express. I create RESTful APIs, handle authentication, and ensure efficient data processing and application performance.',
        techs: ["Node.js", "Express.js", 'REST APIs']
    },
    {
        icon: FaDatabase,
        title: 'Database Management',
        description: 'I design and manage databases to ensure structured, secure, and optimized data storage. I work with both SQL and NoSQL databases depending on project requirements.',
        techs: ["MongoDB", "MySQL"]
    },
    {
        icon: FaCloud,
        title: 'Cloud Developmet',
        description: 'I deploy and manage applications on cloud platforms with CI/CD pipelines for smooth and automated delivery. I focus on performance, scalability, and reliability.',
        techs: ["EC2", "Docker", "CI/CD"]
    },
    {
        icon: FaTools,
        title: 'Tools & Technology',
        description: 'I use modern development tools to improve productivity, collaboration, and code quality throughout the development lifecycle',
        techs: ["GIT", "VS Code"]
    },

];
export const projects = [
    {
        title: "FastEat",
        description: "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        image: fasteat,
        tech: []
    },
    {
        title: "Hiddle",
        description: "Bbbbbbbbbbbbbbbbbbbbbbbb",
        image: hiddle,
        tech: []
    },
    {
        title: "timemust",
        description: "Cccccccccccccccccccccccc",
        image: timemust,
        tech: []
    },
    {
        title: "LifeOfMe",
        description: "Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        image: lifeofme,
        tech: []
    },
    {
        title: "Offerapret",
        description: "Bbbbbbbbbbbbbbbbbbbbbbbb",
        image: fasteat,
        tech: []
    },
]