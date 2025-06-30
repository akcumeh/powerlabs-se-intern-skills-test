import { useState } from 'react';
import CartItem from './CartItem';
import CouponInput from './CouponInput';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveFromCart }) => {
    const [couponApplied, setCouponApplied] = useState(false);
    const [couponError, setCouponError] = useState(false);
    const [removingItems, setRemovingItems] = useState(new Set());

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount || 0);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            const price = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantity) || 0;
            return total + (price * quantity);
        }, 0);
    };

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            setRemovingItems(prev => new Set([...prev, id]));

            setTimeout(() => {
                setTimeout(() => {
                    onRemoveFromCart(id);
                    setRemovingItems(prev => {
                        const newSet = new Set(prev);
                        newSet.delete(id);
                        return newSet;
                    });
                }, 500);
            }, 2500);
        } else {
            onUpdateQuantity(id, quantity);
        }
    };

    const handleApplyCoupon = (couponCode) => {
        if (couponCode === 'POWERLABSx') {
            setCouponApplied(true);
            setCouponError(false);
        } else {
            setCouponApplied(false);
            setCouponError(true);
            setTimeout(() => setCouponError(false), 3000);
        }
    };

    const subtotal = calculateSubtotal();
    const discountAmount = couponApplied ? subtotal * 0.132 : 0;
    const total = subtotal - discountAmount;

    if (cartItems.length === 0) {
        return (
            <div className="max-w-4xl mx-auto">
                <h2 className="text-color4 text-xl lg:text-2xl font-bold mb-8 text-center">Shopping Cart</h2>
                <div className="text-center py-16">
                    <p className="text-color4 text-lg mb-2">Your cart is empty</p>
                    <p className="text-color4">Add some products to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h2 className="text-color4 text-xl lg:text-2xl font-bold mb-8 text-center">
                Shopping Cart ({cartItems.length} items)
            </h2>

            <div className="mb-8">
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={onRemoveFromCart}
                        isRemoving={removingItems.has(item.id)}
                    />
                ))}
            </div>

            <CouponInput
                onApplyCoupon={handleApplyCoupon}
                couponApplied={couponApplied}
                couponError={couponError}
            />

            <div className="border-t-2 border-color3 pt-6">
                <div className="flex justify-between items-center mb-3 text-color4">
                    <span>Subtotal:</span>
                    <span className="text-color2 font-medium">{formatCurrency(subtotal)}</span>
                </div>

                {couponApplied && (
                    <div className="flex justify-between items-center mb-3 text-green-600 font-medium">
                        <span>Discount (13.2%):</span>
                        <span>-{formatCurrency(discountAmount)}</span>
                    </div>
                )}

                <div className="flex justify-between items-center text-lg font-bold text-color4 pt-4 border-t border-color3">
                    <span>Total:</span>
                    <span className="text-color2">{formatCurrency(total)}</span>
                </div>
            </div>
        </div>
    );
};

export default Cart;