import React from 'react'
import { connect } from 'react-redux'
import { changePage } from './../actions/page'

const Clear = ({ dispatch }) => {
  const switchHandler = (page) => {
    dispatch(changePage(page))
  }
  return (
    <div className='clear'>
      <div className='summary'>
        <div className='ABOUTME' onClick={() => switchHandler('ABOUTME')}>About Me</div>
        <div className='EXPERIENCE'onClick={() => switchHandler('EXPERIENCE')}>Experience</div>
        <div className='SKILL'onClick={() => switchHandler('SKILL')}>Skills</div>
        <div className='PROJECTS'onClick={() => switchHandler('PROJECTS')}>Projects</div>
        <div className='CONTACTME'onClick={() => switchHandler('CONTACTME')}>Contact Me</div>
      </div>
    </div>
  )
}

export default connect()(Clear)
