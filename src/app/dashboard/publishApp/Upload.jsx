import React, { useEffect } from 'react';

const Upload = ({ updateState, appInfo }) => {
    const handelFileChange = (e) => {

        let fileInput = e.target;
        let file = fileInput.files[0]
        if (!file) {
            console.log("file not uploaded");
        } else {
            updateState("uploaded", true);
            updateState("size", file.size ? file.size : 0);
        }
    }
    return (
        <div className='flex items-center justify-center flex-col w-full h-full bg-white rounded px-2'>
            <p className='mb-2 text-2xl'>Registered app name: <span className='text-indigo-600 font-semibold '>{appInfo.name}</span> </p>
            <p className='mb-12 text-center'>Now you need to upload the .apk, .msi, .exe, .out, .bin, .app or any other software file  </p>
            <div className='w-full md:w-4/6 border-dashed h-72 border-4 relative rounded flex items-center justify-center flex-col'>
                <input onChange={handelFileChange} type="file" name="file" id="file" className='h-full w-full absolute opacity-0 top-0 cursor-pointer  left-0' />
                <h2 className='text-xl'>Drag and Drop to upload file</h2>
                <p>or</p>
                <p><span className='text-blue-500 font-bold'>Click</span> to Chose</p>

            </div>
        </div>
    );
};

export default Upload;