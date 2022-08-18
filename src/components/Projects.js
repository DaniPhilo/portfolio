import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import ProjectRecords from '../projects.json';
import ProjectTags from './ProjectTags';

export default function Projects() {

  const tags = [...new Set(ProjectRecords.map(project => project.tags).reduce((a, b) => a.concat(b)))];

  const [displayProjects, setDisplayProjects] = useState(ProjectRecords);

  const filterProjects = (e, tag) => {
    Array.from(e.target.parentElement.children).forEach(el => {
      if (el.className === 'marked') {
        el.className = 'tag-btn'
      }
    });
    e.target.className = 'marked';

    if (tag === 'All') {
      setDisplayProjects(ProjectRecords);
      return
    }
    const filteredProjects = ProjectRecords.filter(project => project.tags.includes(tag));
    setDisplayProjects(filteredProjects);
  }

  return (
    <section className='centered-section' id='projects-section'>

      <div className="section-title">
        <h2>projects</h2>
        <div className="title-line"></div>
      </div>

      <div className="tags-container">
        <ProjectTags tags={tags} filterProjects={filterProjects} />
      </div>

      <div className="projects-container">
        {displayProjects.map((project, index) => {
          return <ProjectCard key={index} project={project} index={index} />
        })}
      </div>

    </section>
  )
}
