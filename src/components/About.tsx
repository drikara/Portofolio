import Title from "./Title"
import img2 from "../assets/images/photo7.jpeg"
import { Codesandbox,SunMedium } from "lucide-react";
const abouts = [
    {
        id:1,
        fonction: "Développeur frontend",
        description:"je suis un développeur frontend avec bonne expérience",
        icon:<Codesandbox  className="scale-150 text-accent"/>



    },
     {
        id:2,
        fonction: "Développeur Backend",
        description:"je maitrise les bases du développement backend pour créer des apis",
        icon:<SunMedium className="scale-150 text-accent"/>,



    },
]
function About(){
    return(
        <div className=" h-full w-full align-middle">
            <Title title="À PROPOS"/>
            <div className=" md:py-10 flex justify-center md:flex-row flex-col-reverse">
                <div className="">
                    <img src={img2} alt="" className=" md:w-96 md:h-96 object-cover size-75 ml-20 border-8 border-accent rounded shadow-amber-500"/>

                </div>
                <div className="md:ml-4 space-y-4">
                   {abouts.map((about) => (
                    <div key={about.id}>
                        <div className="my-7 md-mb-0 flex bg-gray-700 p-4">
                            {about.icon}

                            <div className="ml-4 ">
                              
                               <h2 className="text-xl text-bold text-accent">
                                 {about.fonction}

                               </h2>
                               <p>
                                {about.description}
                               </p>

                            </div>




                        </div>
                        
                        
                    </div>
                   ))}
                        
                </div>
     
            </div>

        </div>
    )
}
export default About