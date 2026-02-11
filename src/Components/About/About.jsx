import React from 'react'
/* adding import for the css file*/
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'  
import profile_img from '../../assets/about.png'
const About = () => {
    return (
        <div className= 'about'>
           <div className ="about-title">
            <h1> About me</h1>
            <img src={theme_pattern} alt="light pink-purple design" />
             </div>

            <div className="about-sections">
                 <div className="about-left">
                   <img src={profile_img} alt="" />
              </div>
              <div className="about_right">
                <div className="about-para">
                    <p>I want to gain more hands on experience in the front-end developer and UX design world. </p>
                    <p>My curisiosity to build projects for people and create community is what fuels the work I do. </p>
                </div><br></br>
                <div className="about-skills">
                  <div className="about-skill"> <p>HTML & CSS</p> <hr style={{width: "50%"}}/></div>
                  <div className="about-skill"> <p>React JS</p> <hr style={{width: "60%"}}/></div>
                  <div className="about-skill"> <p>Javascript</p> <hr style={{width: "70%"}}/></div>
                   <div className="about-skill"> <p>Next JS</p> <hr style={{width: "50%"}}/></div>
                 </div>
                </div>
              </div>
              <div className="about-achievements">
                <div className="about-achievement">
                  <h1>1+</h1>  
                  <p> YEARS OF EXPERIENCE </p>
  
                </div>
                <hr/>
                <div className="about-achievement">
                  <h1>2+</h1>  
                  <p> PROJECTS COMPLETED </p>
                </div>
                <hr/>
                <div className="about-achievement">
                  <h1>3+</h1>  
                  <p> HAPPY CLIENTS </p>

                </div>

              </div>
            </div>
       
    )
  }

export default About