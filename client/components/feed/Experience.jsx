import React,{useEffect,useRef} from "react";

const Experience =() =>{
  useEffect(()=>{
    experienceRef.current.scrollIntoView(true)
  },[])
    const experienceRef=useRef()
    return (
      <>
        <div className='experiencepage' ref={experienceRef}>
                <div className='words'>
                  
                </div>
          </div>
      </>
    )
}

export default Experience;