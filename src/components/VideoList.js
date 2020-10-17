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

    const mappedList=videos.filter((video)=>
    {
        if(video.id.kind==="youtube#channel")
        return false;
        return true;
    }).map((video)=>
    {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
    })
    return (<div>{mappedList}</div>)
}

export default VideoList