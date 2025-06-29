const ProductCard = ({ product, onAddToCart }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount);
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
            <div className="text-center flex-1 flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-color2 to-color3 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">
                        {product.name.split(' ').map(word => word.charAt(0)).join('').slice(0, 2)}
                    </span>
                </div>

                <h3 className="font-bold text-lg text-color4 mb-3 leading-tight hover:text-color2 transition-colors duration-300">
                    {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                    {product.desc}
                </p>

                <div className="mb-6">
                    <p className="text-2xl font-bold bg-gradient-to-r from-color2 to-blue-600 bg-clip-text text-transparent">
                        {formatCurrency(product.price)}
                    </p>
                </div>

                <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-gradient-to-r from-color2 to-blue-600 hover:from-blue-600 hover:to-color2 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 mt-auto"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;