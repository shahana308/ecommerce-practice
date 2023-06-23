import { useLocation } from "react-router-dom";
import Rating from "./Rating";
import { IProducts } from "../utils/types/IProducts";
import Carousel from "./Carousel";
import { useCartContext } from "../providers/CartProvider";

const Product = () => {
  const { state } = useLocation();
  const { product }: { product: IProducts } = state;

  const cartData = useCartContext();

  const onAddToCartHandler = () => {
    !cartData?.cartItems.includes(product) &&
      cartData?.cartItems?.push(product);
    cartData?.setCartItems(cartData?.cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartData?.cartItems));
  };

  return (
    <div className="container">
      <div className="flex gap-2">
        <div className="product-carousel">
          <Carousel
            children={product.images.map((image, index) => (
              <img
                key={index}
                className="image-product"
                src={image}
                alt={image}
                width="600"
                height="600"
              />
            ))}></Carousel>
        </div>
        <div className="product-details">
          <h1 style={{ margin: 0 }}>{product.title}</h1>
          <Rating rating={product.rating}></Rating>
          <p style={{ fontStyle: "italic" }}>{product.stock} items are left</p>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={onAddToCartHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
