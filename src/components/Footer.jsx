// src/components/Footer.jsx

const Footer = () => {
    return (
    <footer className="bg-white shadow-inner mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p className="text-gray-600">
            &copy; {new Date().getFullYear()} GameStore. All rights reserved.
        </p>
        <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition">Terms of Service</a>
        </div>
        </div>
    </footer>
    );
};

export default Footer;
