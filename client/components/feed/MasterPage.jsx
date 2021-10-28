import React,{useRef} from "react";
import bgimg from "../../styles/bgimg.jpeg"
import { connect } from 'react-redux'
import { changePage} from "../../actions/page"

const MasterPage= ({dispatch}) =>{
  
  const switchHandler=(page)=>{
    dispatch(changePage(page))
  }

  return (
    <>
        <div className='master-container' style={{backgroundImage:`linear-gradient(black, black),url(${bgimg})`}}>
            <div className='summary'>
                  <div className='ABOUTME' onClick={()=>switchHandler('ABOUTME')}>About Me</div>
                  <div className='EXPERIENCE'onClick={()=>switchHandler('EXPERIENCE')}>Experience</div>
                  <div className='SKILL'onClick={()=>switchHandler('SKILL')}>Skill</div>
                  <div className='CONTACTME'onClick={()=>switchHandler('CONTACTME')}>Contact Me</div>
              </div>   
          </div>
    </>
  )
}

export default connect()(MasterPage);