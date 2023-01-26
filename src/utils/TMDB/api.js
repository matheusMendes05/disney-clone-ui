import axios from 'axios';

export const getTopRatedMovies = async () => {
  try {
    const request = await axios.get('');
    const response = await request.json();
    return response;
  } catch (error) {
    return new Error('Error: ', error.message);
  }
};
