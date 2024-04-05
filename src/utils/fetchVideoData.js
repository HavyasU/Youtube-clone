import axios from "axios";


export const fetchVideoData = async (id) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/videos',
        params: {
            part: 'contentDetails,snippet,statistics',
            id: id
        },  
        headers: {
            // 'X-RapidAPI-Key': '10511fc129msh5c5f0b83cbd313bp15aca5jsnf26102b17cdf',
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