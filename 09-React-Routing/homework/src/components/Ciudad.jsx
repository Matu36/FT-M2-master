import React from 'react';


//COMPONENTE FUNCION

function Ciudad ({ciudad}) {
    return (
<div className="ciudad">
                <div className="container">
                    <h2>{ciudad.name}</h2>
                    <div className="info">
                        <div>Temperatura: {ciudad.temp} ºC</div>
                        <div>Clima: {ciudad.weather}</div>
                        <div>Viento: {ciudad.wind} km/h</div>
                        <div>Cantidad de nubes: {ciudad.clouds}</div>
                        <div>Latitud: {ciudad.latitud}º</div>
                        <div>Longitud: {ciudad.longitud}º</div>
                    </div>
            </div>
        </div>
    )
        }
export default Ciudad;
//en componente de funcion el return hace la funcion de render.



//definir ciudad como componente de clase
//class Ciudad extends React.Component () {
//constructor (cuando quiero definir un estado)
// constructor (props){
// super (props)
//this.state = {}
//}

//render () {
    //return (
      //  <div></div>
   // )
//}
// export default Ciudad;




