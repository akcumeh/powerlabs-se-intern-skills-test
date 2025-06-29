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
        <div className="app">
            <header>
                <h1>PowerLabs Shop</h1>
                <nav className="nav-tabs">
                    <button
                        onClick={() => setActiveTab('products')}
                        className={`nav-btn ${activeTab === 'products' ? 'active' : ''}`}
                    >
                        Products
                    </button>
                    <button
                        onClick={() => setActiveTab('cart')}
                        className={`nav-btn ${activeTab === 'cart' ? 'active' : ''}`}
                    >
                        Cart ({cartItemCount})
                    </button>
                </nav>
            </header>

            <main>
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
        </div>
    );
}

export default App;