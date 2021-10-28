import React,{useRef,useEffect} from "react";

const Aboutme = () =>{
  useEffect(()=>{
    aboutmeRef.current.scrollIntoView(true)
  },[])
  const aboutmeRef = useRef();
    return (
      <>
        <div className='aboutmepage' ref={aboutmeRef}>
          <div className='article-title'>
             About Me
            </div>
          <div className='words'>
                <p>Kia ora! I’m a software developer who has been working in the hospitality industry since moving to NZ. I worked in a 
                  cafe as a baker for nearly 5 years, and what I loved about the job was creating things which made my customers happy. 
                  I also enjoyed connecting with people every morning and becoming close friends that would share stories. </p>
                <p>I told one of these friends that I used to have an IT role back in China, and she asked if I could build a website to 
                  accompany her social media account. I accepted the challenge but I felt quite embarrassed that I had become rusty with 
                  my knowledge of tech over the years out of the industry. This was what encouraged me to sharpen my skills for development 
                  and get back into the career that I love. </p>
                  <p>I studied at Dev Academy for 3 months and found that it was quite a familiar feeling when I started coding. 
                    Although I found that the range of technologies have moved on greatly in the last 10 years! The more I learnt, 
                    the less I felt I knew, so I'm looking forward to expanding my knowledge in this industry. </p>
            </div>
 
          </div>
      </>
    )
}

export default Aboutme;