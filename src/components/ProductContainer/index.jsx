import React from 'react'
import Product from '../Product'
import Sort from '../Sort'
import s from './style.module.sass'

export default function ProductContainer({products}) {
  return (
    
    <div className={s.container}>
        <Sort />
        {
            products.map(product => <Product key={product.id} {...product} />)
        }
    </div>
  )
}
