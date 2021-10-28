import React,{useEffect,useRef} from "react";

const Experience =() =>{
  useEffect(()=>{
    experienceRef.current.scrollIntoView(true)
  },[])
    const experienceRef=useRef()
    return (
      <>
        <div className='childpage' ref={experienceRef}>
                experience
          </div>
      </>
    )
}

export default Experience;