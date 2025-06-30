import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductList = ({ onAddToCart }) => {
    const { products, loading, error } = useProducts();

    if (loading) return (
        <div className="flex justify-center items-center min-h-64">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-color2 mx-auto mb-4"></div>
                <div className="text-color4 font-medium">Loading amazing products...</div>
            </div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center min-h-64">
            <div className="text-center bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="text-red-600 font-medium">Oops! Something went wrong</div>
                <div className="text-red-500 text-sm mt-2">Error: {error}</div>
            </div>
        </div>
    );

    return (
        <div className="w-full">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-color4 mb-4">Our Products</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-color2 to-color3 mx-auto rounded-full"></div>
                <p className="text-gray-600 mt-4 text-lg">Discover our collection of adorable companions</p>
            </div>

            {/* Grid with equal height cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8 auto-rows-fr">
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