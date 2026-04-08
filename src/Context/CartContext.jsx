import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // item shape: { id, name, price, quantity, image }
  const addToCart = (item, quantity) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id || i.name === item.name); // Using name as fallback if id doesn't exist
      if (existing) {
        return prev.map((i) =>
          (i.id === item.id || i.name === item.name)
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { ...item, quantity, id: item.id || item.name }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((total, item) => {
    const priceAmount = typeof item.price === "string" 
      ? parseInt(item.price.toString().replace(/[^0-9]/g, ''), 10)
      : parseInt(item.price, 10);
    return total + (priceAmount * item.quantity);
  }, 0);

  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
