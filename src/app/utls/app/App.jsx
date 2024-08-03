import Link from 'next/link';
import React from 'react';

const App = () => {
    return (
        <div
            className="bg-gray-100 flex gap-1 p-5 items-center justify-between"
        >
            <img className="bg-gray-50 h-20 w-20 bg-white rounded"></img>
            <div className="flex flex-col">
                <div className="flex flex-col gap-1">
                    <h4>kali linux</h4>
                    <p className="text-xs">3.5 | win, andro..</p>
                </div>
                <p className="text-xs  text-gray-600">unknown publisher</p>
            </div>
            <p>
                <Link
                    href={"/apps/Facebook"}
                    className="text-indigo-400 text-sm underline italic"
                >
                    Detail
                </Link>
            </p>
        </div>
    );
};

export default App;