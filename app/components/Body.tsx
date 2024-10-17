import Image from "next/image";
import Link from "next/link";
import hero from './Assets/illustration.png'

const Body = (): JSX.Element => { 
    return (
        <div className=" flex flex-row-reverse  flex-grow basis-full w-4/5 gap-x-2">
            <div className="w-2/5 flex justify-center items-center"><Image className="w-4/5" src={hero} alt="hero" /></div>
            <div className="flex-grow flex flex-col  w-2/5 gap-y-3 " >
                <div className="bg-violete w-4/5 p-2 rounded-2xl text-xs text-background flex gap-x-2 justify-start ">

                <p >  We are now allowing earlly access for users 
                </p>
                    <Link href="" className=" underline">Learn more</Link>
                </div>
                <p className="text-4xl text-hometext ">Build a highly engaged communty with no effort </p>
                <p className="text-text text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi animi porro dignissimos omnis cupiditate libero, incidunt itaque, maiores pariatur nesciunt, quod sapiente modi maxime eius.
                </p>
                <div className="flex gap-x-3 " >
                    <input className="p-2 text-center border-2 border-background focus:outline-none rounded-md focus:border-2 focus:border-violete" placeholder="Enter you E-mail address" type="email" name="" id="" />
                <button className='bg-violete p-3 text-white rounded-md'>Join Waitlist</button>
                    
                </div>
            </div>
        </div>
    )
}


export default Body ;