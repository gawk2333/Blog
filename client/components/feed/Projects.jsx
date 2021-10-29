import React,{useEffect,useRef} from "react";

const Projects=() =>{
  useEffect(()=>{
    projectsRef.current.scrollIntoView(true)
  },[])
    const projectsRef=useRef()
    return (
      <>
        <div className='projectspage' ref={projectsRef}>
          
          </div>
      </>
    )
}

export default Projects;