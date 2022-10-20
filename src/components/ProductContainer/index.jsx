import React from 'react'
import Product from '../Product'
import Sort from '../Sort'
import s from './style.module.sass'

export default function ProductContainer({products, sort, search}) {
  return (
    
    <div className={s.container}>
        <Sort sort={sort} search={search}/>
        {
            products.map(product => <Product key={product.id} {...product} />)
        }
    </div>
  )
}
