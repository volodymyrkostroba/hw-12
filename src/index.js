import fetchCountries from './js/fetchCountries'
import refs from './js/refs'
import updateMarkup from './js/tamplate';
import updateListMarkup from './js/list-tamplete';



refs.input.addEventListener('input', _.debounce(createCountries,700));

function createCountries(e){
    refs.list.innerHTML = '';
    
    const nameCountry = e.target.value;

    fetchCountries(nameCountry)
    .then(res =>{
        refs.input.innerHTML = '';
        if(res.length > 1){
            refs.input.innerHTML = '';
            res.forEach(e => {
                refs.list.insertAdjacentHTML('beforeend', updateListMarkup(e))
            });

            return
        }

        let item = res[0];

        refs.list.insertAdjacentHTML('beforeend', updateMarkup(item))
    })
    
}