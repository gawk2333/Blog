import React,{useRef,useEffect} from "react";

const Skill =() =>{
  useEffect(()=>{
    skillRef.current.scrollIntoView(true)
  },[])
    const skillRef=useRef()
    return (
      <>
        <div className='skills' ref={skillRef}>
        <div className='article-title'>Skills</div>
                <div className='words'>
                <p>●	HTML, CSS and JavaScript.</p>
                <p>●	Version control: Git and GitHub.</p>
                <p>●	Heroku.</p>
                <p> ●	Front-end: React, Redux, Handlebars, RESTful API, Sass.</p>
                <p> ●	Back-end: Node.js, Express.js, relational databases and Knex.js.</p>
                <p> ●	Testing: Jest, Supertest, Cheerio and Enzyme.</p>
                <p> ●	Pair programming.</p>
                <p>●	Organisation and self-management.</p>
                <p> ●	Teamwork and collaboration.</p>
                <p>●	Communication and interpersonal skills.</p>
                </div>
          </div>
      </>
    )
}

export default Skill;