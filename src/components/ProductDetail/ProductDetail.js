import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../product-list";



const PorductDetail = (props) => {

  const { id } = useParams();

  const product= products.findIndex(x => x.id==id);
  return (
    <div className="page">
        <h1>Product Detail</h1>
        <img src={products[product].image}/>
        <p>{products[product].name}</p>
        <p>{products[product].price}</p>
        <p>{products[product].description}</p>
        <button onClick={() => props.actualizarFav(products[product].name)}>Añadir a favoritos</button>
    </div>
  );
}

export default PorductDetail;
