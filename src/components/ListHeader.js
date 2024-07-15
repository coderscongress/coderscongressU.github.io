import React from 'react';
import { socialMediaLinks } from "../portfolio.js";
import 'font-awesome/css/font-awesome.min.css';

// styles
import '../App.css';

const Header = () => {
	
		 
      
    
	 
	return(
	<header>
   	<div>	
	<pre>{socialMediaLinks.map(socialmed => {
        return(
          <div key={socialmed.id}>
		  <nav>
		  <ul id="soMedLinks">
           <li><a href={socialmed.link}>  <i className={socialmed.fontAwesomeIcon} style={{
		   color : socialmed.backgroundColor,
		   borderRadius : "50%", 
		   fontSize : "24px",
		}}></i></a> </li>
         </ul>		
          </nav>
		  </div>
        );
      })}</pre>
		  </div>
		 
</header>)

};

export default Header;