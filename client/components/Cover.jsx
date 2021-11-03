import React,{useRef} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux"
import { changePage} from "./../actions/page"

const Cover = ({dispatch}) =>{
  
  const mainRef = useRef()

  const nextHandler=()=>{
    mainRef.current.scrollIntoView({behavior:"smooth"})
  }

  const switchHandler=(page)=>{
    dispatch(changePage(page))
  }

  return (
    <>
    <div className='cover' >
      <div className='title'> Kia Ora!
      <div className='next' onClick={nextHandler}><FontAwesomeIcon icon={faArrowCircleDown} /></div>
      </div>
      </div>
       <div className='clear' ref={mainRef}>
               <div className='summary' >
                  <div className='ABOUTME' onClick={()=>switchHandler('ABOUTME')}>About Me</div>
                  <div className='SKILL'onClick={()=>switchHandler('SKILL')}> Skills</div>
                  <div className='PROJECTS'onClick={()=>switchHandler('PROJECTS')}>Projects</div>
                  <div className='CONTACTME'onClick={()=>switchHandler('CONTACTME')}>Contact Me</div>
              </div>  
      </div> 
       </>
  )
}

export default connect()(Cover);