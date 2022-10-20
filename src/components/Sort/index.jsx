import React from 'react'
import s from './style.module.sass'

export default function Sort({sort, search}) {

  const sortOnChange = event => {
    const value = event.target.value;
    sort(value);
  }

  const searchOnChange = event => {
    const value = event.target.value;
    search(value);
  }

  return (
    <form className={s.search_container}>
      <div>
        <p>поиск</p>
        <input onChange={searchOnChange} type="text" placeholder='поиск' />
      </div>
      
      <div>
        <p>сортировка</p>
        <select onChange={sortOnChange}>
            <option value="id">id</option>
            <option value="title">название</option>
            <option value="price">цена</option>
        </select>
      </div>
    </form>
  )
}
