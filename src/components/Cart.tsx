import { useCartContext } from "../providers/CartProvider";

const Cart = () => {
  const cartItems = useCartContext();
  const isCartItemsExist =
    cartItems?.cartItems && cartItems?.cartItems?.length > 0;

  return (
    <div style={{ display: "flex", justifyContent: "end" }}>
      <div className="dropdown">
        <button className="dropdown-button" style={{ margin: "1rem" }}>
          View Cart
        </button>
        <div className="dropdown-content">
          {isCartItemsExist
            ? cartItems?.cartItems?.map((item) => (
                <div
                  className="flex"
                  style={{ justifyContent: "space-between" }}>
                  <p style={{ fontWeight: 800 }}>{item.title} :</p>
                  <p style={{ fontStyle: "italic" }}>${item.price}</p>
                </div>
              ))
            : "Your cart is empty."}
          {isCartItemsExist && (
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
