const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = data =>{
    console.log(data);
    const countryContainer = document.getElementById('countries')
    data.forEach( country =>{
        // const div = document.createElement('div');
        const p = document.createElement('div');
        p.classList.add('country');
        p.innerHTML = `
        <h3> <span style="color:black;">Country-Name: </span> ${country.name.common} </h3>
        <p> <span ">Capital-Name: </span> ${country.capital} </p>
        <button onclick="loadCountryDetails('${country.name.common}')"> Click Me Details </button>
        `
        countryContainer.appendChild(p);
    })
}

const loadCountryDetails= name =>{
    // console.log(name);
    const url = `https://restcountries.com/v3.1/name/${name}`
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country =>{
    // console.log(country);
    const detailsBox = document.getElementById('singleCountryDetails');

    // Ager country details muche notun jetay user click korbe seta dekhanur jonno
    detailsBox.textContent = '';

    const div = document.createElement('div');
    div.classList.add('single-country-details');
    div.innerHTML=`
    <h3> Name: ${country.name.common}</h3>
    <p> Capital : ${country.capital}</p>
    <img src="${country.flags.png}">
    
    `
    detailsBox.appendChild(div);
    
}