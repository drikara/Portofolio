
import { Codesandbox} from "lucide-react";


const Footer = () => {
    
    return (
        <div className='text-center items-center py-7 mb-5'>
             <a href="#" className=" font-bold text-3xl">
                <Codesandbox className="mx-auto w-20 h-20 mb-7 " />  OKD<span className="text-accent">DEV</span> 
                </a>
            <p className='mt-5'>Copyright © {new Date().getFullYear()} - Tous droits réservés.</p>
            
        </div>
    );
}

export default Footer;
