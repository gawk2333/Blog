import React from "react";
import {connect} from 'react-redux'
import { changePage} from "../../actions/page"

const NavMenu = ({dispatch}) =>{
  const navHandler= (page) =>{
    dispatch(changePage(page))
  }
  return (
    <div className='nav'>
          <div className="li" onClick={()=>navHandler('HOME')}>Home</div>
          <div className="li" onClick={()=>navHandler('ABOUTME')}>About me</div>
          <div className="li" onClick={()=>navHandler('SKILL')}>Skills</div>
          <div className="li" onClick={()=>navHandler('PROJECTS')}>Projects</div>
          <div className="li" onClick={()=>navHandler('CONTACTME')}>Contact Me</div>
    </div>
  )
}

export default connect()(NavMenu);
