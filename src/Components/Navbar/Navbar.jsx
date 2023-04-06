import { useState } from 'react'
import './Navbar.css'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

// jei nam e component banabe shei nam e export korte hobe shei nam ei recieve korte hobe


function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <nav className='bg-purple-400'>

            {/* true mane bar e click korchi */}
            {/* true hole/bar e click korle cross k dekhabo abar cross e click korle bar k  */}
            {/* <div onClick={() => setOpen(!open)}>
            <span>{open === true ? 'open' : 'close'}</span>
            <Bars3Icon className='W-6 h-6 text-purple-500'></Bars3Icon>
            <XMarkIcon  className='W-6 h-6  text-purple-500'></XMarkIcon>
            </div> */}




            {/* true mane bar e click korchi  */}
            {/* true hole/bar e click korle cross k dekhabo abar cross e click korle bar k  */}
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === true ?
                        <XMarkIcon className='W-8 h-8  text-purple-500'></XMarkIcon>
                            : <Bars3Icon className='W-8 h-8 text-purple-500'></Bars3Icon>
                    }
                </span>
            </div>


    {/* jodi open hoy tokhn agula k top theke aktu niche show korabo close hole top - diye display 
    bayre niye jabo positon absolute diye k dhore body/ancestor k dhore top hoye jabe */}
    {/* conditional css class dynamic class name in react*/}
    <ul className={`md:flex absolute md:static duration-500 lg:duration-0 lg:justify-center bg-purple-400 w-screen ${open ? 'top-8' : '-top-56'}`}>
        <li className='mr-2 px-6 py-1  text-2xl hover:bg-purple-500'>Home</li>
        <li className='mr-2 px-6 py-1 text-2xl  hover:bg-purple-500'>Blog</li>
        <li className='mr-2 px-6 py-1 text-2xl  hover:bg-purple-500'>About</li>
        <li className='mr-2 px-6 py-1 text-2xl  hover:bg-purple-500'>Services</li>
        <li className='mr-2 px-6 py-1 text-2xl  hover:bg-purple-500'>login</li>
    </ul>

        </nav>
    )
}

export default Navbar
