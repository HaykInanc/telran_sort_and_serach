import React from 'react'
import Product from '../Product'
import s from './style.module.sass'

export default function ProductContainer({products}) {
  return (
    <div className={s.container}>
        {
            products.map(product => <Product key={product.id} {...product} />)
        }
    </div>
  )
}
