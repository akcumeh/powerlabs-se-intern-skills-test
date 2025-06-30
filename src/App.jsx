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
                        <div className="flex flex-col sm:flex-row items-center sm:gap-3">
                            <img
                                src="assets/pl-logo.png"
                                alt="PowerLabs"
                                className="h-8 sm:h-10 w-auto"
                            />
                            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-color4 tracking-tight text-center">
                                Shop
                            </h1>
                        </div>

                        <nav className="flex flex-col sm:flex-row bg-gray-100 rounded-lg p-1 gap-1 sm:gap-0">

                            <button
                                onClick={() => setActiveTab('products')}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-250 ${activeTab === 'products'
                                        ? 'bg-color2 text-white shadow-md transform scale-105'
                                        : 'text-color4 hover:bg-white hover:shadow-sm'
                                    }`}
                            >
                                Products
                            </button>
                            <button
                                onClick={() => setActiveTab('cart')}
                                className={`px-6 py-3 rounded-lg font-medium transition-all duration-250 relative ${activeTab === 'cart'
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6">
                        <p className="text-lg font-medium">PowerLabs Shop</p>
                        <p className="text-color3 mt-2">Your one-stop shop for adorable companions</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 border-t border-gray-700">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 bg-color3 rounded-full flex items-center justify-center">
                                <img
                                    src="assets/angel-favicon-medium.jpg"
                                    alt="akcumeh"
                                    className="h-8 sm:h-12 rounded-full w-auto"
                                />
                            </div>
                            <span className="text-sm text-gray-300">Designed by Angel</span>
                        </div>
                        
                        <div className="flex flex-col items-center gap-4">
                            <a
                                href="https://github.com/akcumeh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-color3 text-sm px-3 py-1 rounded transition-all duration-125 hover:bg-color2 hover:text-color1"
                            >
                                GitHub
                            </a>
                            <a
                                href="https://x.com/akcumeh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-color3 text-sm px-3 py-1 rounded transition-all duration-125 hover:bg-color2 hover:text-color1"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com/in/angelumeh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-color3 text-sm px-3 py-1 rounded transition-all duration-125 hover:bg-color2 hover:text-color1"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://t.me/yarnandmk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-color3 text-sm px-3 py-1 rounded transition-all duration-125 hover:bg-color2 hover:text-color1"
                            >
                                Telegram
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;