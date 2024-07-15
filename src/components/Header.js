
import React from 'react';
import { socialMediaLinks } from "../portfolio.js";
import 'font-awesome/css/font-awesome.min.css';

// styles
import '../App.css';
//import Navbar from './Navbar';
//import { Link } from 'react-router-dom';

const Header = () => {
  return ( <div align="center"><br clear="all" />
    <header>
	<div id="soMedOuter">
	<div class="table">
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
		  </div></div></div>
		  
	
      
    </header></div>
  );
};

export default Header;
