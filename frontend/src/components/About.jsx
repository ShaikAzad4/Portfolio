import React from 'react';
import './About.css';

const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'React',
    'Node.js',
    'TypeScript',
    'Python',
    'Git & GitHub',
    'MongoDB',
    'Express.js',
    'HTML5 & CSS3',
    'Docker',
    'AWS',
    'REST APIs'
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-paragraphs">
              <p>
                Hello! I'm a passionate <span className="highlight">GenAI Engineer</span> with a love for
                building intelligent systems that create real-world impact. My journey in AI
                started with curiosity about how machines can understand and generate human-like
                reasoning, and it has grown into a career focused on developing powerful,
                production-ready AI applications.
                </p>

                <p>
                I specialize in <span className="highlight">LLM-based systems, agentic workflows, and AI application development</span>.
                My technical expertise includes <span className="highlight">Python, LangChain, LangGraph</span>, vector databases,
                RAG pipelines, and modern AI tooling. I’m experienced in integrating and
                orchestrating multiple model providers, including <span className="highlight">Azure OpenAI, Gemini, Groq,
                and Anthropic APIs</span>.
                </p>

                <p>
                During my 6-month internship at <span className="highlight">Ignits Solutions</span>, I contributed to the development
                of an <span className="highlight">AI-powered Learning Management System (LMS)</span>, where I built intelligent
                features using LLMs, automated workflows, and scalable backend logic. I value
                writing clean, efficient, and reliable systems while continuously exploring new
                advancements in the GenAI space.
                </p>

            </div>
            
            {/* <div className="about-technologies">
              <h3 className="technologies-title">Technologies I Work With</h3>
              <div className="technologies-grid">
                {technologies.map((tech, index) => (
                  <div key={index} className="tech-item">
                    <span className="tech-bullet">▹</span>
                    <span className="tech-name">{tech}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;