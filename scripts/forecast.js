const key = "6x9BeABWtlvcAfYyRS0be5tItZY4p6dj";

const getCity = async(city) => {
    const endpoint = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(endpoint + query);
    const data = await response.json();
    return data[0];
}

getCity('kochi')
.then(data => console.log(data))
.catch(err => console.log(err));