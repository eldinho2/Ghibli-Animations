import React, { useContext } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

function Favorites () {


  const allStorage = () => {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }

    return values;
  }

  const favorites = allStorage();

  return (
    <div>
      <Header/>
      <div className="flex flex-wrap justify-evenly">
        <Card card={favorites}/>  
      </div>
    </div>
  );
}

export default Favorites;
