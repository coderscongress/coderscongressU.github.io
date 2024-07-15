
import React from "react";
import "../App.css";
import YoutubeEmbed from "../components/YoutubeEmbed";

export default function App() {
  return (
     <div><div><h1 style={{color:"#DBA514"}}>My Video</h1></div>
    <div className='flex-container'>
      <YoutubeEmbed embedId="WM543iWuxF8" />
    </div></div>
  );
}

