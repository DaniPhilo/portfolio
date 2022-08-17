import React from 'react'

export default function ProjectCard({ project, index }) {

    const side = index % 2 === 0 ? 'right' : 'left';

    return (<>
            {index % 2 === 0 ?
                <div className='project-card-left'>
                    <div className="project-img"></div>
                    <div className="project-info">
                        <div className="project-title">
                            <h3>{project.name}</h3>
                        </div>
                        <div className='project-description'>
                            {project.description}
                        </div>
                    </div>
                </div>
                :
                <div className='project-card-right'>
                    <div className="project-info">
                        <div className="project-title">
                            <h3>{project.name}</h3>
                        </div>
                        <div className='project-description'>
                            {project.description}
                        </div>
                    </div>
                    <div className="project-img"></div>
                </div>
            }
        </>)
}
