import React from 'react'
import bgimg from '../../styles/bgimg.jpeg'

const MasterPage = () => {
  return (
    <>
      <div className='master-container' style={{ backgroundImage: `linear-gradient(white, black),url(${bgimg})` }}>
      </div>
    </>
  )
}

export default MasterPage
