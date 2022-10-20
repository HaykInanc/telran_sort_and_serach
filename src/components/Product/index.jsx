import React from 'react'
import s from './style.module.sass'

export default function Product({title, price}) {
  return (
    <div className={s.product}>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}
