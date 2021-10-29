import React from "react";
import { connect } from "react-redux"
import Aboutme from './feed/Aboutme'
import Contactme from './feed/Contactme'
import Experience from './feed/Experience'
import Skill from './feed/Skill'
import Cover from './Cover'
import Projects from "./feed/Projects";


const Home = ({page}) =>{
  return (
    <>

    <Cover/>
   
      {page==='ABOUTME'? <Aboutme/> :null}
      {page==='EXPERIENCE'? <Experience/> :null}
      {page==='SKILL'? <Skill/> :null}
      {page==='PROJECTS'? <Projects/>: null}
      {page==='CONTACTME'? <Contactme/> :null}
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