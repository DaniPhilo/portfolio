import React, { useState, useEffect } from 'react'

export default function ProjectCard({ project, index }) {

    const [windowSize, setWindowSize] = useState('');

    const updateWindowWidth = () => {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {
        setWindowSize(window.innerWidth);
    }, []);

    const toProject = (url) => {
        if (windowSize <= 550) {
            window.open(url);
        }
        return
    }

    window.addEventListener('resize', updateWindowWidth);

    return (<>
        {index % 2 === 0 ?
            <div className='project-card-left'>
                <div className="project-img">
                    <a href={project.project_link} target="_blank"><img src={project.img} alt="" /></a>
                </div>
                <div className="project-info">
                    <div className="project-title" onClick={() => toProject(project.project_link)}>
                        <h3>{project.name}</h3>
                    </div>
                    <div className='project-description' onClick={() => toProject(project.project_link)}>
                        <p>{project.description}</p>
                    </div>
                    <div className="project-techs" onClick={() => toProject(project.project_link)}>
                        <ul className="tech-list">
                            {project.technologies.map((tech, index) => {
                                return <li key={index}>{tech}</li>
                            })}
                        </ul>
                    </div>
                    <div className='gh-project-link'>
                        <a href={project.gh_link} target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
            :
            <div className='project-card-right'>
                <div className="project-info">
                    <div className="project-title" onClick={() => toProject(project.project_link)}>
                        <h3>{project.name}</h3>
                    </div>
                    <div className='project-description' onClick={() => toProject(project.project_link)}>
                        <p>{project.description}</p>
                    </div>
                    <div className="project-techs" onClick={() => toProject(project.project_link)}>
                        <ul className="tech-list">
                            {project.technologies.map((tech, index) => {
                                return <li key={index}>{tech}</li>
                            })}
                        </ul>
                    </div>
                    <div className='gh-project-link'>
                        <a href={project.gh_link} target="_blank"><i className="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div className="project-img">
                    <a href={project.project_link} target="_blank"><img src={project.img} alt="" /></a>
                </div>
            </div>
        }
    </>)
}
