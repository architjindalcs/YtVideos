import axios from "axios"
const KEY="AIzaSyDbD27sN6kJrAvAxWVtKBRHA0jELRZBvdk"

const axiosPreConfig=axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:
    {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})


export default axiosPreConfig