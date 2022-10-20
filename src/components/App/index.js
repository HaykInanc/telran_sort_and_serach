import { useState } from "react";
import ProductContainer from "../ProductContainer";


function App() {
  const initialProducts = [
    {id: 1, title: 'велосипед', price: 45000},
    {id: 2, title: 'ролики', price: 15000},
    {id: 3, title: 'самокат', price: 10000},
    {id: 4, title: 'лыжи', price: 20000},
    {id: 5, title: 'коньки', price: 17000},
  ]

  const [products, setProducts] = useState(initialProducts);
  return (
    <div>
     <ProductContainer products={products}/>
    </div>
  );
}

export default App;
