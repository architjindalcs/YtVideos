import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../apis/youtube"
import VideoList from "./VideoList"
import VideoDetail from "./VideoDetail"
import VideoListAdd from "./VideoListAdd"
class App extends React.Component
{
    state={
        videos: [],
        selectedVideo: null
    }
    componentDidMount()
    {
        this.callback('Computer Science English')
    }
    callback= async(searchquery)=>
    {
     
        const response=await youtube.get("/search",{
            params: {
                q: searchquery
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
        console.log(this.state.videos)
    
    }
    onVideoSelect=(video)=>
    {
        this.setState({
            selectedVideo: video
        })
    }
    render()
    {
        return(<div className="container" style={{marginTop: "1.5rem"}}>
            <SearchBar callback={this.callback}/>
            <div className="row">
                <div className="col-lg-7 col-md-12" >
                <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="col-lg-5 col-md-12">          
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                </div>
            <div className="col-12">
            <VideoListAdd onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
            </div>

        </div>)
    }
}
export default App;