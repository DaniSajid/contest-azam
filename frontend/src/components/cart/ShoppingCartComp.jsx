import { Rating } from "@mui/material";
import  { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Delete } from "@mui/icons-material";
import { CartContext } from "../context/ContextComp";
const ShoppingCartComp = () => {
  document.title = "Cart";
  const { removeFromCart } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const parseData = JSON.parse(localStorage.getItem("cart"));
    setCartItems(parseData);
  }, []);

  const handleIncrement = (index) => {
    const updatedCart = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = cartItems.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleRemove = (index) => {
    const itemToRemove = cartItems[index];
    removeFromCart(itemToRemove.id);
    const updatedCart = cartItems.filter((_, i) => i !== index);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTax = () => {
    const subtotal = getSubtotal();
    return subtotal * 0.03; 
  };

  const getTotalPrice = () => {
    return getSubtotal() + getTax();
  };

  if (cartItems.length === 0) {
    return <div className="my-5 text-center css-top">Your cart is empty</div>;
  }

  return (
    <div className="shopping-cart my-5 css-top">
      <h1 className="text-center my-5">Your Shopping Cart</h1>
      <table className="cart-items table">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Rating</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Subtotal</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
    {cartItems.map((value, index) => (
      <tr key={index}>
        <td scope="row"><img src={value.imagePath} alt={value.name} /></td>
        <td>{value.name}</td>
        <td><Rating value={value.rating} precision={0.5} readOnly /></td>
        <td className="price">Rs.{value.price}</td>
        <td>
          <button className="btn btn-primary font" onClick={() => handleIncrement(index)}>+</button>
          <span>{value.quantity}</span>
          <button className="btn btn-primary font" onClick={() => handleDecrement(index)}>-</button>
        </td>
        <td className="subtotal">Rs.{value.price * value.quantity}</td>
        <td>
          <button type="button" className="btn btn-danger" onClick={() => handleRemove(index)}><Delete/></button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

      <div className="cart-summary">
        <h3>Cart Summary</h3>
        <p>Subtotal: <span className="subtotal-amount">Rs.{getSubtotal()}</span></p>
        <p>Tax estimated: <span className="tax-amount">Rs.{getTax()}</span></p>
        <p>
          <strong>Total: <span className="total-amount"> Rs.{getTotalPrice()}</span></strong>
        </p>
        <Link to="/checkout" ><button type="button">Proceed to Checkout</button></Link>
      </div>
    </div>
  );
};

export default ShoppingCartComp;
