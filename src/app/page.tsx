import React from "react";
import { experience, projects, skills } from "@/resume";
import { GithubIcon, LinkedinIcon, TelagramIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { personSchema, websiteSchema } from "../../lib/schema";

export default function HomePage() {
  return (
    <div className="home">
      <JsonLd data={websiteSchema} />
      <JsonLd data={personSchema} />

      <header className="hero">
        <h1 className="hero-name">Hey 👋 I’m Sena Oz.</h1>
        <p className="hero-role">Software Engineer</p>
        <p className="hero-bio">
          I am a software engineer who cares whether systems actually meet
          people&apos;s needs. I hold an M.S. in Software Engineering and a
          B.S. in Management Information Systems from Boğaziçi University, and
          I work at{" "}
          <a href="https://maestra.ai" target="_blank" rel="noopener noreferrer">
            Maestra.ai
          </a>{" "}
          on AI speech products. I am interested in how developers and
          researchers retrieve, verify and come to trust AI-generated code and
          information.
        </p>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/zsenaoz/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon fill="currentColor" />
            LinkedIn
          </a>
          <a href="mailto:tazeyta@gmail.com" target="_blank" rel="noopener noreferrer">
            <TelagramIcon fill="currentColor" />
            Email
          </a>
          <a href="https://github.com/senaoz" target="_blank" rel="noopener noreferrer">
            <GithubIcon fill="currentColor" />
            GitHub
          </a>
        </div>
      </header>

      <section id="experience" aria-labelledby="experience-heading">
        <h2 className="section-heading" id="experience-heading">Experience</h2>
        <ol className="timeline">
          {experience.map(({ title, firm, timePeriod, description, link }) => (
            <li key={firm + timePeriod} className="timeline-item">
              <span className="timeline-date">{timePeriod}</span>
              <div>
                <h3 className="item-title">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {firm}
                  </a>
                </h3>
                <p className="item-subtitle">{title}</p>
                {description && (
                  <ul className="item-points">
                    {description.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="projects" aria-labelledby="projects-heading">
        <h2 className="section-heading" id="projects-heading">Projects</h2>
        <ol className="project-list">
          {projects.map(({ href, label, description, github }) => (
            <li key={label} className="project-card">
              <h3 className="item-title">{label}</h3>
              <ul className="item-points">
                {description.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              {(href || github) && (
                <div className="project-links">
                  {href && (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      Live ↗
                    </a>
                  )}
                  {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer">
                      GitHub ↗
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" aria-labelledby="skills-heading">
        <h2 className="section-heading" id="skills-heading">Skills</h2>
        <dl className="skills">
          {skills.map(({ title, list }) => (
            <div key={title} className="skill-group">
              <dt>{title}</dt>
              <dd>
                {list.map((i) => (
                  <span key={i} className="tag">
                    {i}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
