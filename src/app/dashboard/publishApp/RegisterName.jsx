import React from 'react';

const RegisterName = ({ updateState }) => {
    const registerAppName = (e) => {
        e.preventDefault()
        let form = e.target
        let appName = form.appName.value
        updateState("name", appName);
        updateState("registered", true)
    }
    return (
        <div className='w-full h-full bg-white rounded flex flex-col items-center justify-center'>
            <h1 className='text-3xl pb-12'>Lets Register a name for your app</h1>
            <form className='w-full md:w-96' onSubmit={registerAppName}>
                <input type="text" name="appName" placeholder='Enter name' id="name" className='border-2 border-gray-400 w-full p-2 rounded my-3' />
                <p className='pb-2 text-xs font-semibold text-green-500'>Name available</p>
                <button type='submit' className='w-full bg-indigo-500 rounded py-2 text-white font-semibold hover:bg-indigo-600 '>Register</button>
            </form>
        </div>
    );
};

export default RegisterName;