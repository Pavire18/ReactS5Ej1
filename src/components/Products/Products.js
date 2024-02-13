//import { useParams } from "react-router-dom";
import { products } from "../../product-list";
import { NavLink } from "react-router-dom";
import './Products.css';

const Products = () => {

  //const { id } = useParams();

  return (
    <div className="page">
      <h1>Products</h1>

      {
          <div className="product-list">
            {products.map(product =>{
            const urlDetail="/product-detail/"+product.id;
             return <div key={product.id} className="product-card">
                      <img className="product-img" src={product.image}/>
                      <p>{product.name}</p>
                      <NavLink to={urlDetail}>Ver producto</NavLink>
                    </div>
            })}
          </div>
      }

    </div>
  );
}

export default Products;
