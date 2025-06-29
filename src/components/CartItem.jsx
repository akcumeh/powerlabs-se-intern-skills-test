const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount);
    };

    const itemTotal = (item.price || 0) * (item.quantity || 0);

    return (
        <div className="cart-item">
            <div className="item-details">
                <h4>{item.name}</h4>
                <p className="item-price">{formatCurrency(item.price || 0)}</p>
            </div>

            <div className="quantity-controls">
                <button
                    onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="quantity-btn"
                >
                    -
                </button>
                <span className="quantity">{item.quantity || 0}</span>
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="quantity-btn"
                >
                    +
                </button>
            </div>

            <div className="item-total">
                {formatCurrency(itemTotal)}
            </div>

            <button
                onClick={() => onRemove(item.id)}
                className="remove-btn"
            >
                Remove
            </button>
        </div>
    );
};

export default CartItem;