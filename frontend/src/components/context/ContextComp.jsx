import  { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      let parseData = JSON.parse(cart)
      let isAlreadyExist = parseData.find((val) => {
        return val.id == product.id
      })
      if (isAlreadyExist) {
        alert("already in cart")
      } else {
        localStorage.setItem("cart", JSON.stringify([...parseData, product]))
        setCart(JSON.parse(localStorage.getItem("cart")))
        alert("cart item Added")
      }
    } else {
      localStorage.setItem("cart", JSON.stringify([product]));
      setCart(JSON.parse(localStorage.getItem("cart")))
      alert("cart item Added")
    }
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
