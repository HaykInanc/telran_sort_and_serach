import React from 'react'
import s from './style.module.sass'

export default function Product({id, title, price}) {
  return (
    <div className={s.product}>
        <p>{id}</p>
        <p>{title}</p>
        <p>{price}</p>
    </div>
  )
}
