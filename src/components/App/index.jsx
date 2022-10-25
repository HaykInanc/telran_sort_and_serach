
import { useState } from "react";
import ProductContainer from "../ProductContainer";
import Nav from '../Nav'


function App() {


  const initialProducts = [
    {id: 1, title: 'велосипед', price: 45000},
    {id: 2, title: 'ролики', price: 15000},
    {id: 3, title: 'самокат', price: 10000},
    {id: 4, title: 'лыжи', price: 20000},
    {id: 5, title: 'самолет', price: 17000},
    {id: 6, title: 'лапти', price: 17000}
  ];


  const [products, setProducts] = useState(initialProducts);
  
  const search = (search_value)=>{
    setProducts(prev => {
      return [...prev].map((product) => {
        return {
          ...product,
          del_flg: !product.title.toLowerCase().startsWith(search_value.toLowerCase())
        }
      })
    })
  }

  const sort = (sort_value)=>{
    setProducts(prev => {
      return [...prev].sort((a, b) => {
        if (typeof(a[sort_value]) === 'string'){
          return a[sort_value].localeCompare(b[sort_value])
        }else{
          return a[sort_value] - b[sort_value]
        }
      })
    })
  }

  return (
    <>
      <Nav />
    
      <ProductContainer 
        products={products.filter(({del_flg}) => !del_flg)} 
        sort={sort} 
        search={search}
      />
    </>
  );
}

export default App;
