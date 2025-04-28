// src/components/ProductCard.jsx

const ProductCard = ({ product }) => {
    return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-300">
        <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 text-lg mb-4">${product.price.toFixed(2)}</p>
        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Buy Now
        </button>
        </div>
    </div>
    );
};

export default ProductCard;
