const Projects = [
    {
    id: "talentai",
    name: "TalentAI – AI Resume Screener",
    description: `
A scalable, full-stack recruitment platform that streamlines job hunting and hiring processes through AI and real-time communication. The platform offers secure user authentication, job listing and creation capabilities, and a personalized AI news feed that surfaces trending updates in tech and programming.

Key features include:
- 🔍 AI-Driven ATS Scoring: Built an intelligent resume analyzer that compares candidate resumes against job descriptions using NLP and ML techniques. It provides personalized feedback, including do’s and don’ts, to optimize candidate profiles.
- 💬 Real-Time Chat: Integrated Socket.IO to enable seamless communication between recruiters and candidates directly within the platform.
- 📰 Personalized News Feed: Displays curated content on the latest tech trends and programming updates tailored to the user’s interests.

Tech Stack: Spring Boot · React.js · Node.js · MySQL · MongoDB · AWS (EC2, S3, Route 53) · Socket.IO
`
    ,
    github: "https://github.com/Yugg007/TalentAI",
  },

  {
    id : "whishper",
    name : "Whishper App - Anonymous Secret Sharing Platform ",
    github : "https://github.com/Yugg007/Whisper-App",
    description : ` 
Built a secure, full-stack web application that allows users to share secrets anonymously. Implemented robust user authentication using both OAuth 2.0 (Google) and local password strategy to ensure privacy and data security. Designed with a responsive React frontend and a scalable Node.js + Express backend, connected to MongoDB for persistent data storage. The app is deployed publicly on GitHub, enabling anyone to experience secure and anonymous message sharing in real time.

Key features include:
- 🔒 Authentication: Integrated Google OAuth 2.0 and traditional email-password login using Passport.js.
- 🌐 Frontend: Designed an intuitive UI with React, providing seamless user experience and form handling.
- 🚀 Backend: Developed RESTful APIs with Node.js and Express, ensuring efficient request handling and routing.
- 🗄️ Database: Used MongoDB to store user credentials and secrets securely with encryption.

Tech Stack: Node.js · Express.js · React.js · MongoDB · Passport.js · OAuth 2.0
`
  },


  {
    id: "skybnb",
    name: "SkyBnb – Airbnb Clone",
    description:
      "A full-stack clone of Airbnb with property listings, booking system, and user authentication. Built using React, Spring Boot, and MongoDB.",
  },
  {
    id: "investfin",
    name: "InvestFin AI – Personal Finance Advisor",
    description:
      "Smart finance assistant offering budget insights, investment suggestions, and transaction analysis using Setu/FinBox APIs and AI models.",
  }
];

export default Projects;
