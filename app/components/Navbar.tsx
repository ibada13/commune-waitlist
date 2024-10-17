import { FaList } from 'react-icons/fa';
import { MdOutlineClose } from "react-icons/md";
import logo from './Assets/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
const NavBar = (): JSX.Element => {
    const [isNavOpen, SetIsNavOpen] = useState<boolean>(false);
    const ToggleNav = () => { 
        SetIsNavOpen(e=>!e)
    }
    return (
        <div className="p-2  flex  w-4/5 relative ">
            <div className="flex-grow flex justify-start items-center gap-x-2">
            <Link href=""><Image alt='logo' src={logo}/></Link>
            </div>
            <div className='block md:hidden'>
                <button onClick={ToggleNav}>{isNavOpen?<MdOutlineClose color="#BF7CA3" size={35}/>:<FaList className='text-hometext' size={35}/>}</button>
            </div>
            {isNavOpen&&<div className='rounded-lg absolute top-full left-0 w-full bg-violete text-bg  flex flex-col gap-y-2 self-center p-2 '>
            <Link className='' href="">Features</Link>
                <Link className='' href="">Affiliates</Link>
                <Link className='' href="">Priceing</Link>
                <Link className='' href="">Communities</Link>
            </div>}
            <div className="hidden md:flex flex-grow  justify-around items-center">
                <Link className='text-text ' href="">Features</Link>
                <Link className='text-text ' href="">Affiliates</Link>
                <Link className='text-text ' href="">Priceing</Link>
                <Link className='text-text ' href="">Communities</Link>
                <button className='bg-violete p-3 text-white rounded-md'>Join Waitlist</button>
            </div>
        </div>
    )
 }


export default NavBar;