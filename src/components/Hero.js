import React from 'react';
import { ReactTyped } from "react-typed";


function Hero() {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='uppercase text-purple-300'> growing with data analytics </p>
                <h1 className='capitalize md:text-7xl sm:text-4xl text-4xl font-bold md:py-6'>Grow with Data</h1>
                <div className='flex justify-center items-center'>
                   <p className='pr-2 py-6'>Fast, Flexible Financing For </p>
                   <ReactTyped
                                strings={[
                                    "BTB",
                                    "BTC",
                                    "SASS",
                                ]}
                                typeSpeed={120}
                                backSpeed={140}
                                loop
                                >
                    </ReactTyped>
                </div>
                <p className='text-slate-500 font-bold'>Monitor your analytics to increase revenue for your BTB, BTC, & SASS platforms</p>
                <button className='text-white rounded-md mx-auto my-6 font-medium py-3 bg-purple-700 w-[200px] hover:bg-purple-800'>Get Started </button>
            </div>
            
        </div>
    );
}

export default Hero;