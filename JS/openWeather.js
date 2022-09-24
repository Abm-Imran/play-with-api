
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = ()=>{
    const city = document.getElementById('city-name').value 
    document.getElementById('city-name').value = '';
    // city = '';


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}

const setCurrentCondition = (id, text)=>{
    document.getElementById(id).innerText = text;
}

const displayTemperature = temp=>{
    console.log(temp);
    setCurrentCondition('city', temp.name);
    setCurrentCondition('weather', temp.main.temp);
    setCurrentCondition('currentCondition', temp.weather[0].main);
    setCurrentCondition('wind', temp.wind.speed);

    const imgIcon = document.getElementById('weather-icon');
    const url = ` http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`
    console.log(url);
    console.log(temp.weather[0].icon);
    
    imgIcon.setAttribute('src', url)


}