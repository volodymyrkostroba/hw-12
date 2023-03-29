export default


function updateListMarkup(obj){
    
const item = `<li class="country__item">
<h2 class="country__title">${obj.name.common}</h2>
</li>`;

return item;
}