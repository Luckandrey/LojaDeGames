import { useState, useEffect } from "react";
import { games, fanGear } from "../data/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
const [loading, setLoading] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 segundo de loading
    return () => clearTimeout(timer);
}, []);

return (
    <div className="bg-gray-100 min-h-screen pt-24 flex flex-col">
    <Header />

    <main className="flex-grow p-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">Ecommerce Store</h1>

        {loading ? (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50"></div>
        </div>
        ) : (
        <>
            <section id="games" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {games.map((game) => (
                <ProductCard key={game.id} product={game} />
                ))}
            </div>
            </section>

            <section id="gear">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Fan Gear</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {fanGear.map((gear) => (
                <ProductCard key={gear.id} product={gear} />
                ))}
            </div>
            </section>
        </>
        )}
    </main>

    <Footer />
    </div>
);
};

export default Home;
