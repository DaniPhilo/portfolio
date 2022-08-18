import React from 'react'

import ProjectCard from './ProjectCard';
import ProjectRecords from '../projects.json';

export default function Projects() {

  // ProjectRecords.map(project => {
  //   console.log(project);
  // })

  return (
    <section className='centered-section' id='projects-section'>

      <div className="section-title">
        <h2>projects</h2>
        <div className="title-line"></div>
      </div>

      {ProjectRecords.map((project, index) => {
        return <ProjectCard key={index} project={project} index={index}/>
      })}

      {/* <div className='project-card-left'>
        <div className="project-img"></div>
        <div className="project-info">
          <div className="project-title">
            <h3>project title</h3>
          </div>
          <div className='project-description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, officia.
          </div>
        </div>
      </div>

      <div className='project-card-right'>
        <div className="project-info">
          <div className="project-title">
            <h3>project title</h3>
          </div>
          <div className='project-description'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, modi?Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, officia.
          </div>
        </div>
        <div className="project-img"></div>
      </div> */}
    </section>
  )
}
