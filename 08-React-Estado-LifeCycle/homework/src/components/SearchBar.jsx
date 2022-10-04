import React, { useState } from "react";

export default function SearchBar({onSearch}) {
const [city, setCity] = useState ('');
function handleInputChange (e) {
  setCity (e.target.value)
}

  return (
    <form onSubmit={(e) => {
      console.log(e)
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value= {city} //vinculamos el input con el estado//
        onChange = {handleInputChange}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}

