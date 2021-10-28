import React,{useRef,useEffect} from "react";

const Contactme =() =>{
  useEffect(()=>{
    contactmeRef.current.scrollIntoView(true)
  },[])
    const contactmeRef=useRef()
    return (
      <>
        <div className='childpage' ref={contactmeRef}>
                contactme
          </div>
      </>
    )
}

export default Contactme;