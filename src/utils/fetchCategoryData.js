import axios from "axios";

export const fetchCategoryData = async (category) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v31.p.rapidapi.com/search',
        params: {
            part: 'snippet',
            q: category || "top Trending latest",
            maxResults: 500,
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
        return error;
    }
};

