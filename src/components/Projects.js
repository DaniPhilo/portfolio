import React, { useState } from 'react';

import ProjectCard from './ProjectCard';
import ProjectRecords from '../projects.json';
// import ProjectTags from './ProjectTags';


export default function Projects() {

const tags = [...new Set(ProjectRecords.map(project => project.tags).reduce((a, b) => a.concat(b)))];

  const [displayProjects, setDisplayProjects] = useState(ProjectRecords);

  const filterProjects = (tag) => {
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
        <ul className="tags-list">
          <li onClick={() => filterProjects("All")}>All</li>
          {tags.map((tag, index) => {
            return <li key={index} onClick={() => filterProjects(tag)}>{tag}</li>
          })}
        </ul>
      </div>

      {displayProjects.map((project, index) => {
          return <ProjectCard key={index} project={project} index={index} />
      })}
    </section>
  )
}
