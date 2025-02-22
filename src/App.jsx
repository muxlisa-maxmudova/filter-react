import './index.css';
import Nav from "./Navigation/Nav.jsx";
import Products from "./Products/Products.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import products from '../src/db/index.js' // imported data
import {useState} from "react";
const App = () => {
   const [selectedCategory, setSelectedCategory] = useState(null);//to define our input select in sidebar
   const [query, setQuery] = useState('');//this is for search input in navbar above
    const handleInputChange = (e) => {
        setQuery(e.target.value);
    }// in order to extract value inside search input

    return (
        <>
            <Sidebar/>
            <Nav/>
            <Recommended/>
            <Products/>
        </>
    )
}
export default App
