import React,{useRef,useEffect} from "react";

const Aboutme = () =>{
  useEffect(()=>{
    aboutmeRef.current.scrollIntoView(true)
  },[])
  const aboutmeRef = useRef();
    return (
      <>
        <div className='childpage' ref={aboutmeRef}>
                aboutme
          </div>
      </>
    )
}

export default Aboutme;