import { useState, useEffect } from "react";
import products from "./Products";

const ArraySort = () => {

    const [eProducts, setEProducts] = useState([]); 
    const [direction, setDirection] = useState('asc');

      useEffect(() => {
          sortProds();  
      }, [])
  
      const sortProds = () => {
          if(direction ==='asc'){
            products.sort((a, b) => a.price - b.price); 
            setEProducts(products.map(a => a.name)) 
            setDirection('desc')
          }
          else {
            products.sort((a, b) => b.price - a.price);  
            setEProducts(products.map(b => b.name))
            setDirection('asc');
      }
      
    }
      return <div className="text-center">
        <p> The products sorted by price in ascending order are: </p>
        <p>{eProducts.join(",  \n ")} </p>
        <br></br>
        <button onClick={sortProds}>ReSort</button> <small>{direction}</small>    
      </div>
  }
  
  export default ArraySort;