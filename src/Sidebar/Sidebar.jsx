import './Sidebar.css'
import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
import Color from "./Color/Color.jsx";
import Gender from "./Gender/Gender.jsx";
const Sidebar = (props) => {
    return (
        <>
           <section className={'sidebar'}>
               <div className={'logo-container'}>
                   <h1>🛒</h1>
               </div>
               <Category handleChange={props.handleChange}/>
               <Price handleChange={props.handleChange}/>
               <Color handleChange={props.handleChange}/>
               <Gender handleChange={props.handleChange}/>
           </section>
        </>
    )
}
export default Sidebar
