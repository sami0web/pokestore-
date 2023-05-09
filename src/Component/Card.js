import React from "react";



export default function Card(props) {
  let Price;
  return (
   
     
     <div className="card ">
  <img src={props.img} className="PokImg" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.Name}</h5>
    <p className="card-text">
    HP: {props.stats.HP}<br/>
    attack: {props.stats.attack}<br/>
    defense: {props.stats.defense}<br/>
    special_attack: {props.stats.special_attack}<br/>
    special_defense:{props.stats.special_defense}<br/>
    speed: {props.stats.speed}<br/>
</p>
  <h6>Price: ${Price=props.stats.attack*2+props.stats.defense*3+props.stats.speed}</h6>
  
  
    <button className="btn btn-primary  ">add to cart    <i class="bi bi-cart"></i></button>
  </div>
</div>

     
 
  );
}