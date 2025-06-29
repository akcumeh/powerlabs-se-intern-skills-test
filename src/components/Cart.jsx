import CartItem from './CartItem';

const Cart = ({ cartItems, onUpdateQuantity, onRemoveFromCart }) => {
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

    const subtotal = calculateSubtotal();

    if (cartItems.length === 0) {
        return (
            <div className="cart">
                <h2>Shopping Cart</h2>
                <div className="empty-cart">
                    <p>Your cart is empty</p>
                    <p>Add some products to get started!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>Shopping Cart ({cartItems.length} items)</h2>

            <div className="cart-items">
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onUpdateQuantity={onUpdateQuantity}
                        onRemove={onRemoveFromCart}
                    />
                ))}
            </div>

            <div className="cart-summary">
                <div className="summary-line">
                    <span>Subtotal:</span>
                    <span className="amount">{formatCurrency(subtotal)}</span>
                </div>
                <div className="summary-line total">
                    <span><strong>Total:</strong></span>
                    <span className="amount"><strong>{formatCurrency(subtotal)}</strong></span>
                </div>
            </div>
        </div>
    );
};

export default Cart;