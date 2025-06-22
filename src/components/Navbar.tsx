import { Codesandbox} from "lucide-react";


function Navbar(){
    return(
        <div>
            <nav className="flex justify-around  items-center align-middle py-10 mx-auto " >
                <a href="#" className="font-bold text-3xl flex">
                <Codesandbox className="mr-2 w-9 h-9" />  OKD<span className="text-accent">DEV</span> 
                </a>
                <ul className="hidden sm:flex space-x-6">
                    <li><a href="#Home" className="btn  btn-sm btn-soft">Accueil</a></li>
                    <li><a href="#About" className="btn  btn-sm btn-soft">A propos</a></li>
                    <li><a href="#Experiences" className="btn btn-sm btn-soft">Mes expériences</a></li>
                    <li><a href="#Projets" className="btn  btn-sm btn-soft">Mes projets</a></li>
                    
                  
                </ul>
            </nav>

        </div>
    );
}
export default  Navbar;