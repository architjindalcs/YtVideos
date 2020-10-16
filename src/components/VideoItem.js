import React from "react"

const VideoItem=(props)=>
{
    const video=props.video;
    const onVideoSelect=props.onVideoSelect
    return (<div className="row" style={{marginTop: "3rem", borderBottom: "2px solid  lightgray",cursor: "pointer"}} onClick={()=>
    {
        onVideoSelect(video)
    }}>
        <div className="col-4">
        <img src={video.snippet.thumbnails.medium.url} className="img-thumbnail"/>
        </div>
        <div className="col-6">
       <h4 style={{marginTop: "2%"}}>{video.snippet.title}</h4> 
        </div>
        </div>)
}
export default VideoItem