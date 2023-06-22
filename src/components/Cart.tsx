import { useCartContext } from "../providers/CartProvider";

const Cart = () => {
  const cartItems = useCartContext();

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div className="dropdown">
        <button className="dropdown-button" style={{ margin: "1rem" }}>
          View Cart
        </button>
        <div className="dropdown-content">
          {cartItems?.cartItems && cartItems?.cartItems?.length > 0
            ? cartItems?.cartItems?.map((item) => (
                <div
                  className="flex"
                  style={{ justifyContent: "space-between" }}>
                  <p style={{ fontWeight: 800 }}>{item.title} :</p>
                  <p style={{ fontStyle: "italic" }}>${item.price}</p>
                </div>
              ))
            : "Your cart is empty."}
          {cartItems?.cartItems && cartItems?.cartItems?.length > 0 && (
            <p>
              Total price: $
              {cartItems?.cartItems?.reduce((a, b) => a + b.price, 0)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
