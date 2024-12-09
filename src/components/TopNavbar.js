import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { useState } from 'react';



function TopNavbar() {

    const [click, setNav] = useState(true);

    const handleNav = () => setNav(!click);

    return (
        <div className='flex justify-between items-center h-20 mx-auto max-w-[1240px] px-4 text-white'>
            <h1 className='w-full text-2xl font-bold text-purple-900'> REACT. TAILWIND. </h1>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:border-b hover:border-b-purple-800 hover:text-purple-400'>Home</li>
                <li className='p-4 hover:border-b hover:border-b-purple-800  hover:text-purple-400'>Company</li>
                <li className='p-4 hover:border-b hover:border-b-purple-800  hover:text-purple-400'>Resources</li>
                <li className='p-4 hover:border-b hover:border-b-purple-800  hover:text-purple-400'>About</li>
                <li className='p-4 hover:border-b hover:border-b-purple-800  hover:text-purple-400'>Contact</li>
            </ul>
            <button onClick={handleNav} className="block md:hidden">
                { !click ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </button>
            <div className={!click ? 'fixed left-0 top-0 w-[60%] bg-black h-full border-r border-r-purple-950 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-2xl font-bold text-purple-800 pt-6 pl-6'> REACT. TAILWIND. </h1>
                <ul className='uppercase pt-28'>
                    <li className='p-4 border-b border-b-purple-950 hover:border-b-purple-500 hover:text-gray-200'>Home</li>
                    <li className='p-4 border-b border-b-purple-950  hover:border-b-purple-500 hover:text-gray-200'>Contact</li>
                    <li className='p-4 border-b border-b-purple-950  hover:border-b-purple-500 hover:text-gray-200'>Resources</li>
                    <li className='p-4 border-b border-b-purple-950  hover:border-b-purple-500 hover:text-gray-200'>About</li>
                    <li className='p-4 border-b border-b-purple-950  hover:border-b-purple-500 hover:text-gray-200'>Company</li>
                </ul>
            </div>
        </div>
    
    );
}

export default TopNavbar;