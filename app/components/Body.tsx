import Image from "next/image";
import Link from "next/link";
import hero from './Assets/illustration.png'

const Body = (): JSX.Element => { 
    return (
        <div className=" flex flex-row-reverse justify-center md:justify-normal flex-grow basis-full w-4/5 gap-x-2">
            <div className="w-2/5 justify-center items-center hidden md:flex"><Image className="w-4/5" src={hero} alt="hero" /></div>
            <div className="flex md:flex-grow  flex-col items-center md:items-start w-[85%] md:w-2/5 gap-y-3 " >
                <div className="bg-violete w-full md:w-4/5 p-2 rounded-2xl text-xs text-background text-center">

                <p className="inline mr-2" >  We are now allowing earlly access for users 
                </p>
                    <Link href="" className=" underline">Learn more</Link>
                </div>
                <p className="text-4xl font-medium text-hometext text-center md:text-start">Build a highly engaged communty with no effort </p>
                <p className="text-text text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi animi porro dignissimos omnis cupiditate libero, incidunt itaque, maiores pariatur nesciunt, quod sapiente modi maxime eius.
                </p>
                <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 " >
                    <input className="p-2 text-center border-2 border-background focus:outline-none rounded-md focus:border-2 focus:border-violete text-hometext" placeholder="Enter you E-mail address" type="email" name="" id="" />
                <button className='bg-violete p-3 text-white rounded-md'>Join Waitlist</button>
                    
                </div>
            </div>
        </div>
    )
}


export default Body ;