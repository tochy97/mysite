import React from 'react';
import { Link } from 'react-router-dom';
import { SiOpenstreetmap } from "react-icons/si";

function NotFound(props) {
    return (
        <div className="flex flex-col items-center justify-center px-4 lg:px-0 pt-36">
            <SiOpenstreetmap size={150} />
            <p className="text-4xl mt-24 lg:mt-8 text-center">Page Not Found</p>
            <Link className="border border-gray-300 roundedpx-8 p-5 bg-white rounded mt-6 text-black text-center text-xl hover:underline focus:underline active:underline transition duration-500 mb-4" to="/">Home</Link>
        </div>
    );
}

export default NotFound;