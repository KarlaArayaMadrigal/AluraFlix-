import axios from 'axios';

const getVideos = async () => {
  try {
    const response = await axios.get('http://localhost:3000/');
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getVideos;