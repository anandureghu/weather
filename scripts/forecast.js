class Forecast{
    constructor(){
        this.key = "6x9BeABWtlvcAfYyRS0be5tItZY4p6dj";
        this.cityURI = "https://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherURI = "https://dataservice.accuweather.com/currentconditions/v1/";
    }

    async updateWeather(city){
        // console.log(city);
        const cityDetails = await this.getCity(city);
        const weather = await this.getWeather(cityDetails.Key);

        return {cityDetails, weather};
    }

    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURI + query);
        const data = await response.json();
        return data[0];
    }

    async getWeather(id){
        const query = `${id}?apikey=${this.key}`;

        const response = await fetch(this.weatherURI + query);
        const data = await response.json();

        return data[0];
    }
}