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
    return (<div>{mappedList.slice(4,30)}</div>)
}

export default VideoList