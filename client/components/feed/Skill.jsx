import React,{useRef,useEffect} from "react";

const Skill =() =>{
  useEffect(()=>{
    skillRef.current.scrollIntoView(true)
  },[])
    const skillRef=useRef()
    return (
      <>
        <div className='childpage' ref={skillRef}>
                this is skill
          </div>
      </>
    )
}

export default Skill;