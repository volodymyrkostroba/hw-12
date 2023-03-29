export default


function updateMarkup(obj){

const title = `<li class="country__item">
<img src="${obj.flags.png}" alt="" class="country__flag">
<h2 class="country__title">${obj.name.common}</h2>
<p class="country__capital">${obj.capital[0]}</p>
<p class="country__population">${obj.population} peoples</p>
</li>`;

return title;
}