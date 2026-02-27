import React from 'react';
import './Skills.css';

const Skills = () => {
const skills = [
  {
    name: "Python",
    level: 80,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Numpy",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  },
  {
    name: "Pandas",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
    {
    name: "SQL Server",
    level: 70,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
  },
  {
  name: "scikit-learn",
  level: 85,
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
  },
  {
  name: "Django",
  level: 90,
  logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
  },
  {
    name: "LangChain",
    level: 85,
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/langchain.svg"
  },
  {
    name: "LangGraph",
    level: 85,
    // Best matching graph/workflow icon (since LangGraph has no official CDN logo)
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/apacheairflow.svg"
  },
  {
    name: "Node.js",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "React",
    level: 85,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "HTML5",
    level: 95,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "Git",
    level: 90,
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  }
];



  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-logo">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="skill-icon"
                  />
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  {/* <span className="skill-percentage">{skill.level}%</span> */}
                </div>
              </div>
              {/* <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                  data-level={skill.level}
                ></div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;