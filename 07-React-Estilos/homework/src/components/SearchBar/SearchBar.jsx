import s from "../SearchBar/SearchBar.module.css" 

export default function SearchBar({onSearch}) {

  // acá va tu código
  return ( 
  <div className= {s.container}>
    <input type="text" placeholder={'ciudad ...'} />
    <button onClick={() => onSearch ('Buscando Ciudad')}
    className= {s.btn}>Agregar</button>

</div>
  )
};