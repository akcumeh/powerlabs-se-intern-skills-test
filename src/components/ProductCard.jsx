const ProductCard = ({ product, onAddToCart }) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount);
    };

    return (
        <div className="bg-color1 border border-color3 rounded-lg p-sml md:p-6 text-center product-card-hover shadow-sm">
            <h3 className="inter-semibold text-base md:text-md mb-smol md:mb-3 text-color4 leading-tight">{product.name}</h3>
            <p className="text-inter-light text-sm">
                {product.desc}
            </p>
            <p className="inter-bold text-sm md:text-base mb-smol md:mb-4 text-color2">
                {formatCurrency(product.price)}
            </p>
            <button
                onClick={() => onAddToCart(product)}
                className="bg-color2 hover:bg-color3 text-color1 text-inter-medium px-4 md:px-6 py-2 md:py-3 rounded-md transition-colors duration-200 text-md md:text-base w-med md:w-med mb-smol"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;