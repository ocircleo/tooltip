import React, { useState } from 'react';

const RegisterName = ({ updateState }) => {
    const [ani, setAni] = useState(false)
    const registerAppName = (e) => {
        e.preventDefault()
        let form = e.target
        let appName = form.appName.value
        setAni((state) => true)
        setTimeout(() => {
            updateState("name", appName);
            updateState("registered", true)

        }, 1000)

    }
    return (
        <div className='w-full overflow-hidden h-full bg-white rounded flex flex-col items-center justify-center px-5 relative group'>
            <h1 className='text-3xl pb-12 z-10' >Lets Register a name for your app</h1>
            <form className='w-full md:w-96 z-10' onSubmit={registerAppName}>
                <fieldset>
                    <label htmlFor="name">Enter your app name</label>
                    <input type="text" name="appName" placeholder='Enter name' id="name"  className="p-2 border-[3px]  rounded focus:border-indigo-500  outline-transparent w-full" />
                </fieldset>
                <p className='pb-2 text-xs font-semibold text-green-500'>Name available</p>
                <button type='submit' className='w-full bg-indigo-400 rounded py-2 text-white font-semibold hover:bg-indigo-500 '>Register</button>
            </form>
            {/* <div className='h-full w-full bg-white absolute z-0 rotate-12  group-hover:scale-110 duration-200'></div> */}
            <div className={`h-full w-full bg-white absolute z-20   ${ani ? "left-0" : "-left-full"} duration-1000`}></div>
        </div>
    );
};

export default RegisterName;