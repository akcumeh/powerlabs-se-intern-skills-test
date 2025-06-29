import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductList = ({ onAddToCart }) => {
    const { products, loading, error } = useProducts();

    if (loading) return (
        <div className="flex justify-center items-center min-h-32 sm:min-h-64">
            <div className="inter-medium text-sm sm:text-base text-color4">Loading products...</div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center min-h-32 sm:min-h-64">
            <div className="inter-medium text-sm sm:text-base text-red-600">Error: {error}</div>
        </div>
    );

    return (
        <div className="w-xlrg">
            <h2 className="inter-bold text-lg sm:text-xl md:text-xl text-center mb-6 sm:mb-8 text-color4 px-4">Our Products</h2>
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 px-2 sm:px-0">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;