import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Publish = ({ updateState }) => {
    return (
        <div className='bg-white h-auto min-h-screen p-2 md:p-4'>
            <div className='w-full h-full md:w-4/6  mx-auto'>
                <div className='w-full flex justify-between items-center '>
                    <div>

                        {/* <Image width={120} height={120} src="https://www.w3schools.com/images/myw3schoolsimage.jpg" alt='image' className='bg-gray-200 h-16 w-16 md:h-20 md:w-20 rounded border-transparent' /> */}
                        <h2>App Name</h2>
                        <p className='text-sm'>By company</p>
                    </div>
                    <a href="https://www.w3schools.com/images/myw3schoolsimage.jpg" download="w3logo" className='bg-indigo-500 px-5 py-2 rounded text-white font-semibold' > Download</a>
                </div>
            </div>
        </div >
    );
};

export default Publish;