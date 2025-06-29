const CartItem = ({ item, onUpdateQuantity, isRemoving }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount);
    };

    const itemTotal = (item.price || 0) * (item.quantity || 0);

    const handleDecrease = () => {
        if (item.quantity > 1) {
            onUpdateQuantity(item.id, item.quantity - 1);
        } else {
            onUpdateQuantity(item.id, 0);
        }
    };

    return (
        <div className={`relative grid grid-cols-3 gap-4 lg:gap-6 items-center p-4 lg:p-6 border border-color3 rounded-lg mb-4 bg-white transition-all duration-500 ${isRemoving ? 'opacity-0 -translate-x-full bg-gray-50' : 'opacity-100 translate-x-0'
            }`}>
            {isRemoving && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-green-500 text-white px-4 py-2 rounded font-medium animate-pulse">
                        Item removed.
                    </div>
                </div>
            )}

            <div className={`${isRemoving ? 'opacity-30' : 'opacity-100'}`}>
                <h4 className="text-color4 font-semibold text-sm lg:text-base mb-1">{item.name}</h4>
                <p className="text-color2 font-medium text-sm">{formatCurrency(item.price || 0)}</p>
            </div>

            <div className={`flex items-center justify-center gap-3 ${isRemoving ? 'opacity-30' : 'opacity-100'}`}>
                <button
                    onClick={handleDecrease}
                    className="w-8 h-8 border border-color2 bg-white text-color2 rounded hover:bg-color2 hover:text-white font-bold transition-all duration-200 hover:scale-110"
                >
                    -
                </button>
                <span className="font-bold text-color4 min-w-6 text-center">{item.quantity || 0}</span>
                <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 border border-color2 bg-white text-color2 rounded hover:bg-color2 hover:text-white font-bold transition-all duration-200 hover:scale-110"
                >
                    +
                </button>
            </div>

            <div className={`text-right font-bold text-color4 ${isRemoving ? 'opacity-30' : 'opacity-100'}`}>
                {formatCurrency(itemTotal)}
            </div>
        </div>
    );
};

export default CartItem;