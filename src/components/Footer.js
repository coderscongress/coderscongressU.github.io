
import React from 'react';
import { socialMediaLinks } from "../portfolio.js";
import 'font-awesome/css/font-awesome.min.css';

// styles
import '../App.css';

const Footer = () => {
  return (
    <footer>
	<div  align="right">&nbsp;&nbsp;&nbsp;&nbsp;Follow us:<br /><br />
         </div>
		 <div id="soMedLinks">	
	{socialMediaLinks.reverse().map(socialmed => {
        return(
          <div key={socialmed.id}>
		  
		  <ul>
           <li><a href={socialmed.link}>  <i className={socialmed.fontAwesomeIcon} style={{
		   /*color : socialmed.backgroundColor*/
		   }}></i></a></li>
         </ul>		
          
		  </div>
        );
      })}
		  </div>
		  
	<br clear="all" /><br />
      <div  align="center">
          
         Copyright © 2024  Coders Congress Blog. All Rights Reserved
        <br /><br /><br /><br />
      </div>
	   
	
  
	
    </footer>
	
  );
};

export default Footer;
