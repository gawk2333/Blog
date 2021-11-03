import React,{useRef,useEffect} from "react";

const Contactme =() =>{
  useEffect(()=>{
    contactmeRef.current.scrollIntoView(true)
  },[])
    const contactmeRef=useRef()
    return (
      <>
        <div className='contactme' ref={contactmeRef}>
                <div className='contact-container' >
                  <div className='contact-details'>
                    <a href='https://www.linkedin.com/in/kang-gao-636704222/'>
                    <p className='title'>LinkedIn: </p>
                    <p className='link'>https://www.linkedin.com/in/kang-gao-636704222/</p>
                    </a>
                    </div>
                  <div className='contact-details'>
                    <a href='https://github.com/gawk2333'>
                    <p className='title'>GitHub Repo: </p>
                    <p className='link'>https://github.com/gawk2333</p>
                    </a>
                    </div>
                  <div className='contact-details'>
                    <p className='title'>Email: </p>
                    <p className='link'>kang.g1988@gmail.com</p>
                    </div>
                  </div>
          </div>
      </>
    )
}

export default Contactme;