import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import s from './style.module.sass';

// 580
export default function Nav() {
  const nav_ref =  useRef();
  const nav_list_ref = useRef();

  const check_size = () =>{
    const size_handler = ()=>{
        if (window.innerWidth <= 580){
            nav_ref.current.classList.add(s.mob);
        }else{
            nav_ref.current.classList.remove(s.mob);
        }
    };
    size_handler();
    window.addEventListener('resize', size_handler);
  }

  useEffect(check_size, []);

  const nav_btn_click = () =>{
    nav_list_ref.current.classList.toggle(s.active);
  }

  return (
    <nav ref={nav_ref} className={s.nav}>
        <ul ref={nav_list_ref} className={s.container}>
            <li>Пункт 1</li>
            <li>Пункт 2</li>
            <li>Пункт 3</li>
            <li>Пункт 4</li>
        </ul>
        <button onClick={nav_btn_click} className={s.nav_btn}>NAV</button>
    </nav>
  )
}
