import axios from 'axios';

const fetchImages = async (inputValue, pageNr) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=31379184-1f67905e1b583d7c147adf8b9&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
  )
    .then(async response => {
      if (!response.ok) {
        if (response.status === 404) {
          return [];
        }
        throw new Error(response.status);
      }
      return await response.json();
    })
    .catch(error => {
      console.error(error);
    });
};


// import axios from 'axios';
// const getData = async (inputValue, pageNr) => {
// 	// API Call
// 	const response = await axios.get(`https://pixabay.com/api/?key=31379184-1f67905e1b583d7c147adf8b9&q=${inputValue}&orientation=horizontal&safesearch=true&image_type=photo&per_page=40&page=${pageNr}`
// 	);
// };