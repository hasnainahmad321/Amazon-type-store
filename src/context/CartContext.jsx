import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);
  const[itemQuantity,setItemQuantity]=useState(0)
  const[total,setTotal]=useState(0)
  useEffect(()=>{
    const total=cart.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.price*currentItem.quantity
    },0)
    setTotal(total)
  })
  useEffect(()=>{
    if(cart){
    const quantity =cart.reduce((accumulator,currentItem)=>{
      return accumulator + currentItem.quantity
    },0)
    setItemQuantity(quantity)
  }
  })
  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeFormatCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart = newCart;
  };
  const clearCart = () => {
    setCart([]);
  };
  const increaseQuality = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  const decreaseQaqlity = (id) => {
    const cartItem = cart.find((item) => {
      return item.id == id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id == id) {
          return { ...item, quantity: cartItem.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.quantity < 2) {
      removeFormatCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        removeFormatCart,
        clearCart,
        increaseQuality,
        decreaseQaqlity,itemQuantity,total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
