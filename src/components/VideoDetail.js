import React from "react"
import "./VideoItem.css"
const VideoDetail=(props)=>
{
    const video=props.video;
    if(!video) {
        return (<div>Loading...</div>)
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;
    return (<div className="container" style={{marginTop: "20px"}}>
        
        <div className="ui embed"  style={{marginTop: "50px"}}> 
            <iframe title="videoTitle" src={videoSrc}  />
        </div>
        <div class="card" style={{width: "100%"}}>
    <div class="card-body">
      <h3 class="card-title">{video.snippet.title}</h3>
      <p class="card-text" >{video.snippet.description}</p>
    </div>
  </div>
        </div>)
}

export default VideoDetail