import React from 'react';

const AddDetail = ({ updateState }) => {
    const appInfoUpdate = (e) => {
        e.preventDefault()
        updateState("detailAdded", true)
    }
    return (
        <div className='w-full h-auto bg-white rounded flex items-center justify-center py-12'>
            <form onSubmit={appInfoUpdate} className='w-full h-full md:w-96 lg:w-4/5 xl:w-3/6 shadow p-5 gap-2 flex flex-col'>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="osType" className='font-semibold'>Enter Operating System</label>
                    <input type="text" name="osType" placeholder='Android, Windows, linux , Apple etc' id="osType" className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" />
                </fieldset>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="version" className='font-semibold'>Enter your App Version</label>
                    <input type="text" name="version" placeholder='The version of your app. ex: 1.1.0.1' id="version" className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" />
                </fieldset>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="org" className='font-semibold'>Enter Publisher Organization Name</label>
                    <input type="text" name="org" id="org" placeholder='Org name or your name or N/A' className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" />
                </fieldset>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="release" className='font-semibold'>Enter Release Date</label>
                    <input type="date" name="release" id="release" className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" />
                </fieldset>
                <fieldset className='flex flex-col w-full gap-2'>
                    <label htmlFor="about" className='font-semibold'>Describe your app</label>
                    <textarea rows={6} type="text" name="about" id="about" placeholder='What does your app do in short' className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" />
                </fieldset>
                <fieldset className='flex flex-col sm:flex-row items-center w-full h-auto my-2  gap-2 justify-around relative '>
                    <div className='h-16 flex items-center '>
                        <label htmlFor="logo" className='font-semibold bg-blue-500 cursor-pointer p-2 rounded text-white z-10'>Add App Logo</label>
                        <input type="file" name="logo" id="logo" placeholder='What does your app do in short' className="p-2 z-0 border-[3px]  rounded focus:border-indigo-500  outline-transparent absolute opacity-0 left-0" />

                    </div>
                    <div className='h-20 w-20 bg-gray-300 rounded'></div>
                </fieldset>
                <button type='submit' className='w-full bg-indigo-500 rounded py-2 text-white font-semibold hover:bg-indigo-600 '>Continue</button>
            </form>
        </div>
    );
};

export default AddDetail;