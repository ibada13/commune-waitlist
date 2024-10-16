
import logo from './Assets/logo.svg'
import Image from 'next/image';
import Link from 'next/link';
const NavBar = (): JSX.Element => {
    return (
        <div className="p-2  flex justify-start w-4/5 ">
            <div className="flex-grow flex justify-start items-center gap-x-2">
            <Link href=""><Image alt='logo' src={logo}/></Link>
            </div>
            <div className=" flex-grow  flex justify-around items-center">
                <Link className='text-text' href="">Features</Link>
                <Link className='text-text' href="">Affiliates</Link>
                <Link className='text-text' href="">Priceing</Link>
                <Link className='text-text' href="">Communities</Link>
                <button className='bg-violete p-3 text-white rounded-md'>Join Waitlist</button>
            </div>
        </div>
    )
 }


export default NavBar;