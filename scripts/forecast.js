const key = "6x9BeABWtlvcAfYyRS0be5tItZY4p6dj";

// Colllection weather condition
const getWeather = async(id) => {
    const endpoint = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(endpoint + query);
    const data = await response.json();

    return data[0];
}

// Collecting location key
const getCity = async(city) => {
    const endpoint = "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(endpoint + query);
    const data = await response.json();
    return data[0];
}

// getCity('kochi')
// .then(data => {
//     return getWeather(data.Key);
// }).then(data => console.log(data[0]))
// .catch(err => console.log(err));
