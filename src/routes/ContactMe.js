
import React from 'react';
import {FaPhoneAlt} from "react-icons/fa";
import 'font-awesome/css/font-awesome.min.css';
import '../App.css';


const ContactUs = () => {
  return (
  <div className="flex-container"><h2>Contact:</h2><div style={{color: 'gray', fontSize:'18px'}}><i class='fa fa-map-marker' aria-hidden='true'style={{color : 'gray'}}></i> House No. F578/2 Anumansah Street , Osu Accra-Ghana<br />
 <FaPhoneAlt style={{color: 'gray', fontSize:'15px'}} /> +233558357115,+233271125590<br />
 <i class='fa fa-envelope' aria-hidden='true'style={{color : 'gray'}}></i> coderscongress@gmail.com<br />
 <i class='fa fa-github' aria-hidden='true'style={{color : 'gray'}}><a href='https://coderscongress.github.io/coders-congress-blog/'> https://coderscongress.github.io/coders-congress-blog</a></i></div><br />
  </div>)
};

export default ContactUs;

