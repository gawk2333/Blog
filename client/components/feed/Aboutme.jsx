import React,{useRef,useEffect} from "react";
import edaImg from '../../styles/eda.jpeg' 
import cofcoImg from '../../styles/cofco.jpeg' 
import cafeImg from '../../styles/cafe.jpg'

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
                <p>
                  Kia ora! I’m Gao Kang. I'm a full stack developer with full of passion in tech industry.
                </p>
                <p>
                    I am proficient in html/css/javascript (react.js/redux/node.js) including api, routing, 
                    database design & interaction. Passionate about the user's experience of engaging with
                    high quality digital products.
                </p>
                <p>
                     I began venturing into the world of tech at the September of 2009, enrolling at Anyang Institution 
                     of technology. My major course was Network Engineering. It was lots of fun to set up the network devices and
                     test the security of the whole network structure. I also quite curious about how to build a website. I choosed
                     C# and ASP.NET as my optional course and successfully developed a library search engine(used ASP.NET, MS SQL-SERVER) before 
                     I graduated in the June of 2011.  
                  </p>
                  <img src={cofcoImg}/>
                  <p>
                     It was July of 2011 when I start my first full time job in a branch company of COFCO(China Oil and Food Cooperation).
                     I was the information administrator and my job was mainly focus on the ERP system. I collaborating the needs from each
                     department and helping software developers to build the ERP system. That was one of the tough period of time I've ever
                     experienced. As a graduate, I don't know much about the workflow of the company. As a network engineering student, I don't really
                     know the workflow of software development. I worked in each department of the company at the beginning half year. I joined all
                     the meeting, managed to be the bridge between users and developers. The ERP system was successfully running in the summer of 2013.
                  </p>
                  <img src={cafeImg}/>
                  <p>
                     I resigned in the July of 2014 and flighted to Christchurch in the September of 2014. I found I love this beautiful country. 
                     After one year of English study, one year of baking course and five years hard work in a cafe, I got my resident visa at the beginning of 2021.
                  </p>
                  <img src={edaImg}/>
                  <p>
                    Since then, I have become a recent graduate of Enspiral Dev Academy, where I learnt the modern developing skills and agile skills.
                   I look forward to bringing what I learnt before and sharing them with the next team that I am fortunate enough to be a part of.
                  </p>
            </div>
 
          </div>
      </>
    )
}

export default Aboutme;