import axios from "axios";

export const fetchChannelData = async (id) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/channels',
        params: {
            part: 'snippet,statistics',
            id: id
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_REACT_API_KEY,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        return (response.data);
    } catch (error) {
        return (error);
    }
};