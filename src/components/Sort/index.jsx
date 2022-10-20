import React from 'react'
import s from './style.module.sass'

export default function Sort() {

  const onChange = event => {
    const value = event.target.value;
    console.log(value);
  }

  return (
    <form className={s.search_container}>
        <p>поиск</p>
        <select onChange={onChange}>
            <option value="id">id</option>
            <option value="title">название</option>
            <option value="price">цена</option>
        </select>
    </form>
  )
}
