import Card from './Card.js'
import React, { useState, useEffect } from 'react';


export default function Body() {


    const [Pokemons, setPokemon] = useState([]);



  useEffect(() => {
    fetch('https://pokebuildapi.fr/api/v1/pokemon/limit/20')
      .then(response => response.json())
      .then(data => setPokemon(data));
     
  }, []);



  


  return (
<>
       <h1>Liste des Pokémone</h1>

    <div   class="container  ">
        
         <div class="row my-3 mt-5 " >
           {Pokemons.map((poke,index) => (
         

        <div   className="col-md-3 mb-3 mx-auto "key={index} >
          <Card  id= {index} Name ={poke.name} img={poke.image}  stats={poke.stats}  /> 
          
          </div>
        ))}    
             
             </div>



   
    </div>

    </>
  );
}