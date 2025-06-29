import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useCart } from './hooks/useCart';
import './App.css';

function App() {
    const { cartItems, addToCart, updateQuantity, removeFromCart } = useCart();
    const [activeTab, setActiveTab] = useState('products');

    const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-color1 to-gray-100">
            <header className="bg-white shadow-lg border-b-2 border-color3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-6">
                        <h1 className="text-3xl lg:text-4xl font-bold text-color4 tracking-tight">
                            PowerLabs Shop
                        </h1>

                        <nav className="flex bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setActiveTab('products')}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'products'
                                        ? 'bg-color2 text-white shadow-md transform scale-105'
                                        : 'text-color4 hover:bg-white hover:shadow-sm'
                                    }`}
                            >
                                Products
                            </button>
                            <button
                                onClick={() => setActiveTab('cart')}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 relative ${activeTab === 'cart'
                                        ? 'bg-color2 text-white shadow-md transform scale-105'
                                        : 'text-color4 hover:bg-white hover:shadow-sm'
                                    }`}
                            >
                                Cart
                                {cartItemCount > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'products' && (
                    <ProductList onAddToCart={addToCart} />
                )}
                {activeTab === 'cart' && (
                    <Cart
                        cartItems={cartItems}
                        onUpdateQuantity={updateQuantity}
                        onRemoveFromCart={removeFromCart}
                    />
                )}
            </main>

            <footer className="bg-color4 text-white py-5 mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-lg font-medium">PowerLabs Shop</p>
                    <p className="text-color3 mt-2">Your one-stop shop for adorable companions</p>
                    
                </div>
            </footer>
        </div>
    );
}

export default App;