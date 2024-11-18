export default function fetchData(API, set) {
  fetch(API)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to load data for cards from API');
      }
      return response.json();
    })
    .then((data) => {
      set(data);
    })
    .catch((error) => {
      console.error('Error fetching or processing data: ', error);
    });
}
