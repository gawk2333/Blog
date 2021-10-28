import React,{useState} from "react";
import NavMenu from "./cards/NavMenu";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
// library.add(faCheckSquare, faCoffee);

const HeaderBar = () => {
  const [showNav,setShowNav] = useState(false)
  const navHandler = () =>{
    setShowNav(!showNav)
  }
  return (
    <>
    <div className='HeaderBar'>
        <div className='nav-logo' onClick={navHandler}><FontAwesomeIcon icon={faBars} /></div>
        <div className='logo'>Kang's Blog</div>
    </div>
    {showNav ? <NavMenu/> : null}
    </>
  )
}

export default HeaderBar;