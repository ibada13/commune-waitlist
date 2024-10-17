import { FaTwitch } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle    } from "react-icons/fa";
import { BsBing } from "react-icons/bs";


const Footer = (): JSX.Element => { 
    return (
        <div className="flex flex-col w-4/5 p-2  gap-y-2">
            <p className="text-hometext">used by these companies: </p>
            <div className="flex gap-x-3" >
                <p className="border-2 border-background hover:border-2 hover:border-violete rounded-full p-2 transition-all duration-300"><FaTwitter size={35}/></p>
                <p className="border-2 border-background hover:border-2 hover:border-violete rounded-full p-2 transition-all duration-300"><FaTwitch  size={35}/></p>
                <p className="border-2 border-background hover:border-2 hover:border-violete rounded-full p-2 transition-all duration-300"><BsBing    size={35}/></p>
                <p className="border-2 border-background hover:border-2 hover:border-violete rounded-full p-2 transition-all duration-300"><FaGoogle  size={35}/></p>

            </div>
        </div>
    )
}


export default Footer; 