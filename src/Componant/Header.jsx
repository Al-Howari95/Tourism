import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="bg-black text-white"> {/* Set background color to black and text color to white */}
          <div className="flex justify-between h-16 px-10 shadow items-center">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl lg:text-2xl font-bold cursor-pointer">
                Tourism Jordan
              </h1>
              <div className="hidden md:flex justify-around space-x-4">
                <Link to="/" className="hover:text-indigo-600">
                  Home
                </Link>
                <Link to="/cards" className="hover:text-indigo-600">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <Link to="/Login" className="text-gray-800 text-sm">
                LOGIN
              </Link>
              <Link
                to="/Registration"
                className="bg-indigo-600 px-4 py-2 rounded text-white hover:bg-indigo-500 text-sm"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
