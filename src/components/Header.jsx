// src/components/Header.jsx

const Header = () => {
    return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">
            🛒 GameStore
        </div>

        <nav className="space-x-6">
            <a href="#games" className="text-gray-700 hover:text-blue-600 font-medium transition">Games</a>
            <a href="#gear" className="text-gray-700 hover:text-blue-600 font-medium transition">Fan Gear</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Cart</a>
        </nav>
        </div>
    </header>
    );
};

export default Header;
