import { useState, useCallback } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = useCallback((product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    }, []);

    const updateqty = useCallback((id, qty) => {
        if (qty <= 0) {
            removeFromCart(id);
            return;
        }
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, qty } : item
            )
        );
    }, []);

    const removeFromCart = useCallback((id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    }, []);

    const clearCart = useCallback(() => {
        setCartItems([]);
    }, []);

    return {
        cartItems,
        addToCart,
        updateqty,
        removeFromCart,
        clearCart
    };
};