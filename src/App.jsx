import ProductList from './components/ProductList';
import { useCart } from './hooks/useCart';
import './App.css';

function App() {
    const { addToCart } = useCart();

    return (
        <div className="min-h-screen bg-color1 font-inter">
            <header className="bg-white shadow-md border-b border-color3 sticky top-0 z-10">
                <div className="w-xlrg mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 lg:py-6">
                    <h1 className="inter-bold text-md sm:text-lg lg:text-xl text-center text-color4">PowerLabs Shop</h1>
                </div>
            </header>

            <main className="w-xlrg mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
                <ProductList onAddToCart={addToCart} />
            </main>
        </div>
    );
}

export default App;