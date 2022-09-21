const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = data =>{
    const countryContainer = document.getElementById('countries')
    data.forEach( country =>{
        console.log(country.name.official);
    })
}