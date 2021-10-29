import React,{useRef,useEffect} from "react";
import bgimg from "../../styles/bgimg.jpeg"
import { connect } from 'react-redux'




const MasterPage= ({dispatch}) =>{

  // const mainRef=useRef()
  // console.log(page)
  // useEffect(()=>{
  //   if(page=="HOME")
  //   {
  //     mainRef.current.scrollIntoView(false)
  //   }
  // },[page])

 

  return (
    <>
        <div className='master-container' style={{backgroundImage:`linear-gradient(black, black),url(${bgimg})`}}>

          </div>
    </>
  )
}
// const mapStateToProps=(state)=>
// {
//   return ({
//     page:state.page,
//   })
// }

export default connect()(MasterPage);