const form = document.querySelector("form");
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('.time');
const icon = document.querySelector('.icon img');

const updateUI = data => {
    console.log(data);
    const cityDetails = data.cityDetails;
    const weather = data.weather;

    details.innerHTML = `
    <h5 class="city-name text-center my-4">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="whether my-3 display-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    `;

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    let timeSrc = null;
    if(weather.IsDayTime){
        timeSrc = 'img/day.svg';
    }else{
        timeSrc = 'img/night.svg';
    }

    time.setAttribute('src', timeSrc);

    icon.setAttribute('src', `img/icons/${weather.WeatherIcon}.svg`)

}

const updateWeather = async(city) => {
   const cityDetails = await getCity(city);
   const weather = await getWeather(cityDetails.Key);

   return {cityDetails, weather };
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const city = form.city.value.trim();
    // console.log(city);
    form.reset();

    updateWeather(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

});