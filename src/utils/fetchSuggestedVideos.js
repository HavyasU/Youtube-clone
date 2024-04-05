import axios from "axios";
// 'X-RapidAPI-Key': 'd158b29feamsh9d7becfc266d4cbp14b080jsn939d3d253551',


export const fetchSuggestedVideos = async (id) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            relatedToVideoId: id,
            part: 'id,snippet',
            type: 'video',
            maxResults: 50
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