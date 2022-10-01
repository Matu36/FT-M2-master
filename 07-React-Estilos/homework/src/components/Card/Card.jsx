import React from 'react';
import s from "../Card/Card.module.css"
export default function Card({max, min, name, img, onClose}) {
  //props= max, min, name, img, onClose
  // acá va tu código
  
  return (
  <div className= {s.card}>
    <button onClick = {onClose} className= { `${s.btn} ${s.btnColor} `}>x</button>
    <h3>{name}</h3>
    <div className={s.middleDiv}>
      <div className={s.temperature}>
<h5>Min</h5>
<p>{min}</p>
</div>
<div className={s.temperature}>
<h5>Max</h5>
<p>{max}</p>
</div>
</div>
<div className={s.img}>
<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icon"/>
</div>
  </div> )
  };