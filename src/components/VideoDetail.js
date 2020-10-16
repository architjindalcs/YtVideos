import React from "react"

const VideoDetail=(props)=>
{
    const video=props.video;
    if(!video) {
        return (<div>Loading...</div>)
    }
    return (<div>{video.snippet.title}</div>)
}

export default VideoDetail