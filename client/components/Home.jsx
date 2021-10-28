import React from "react";
import HeaderBar from "./HeaderBar";
import MasterPage from "./feed/MasterPage";
import { connect } from "react-redux"
import Aboutme from './feed/Aboutme'
import Contactme from './feed/Contactme'
import Experience from './feed/Experience'
import Skill from './feed/Skill'

const Home = ({page}) =>{
  return (
    <>
    <div className='home-container'>
      <HeaderBar/>
      <MasterPage/>
      {page==='ABOUTME'? <Aboutme/> :null}
      {page==='EXPERIENCE'? <Experience/> :null}
      {page==='SKILL'? <Skill/> :null}
      {page==='CONTACTME'? <Contactme/> :null}
    </div>
    </>
  )
}

const mapStateToProps= (state)=>
{
  return ({
    page:state.page
  })
}
export default connect(mapStateToProps)(Home);