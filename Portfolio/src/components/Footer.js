import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-6">
            <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/vaishuu_ridhima/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transform transition duration-300 hover:scale-125">
                    <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://github.com/vaish2020561" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transform transition duration-300 hover:scale-125">
                    <i className="fab fa-github text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/vaishnavi-bharti-0196831bb/" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-500 transform transition duration-300 hover:scale-125">
                    <i className="fab fa-linkedin text-2xl"></i>
                </a>
            </div>
            <p className="mt-4 text-center text-gray-400">
                &copy; {currentYear} Vaishnavi Bharti
            </p>
        </footer>
    );
};

export default Footer;
