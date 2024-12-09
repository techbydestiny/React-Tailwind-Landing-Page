import React from 'react';

function Newletter() {
    return (
        <div className='w-full py-16 px-5 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2'>
                    <h1 className='font-bold md:text-4xl sm:text-3xl text-2xl py-2 capitalize'>Want tips & Tricks to optimize your flow</h1>
                    <p className=' capitalize'>sign up to our Newletter and stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row  items-center w-full justify-between'>
                        <input className='p-3 flex w-full pb-2 rounded-md text-black' type='email' placeholder='Enter Email'/>
                        <button className='py-3 w-[200px] ml-5 my-6 bg-purple-700 rounded-md hover:bg-purple-800 '>Join Us</button>
                    </div>
                    <div>
                        <p>We care about the protection of your data. Read our <span className='text-purple-700'> Privacy Policy. </span>   </p>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Newletter;