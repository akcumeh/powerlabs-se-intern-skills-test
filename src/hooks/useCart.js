import { useState, useCallback } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const removeFromCart = useCallback((id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    }, []);

    const addToCart = useCallback((product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, {
                ...product,
                quantity: 1,
                price: parseFloat(product.price) || 0 // Ensure price is a number
            }];
        });
    }, []);

    const updateQuantity = useCallback((id, quantity) => {
        const newQuantity = parseInt(quantity) || 0;
        if (newQuantity <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    }, [removeFromCart]);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    return {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
    };
};