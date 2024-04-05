import axios from "axios";
export const fetchVideoCommets = async ( id ) => {

    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/commentThreads',
        params: {
            part: 'snippet',
            videoId: id,
            maxResults: '100'
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_REACT_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return response;
    } catch (error) {
        return (error);
    }
};