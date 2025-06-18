import { Mail } from "lucide-react"
import img1 from "../assets/images/photo4.jpeg"


function Home(){
    return(
        <div className="flex justify-around items-center flex-col-reverse md:flex-row align-middle py-10 mx-auto">
            <div className="md:text-left text-center">
                <h1 className="md:text-3xl">Bonjour , {/* */} <br />
                Je suis <span className="text-accent">OUATTARA KARAMOKO DRISSA</span>
                </h1>
                <p className="text-xl">Je suis un développeur fullstack</p>
                <p className="text-xl">Avec 1 mois  d'expérience utilisant react js</p>
                <p className="text-xl mb-5">Contactez-moi si vous avez besoin de mes services</p>
                <a href="#" className="flex p-2 w-96  bg-accent justify-center rounded hover:bg-amber-600 mx-auto">
                 <Mail className="md:mr-2"/> ÉCRIVEZ-MOI
                </a>

            </div>
            <div>
                <img src={img1} alt="" className="md:w-96 md:h-96 object-cover w-50 h-50 border-8 border-accent rounded shadow-amber-500" style={{borderRadius:"50% 25% 30% 76% / 25% 25% 47% 33%"}}/>

            </div>

        </div>
    )
}

export default Home