import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

function Footer() {
    return (
        <div className='max-w-[1240px] py-16 mx-auto px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
             <h1 className='w-full text-2xl font-bold text-purple-900'> REACT. TAILWIND. </h1>
             <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={25}/>
                <FaInstagram size={25}/>
                <FaTwitterSquare size={25}/>
                <FaGithubSquare size={25}/>
            </div>
            <div className='lg:col-span-2 flex justify-between'>
                <div>
                    <h6 className='font-medium text-gray-400'> Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentaion</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'> Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blogs</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'> Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'> Legals</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claims</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>

            </div>
            
        </div>
    );
}

export default Footer;