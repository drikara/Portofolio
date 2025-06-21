import { Mail } from "lucide-react"
import img1 from "../assets/images/photo4.jpeg"


function Home(){
    return(
        <div className="flex justify-around items-center flex-col-reverse md:flex-row align-middle py-10 mx-auto">
            <div className="md:text-left text-center">
                <h1 className="md:text-2xl my-2 ">Bonjour , {/* */}  <br /> 

                Je suis <span className="text-accent">OUATTARA KARAMOKO DRISSA</span>
                </h1>
                <p className="text-xl my-2">Je suis un développeur fullstack</p>
                <p className="text-xl my-2">Avec 6 mois  d'expériences utilisant react js</p>
                <p className="text-xl mb-5 my-2">Contactez-moi si vous avez besoin de mes services</p>
                <a href="mailto:ouattara17drissa@gmail.com"  className="flex p-2 w-96  my-4 bg-accent justify-center rounded hover:bg-amber-600 mx-auto">
                 <Mail className="md:mr-2"/> ÉCRIVEZ-MOI
                </a>

            </div>
            <div className="mb-5">
                <img src={img1} alt="" className="md:w-96 md:h-96 object-cover w-70 h-70 border-8 border-accent rounded shadow-amber-500" style={{borderRadius:"50% 25% 30% 76% / 25% 25% 47% 33%"}}/>

            </div>

        </div>
    )
}

export default Home