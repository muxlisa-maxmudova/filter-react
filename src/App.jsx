import './index.css';
import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import products from '../src/db/index.js' // imported data
import {useState} from "react";
import Card from "./Components/Card.jsx";
//import category from "./Sidebar/Category/Category.jsx";
//import color from "./Sidebar/Color/Color.jsx";
//import gender from "./Sidebar/Gender/Gender.jsx";
const App = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);//to define our input select in sidebar
   const [query, setQuery] = useState('');//this is for search input in navbar above

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }// in order to extract value inside search input
    //this bellow works for search input|

    const filteredItems = products.filter((product)=>{
        product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())//in case of anything we tried to use here includes instead of indexOf()
    });

    //to get the value of radio
    const handleChange = (e) => {
        setSelectedCategory(e.target.value);
    }

    //to get button values
    const hanldeClick = e => {
        setSelectedCategory(e.target.value);
    }
    // to filter
    function filterData(products, selected, query){
        let filterProducts = products
        //filtering input items
        if(query){
            filterProducts = filteredItems
        }
        if(selected){
            filterProducts = filterProducts.filter(({
                  category,color,company,newPrice,title,gender

                   })=>
                category === selected ||
                color === selected ||
                company === selected ||
                newPrice === selected ||
                title === selected ||
                gender === selected

            )
        }
    return filterProducts.map(({
        img,title,star,reviews,prevPrice,newPrice,gender
    })=> (
        <Card
          key={Math.random}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          gender={gender}
        />
        )

    )

    }
    const result = filterData(products, setSelectedCategory, query)
    return (
        <>
            <Sidebar handleChange={handleChange}/>
            <Nav/>
            <Recommended/>
            <Products/>
        </>
    )
}
export default App
