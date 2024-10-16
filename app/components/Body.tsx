import Image from "next/image";
import Link from "next/link";
import hero from './Assets/illustration.png'

const Body = (): JSX.Element => { 
    return (
        <div className="bg-red-400 flex flex-row-reverse flex-grow basis-full w-4/5 gap-x-2">
            <div className="w-2/5 flex justify-center items-center"><Image className="w-[]" src={hero} alt="hero" /></div>
            <div className="flex-grow flex-col justify-center">
                <div className="bg-violete w-4/5 p-2 rounded-md text-xs text-background flex gap-x-1 justify-center">

                <p >  We are now allowing earlly access for users 
                </p>
                    <Link href="">Learn more</Link>
                </div>
                <p className="text-4xl text-hometext">Build a highlt communty with no effort </p>
                <p></p>
                <div></div>
            </div>
        </div>
    )
}


export default Body ;