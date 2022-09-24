import React from 'react';

export default function Card(props) {
  //props= max, min, name, img, onClose
  // acá va tu código
  
  return (
  <div>
    <button onClick = {props.onClose}>x</button>
    <h4>{props.name}</h4>
    <div>
<p>Min</p>
<p>{props.Min}</p>
<p>Max</p>
<p>{props.Max}</p>
</div>
<img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}/>

  </div> )
  };