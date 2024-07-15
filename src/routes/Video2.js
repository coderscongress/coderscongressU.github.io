import React from "react"
import ReactPlayer from "react-player"
import "../App.css"

function App() {
  return (
  <div><h1 style={{color:"#DBA514"}}>My YouTube Blog </h1><br /><br />
	<div className='flex-container'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=gElUxLiHnJc"
      />
    </div></div>
  )
}

export default App