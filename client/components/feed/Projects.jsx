import React, { useEffect, useRef } from 'react'
import EachProject from './EachProject'
import { projects } from '../../projects'

const Projects = () => {
  useEffect(() => {
    projectsRef.current.scrollIntoView(true)
  }, [])
  const projectsRef = useRef()
  return (
    <>
      <div className='projectspage' ref={projectsRef}>
        <div className='article-title'>
          Projects
        </div>
        <div className='projects-container'>
          {
            projects.map((project, index) => {
              return <EachProject p={project} key={index}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Projects
