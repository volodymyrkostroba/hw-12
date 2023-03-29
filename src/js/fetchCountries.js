export default

function fetchCountries(searchQuery){
    const url = `https://restcountries.com/v3.1/name/${searchQuery}`;
    
    return fetch(url)
    .then(res => res.json())
}

