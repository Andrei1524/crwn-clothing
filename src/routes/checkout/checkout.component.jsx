import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ShopItem from "../../components/shop-item/shop-item.component";
import { CheckoutContainer, Table, Tr, Th, Total } from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <Table>
        <tbody>
          <Tr>
            <Th>Product</Th>
            <Th>Description</Th>
            <Th>Quantity</Th>
            <Th>Price</Th>
            <Th>Remove</Th>
          </Tr>

          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <ShopItem item={item} />
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Total>Total: {cartTotal}$</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
