import react from 'react';

export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About Us',
    url: 'about-us',
	submenu: [
	  {
        title: 'About Us',
        url: 'about-us',
      },
      {
        title: 'Mission',
        url: 'mission',
      },
      {
        title: 'Vision',
        url: 'vision',
      },
    ],
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      {
        title: 'Software Development Services',
        url: 'software-development-service',
      },
	  {
        title: 'Banking Apllication Development',
        url: 'banking-application-development',
      },
	  {
        title: 'Document Scan Digitisation Services',
        url: 'document-digitisation-service',
      }
	  ],
  },
	  /*{ 
    title:'Projects',
    url: 'projects',
  
    submenu: [
      {
        title: 'Projects',
        url: 'projects',
      },
      {
        title: 'Certifications',
        url: 'certifications',
      },
    ],
  },*/
  {  
        title: 'Videos & Blogs',
        url: 'video',
	submenu: [
      {
        title: 'My Video',
        url: 'video',
	  },
	  {
        title: 'The Globe Groove:   @theglobegroove',
        url: 'Video2',
      },
	  ],
  },
  {
        title: 'Contact',
        url: 'contact',
   },
];
