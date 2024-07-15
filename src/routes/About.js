import React from "react";
import image6 from '../images/image6.jpg';
import ExperienceAccordion from "../components/ExperienceAccordion";

const About = () => {
  return (<div  align="center"><img className='images' src={image6} alt="" width='140' height='140' /><table width="50%"><h2 style={{color:"#DBA514"}}>About Us</h2><br />
  I am Kofi Owusu-Tufuor, a software engineer with 
  a background in Computer Science and Physics.I am also the founder of Coders Congress a tech oriented entity where all things tech are embraced and utilised when necessary to benefit all and sundry.Having
  undertaken a bachelor's degree programme at the University of Ghana-Legon,
  I graduated successfully in December 2002.
  I have subsequently been engaged by a number of organisations and institutions where
  my talent as a full stack software developer has been elevated through practice and knowledge 
  acquisition over the period.I welcome new ideas and open to alternate efficient 
  ways of executing tech solutions to perfection.
  Follow me on the social media platforms at the bottom of this page to learn more about me and Coders Congress:
  </table><br clear="all" /><ExperienceAccordion /></div>
  
  )
};

export default About;
