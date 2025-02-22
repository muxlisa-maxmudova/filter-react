const products = [
    {title:'Tablet'},
    {title:'Tv'},
    {title:'Watch'},
    {title:'C#'},
]
const query = ''
const filteredProducts = products.filter((product)=>product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
console.log(filteredProducts)
//!!! the main difference between includes and indexOf is
// that it only counts from the start, while indexOf only
// check its existence from any side
