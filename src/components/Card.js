import React from 'react';
import Single from '../components/assets/single.png'
import Double from '../components/assets/double.png'
import Triple from '../components/assets/triple.png'

function Card() {
    return (
        <div className=' w-full py-[10rem] px-4 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Single} alt='' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='font-bold text-2xl text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$159</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-6 mt-8'>500GB Storage</p>
                        <p className='py-2 border-b mx-6'>I Granted User</p>
                        <p className='py-2 border-b mx-6'>Sign Up to  2GB</p>
                    </div>
                    <button className='py-3 w-[200px] my-6 mx-auto bg-purple-700 hover:bg-purple-800 rounded-md text-white  '> Start Trial</button>
                </div>

                <div className='w-full bg-purple-500 shadow-xl flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300'>
                    <img src={Double} alt='' className='w-20 mx-auto mt-[-3rem]' />
                    <h2 className='font-bold text-2xl text-center py-8'>Double Users</h2>
                    <p className='text-center text-4xl font-bold'>$259</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-6 mt-8'>750GB Storage</p>
                        <p className='py-2 border-b mx-6'>2 Granted User</p>
                        <p className='py-2 border-b mx-6'>Sign Up to  4GB</p>
                    </div>
                    <button className='py-3 w-[200px] my-6 mx-auto bg-black rounded-md text-purple-300 hover:bg-gray-900  '> Start Trial</button>
                </div>

                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img src={Triple} alt='' className='w-20 mx-auto mt-[-3rem] bg-white' />
                    <h2 className='font-bold text-2xl text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$359</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-6 mt-8'>1000GB Storage</p>
                        <p className='py-2 border-b mx-6'>3 Granted User</p>
                        <p className='py-2 border-b mx-6'>Sign Up to  8GB</p>
                    </div>
                    <button className='py-3 w-[200px] my-6 mx-auto bg-purple-700 hover:bg-purple-800 rounded-md text-white  '> Start Trial</button>
                </div>
            </div> 
        </div>
    );
}

export default Card;