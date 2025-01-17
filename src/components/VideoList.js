import React from "react"
import VideoItem from "./VideoItem"

const VideoList=(props)=>
{
    const videos=props.videos;
    const onVideoSelect=props.onVideoSelect
    // const mappedList=videos.map((video)=>
    // {
    //     return <VideoItem onVideoSelect={onVideoSelect} video={video}/>
    // })

    const mappedList=videos.map((video)=>
    {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })
    console.log("Hey Man! Mapped List",mappedList.slice(0,4),typeof(mappedList)) 
    return (<div>{mappedList.slice(0,4)}</div>)
}

export default VideoList