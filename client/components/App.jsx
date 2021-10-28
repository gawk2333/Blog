import React from 'react'
import HeaderBar from './HeaderBar'
import Home from './Home'

import MasterPage from "./feed/MasterPage";

const App = () => {
  return (
    <>
      {/* <Fruit /> */}
      <MasterPage/>

      <HeaderBar/>
      <Home/>
    </>
  )
}


export default App
