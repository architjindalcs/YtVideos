import axios from "axios"
const KEY1="AIzaSyDbD27sN6kJrAvAxWVtKBRHA0jELRZBvdk"
const KEY2="AIzaSyCIvMxk4nCS7pEt4tDKtXkVgb1itd2VtOQ"

const axiosPreConfig=axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:
    {
        part: "snippet",
        maxResults: 5,
        key: KEY2,
        type: "video",
        maxResults: 31
    }
})


export default axiosPreConfig