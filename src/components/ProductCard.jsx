import { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    const [imageError, setImageError] = useState(false);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN'
        }).format(amount);
    };

    return (
        <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col overflow-hidden product-card-hover">
            <div className="relative h-48 overflow-hidden bg-gray-100">
                {!imageError ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        onError={() => setImageError(true)}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-color2 to-color3 flex items-center justify-center">
                        <span className="text-3xl text-white font-bold">
                            {product.name.split(' ').map(word => word.charAt(0)).join('').slice(0, 2)}
                        </span>
                    </div>
                )}
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="relative h-16 mb-4 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-300 group-hover:-translate-y-full">
                        <h3 className="font-bold text-lg text-color4 leading-tight">
                            {product.name}
                        </h3>
                    </div>
                    <div className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {product.desc}
                        </p>
                    </div>
                </div>

                <div className="mb-6 mt-auto text-center">
                    <p className="text-2xl font-bold bg-gradient-to-r from-color2 to-blue-600 bg-clip-text text-transparent">
                        {formatCurrency(product.price)}
                    </p>
                </div>

                <button
                    onClick={() => onAddToCart(product)}
                    className="w-full bg-gradient-to-r from-color2 to-blue-600 hover:from-blue-600 hover:to-color2 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;