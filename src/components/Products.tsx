import React from "react";
import { IProducts } from "../utils/types/IProducts";
import Rating from "./Rating";
import { useNavigate } from "react-router-dom";

interface ProductsPropTypes {
  product: IProducts;
}

const Products: React.FC<ProductsPropTypes> = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() =>
        navigate(`product/${product.id}`, { state: { product: product } })
      }>
      <img
        className="image-product"
        src={product.images[0]}
        alt={product.title}
        width="600"
        height="400"
      />
      <div style={{ margin: "1rem 0" }}>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <h4>
          Price: ${product.price}{" "}
          <span
            style={{ fontStyle: "italic", color: "#888c89", fontSize: "12px" }}>
            ({product.stock} peices left)
          </span>
        </h4>
        <Rating rating={product.rating}></Rating>
      </div>
    </div>
  );
};

export default Products;
