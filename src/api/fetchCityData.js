export const fetchCityData = async (city) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search.php?q=${city}&format=json&addressdetails=1&limit=1`
    );

    const cityName = await response.json();
    const [data] = await cityName;
    return data;
  } catch (error) {
    console.log("my error: ", error);
  }
};
