import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ShopItem from "../../components/shop-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>

          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <ShopItem item={item} />
              </tr>
            );
          })}
        </tbody>
      </table>
      <span className="total">Total: {cartTotal}$</span>
    </div>
  );
};

export default Checkout;
