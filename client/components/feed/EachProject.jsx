import React from "react";
import githubSvg from '../../styles/github-brands.svg'
import chromeSvg from '../../styles/chrome-brands.svg'

const EachProject=({p}) =>{
  const {name,photo,discription,githuburl,weburl} = p;

    return (
      <>
        <div className='eachproject-container'>
          <div className='eachproject-title'>
                {name}
          </div>
          <div className='eachproject-photo'>
               <img src={photo}/>
          </div>
          <div className='eachproject-describe'>
               <p>{discription}</p>
          </div>
          <div className='links'>
                <a href={githuburl}>
                   <img src={githubSvg}/>
                </a>
                <a href={weburl}>
              <img src={chromeSvg}/>
              </a>
              </div>
        </div>
      </>
    )
}

export default EachProject;