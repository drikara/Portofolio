import Title from "./Title";
import imgHTML from "../assets/techno/html.png"
import imgCSS from "../assets/techno/css.png"
import imgJS from "../assets/images/logojavascript.png"
import imgREACT from "../assets/techno/react.png"
import imgTYPESCRIPT from "../assets/techno/typescript.svg"
import imgTAILWIND from "../assets/techno/tailwind.png"
import imgPYTHON from "../assets/images/pythonlogo.png"
import imgDJANGO from "../assets/images/django.png"
import imgGithub from "../assets/images/github.png"
import imgGit from "../assets/images/git.png"
import imgGenius from "../assets/companies/amazon.png"

const compagnies=[
    {
        id:1,
        icon:imgGenius,
        poste: "Développeur Backend,Genius Groups",
        annees : "sep - 2024",
        taches: ["créer des Qrcode pour intégrer dans des systèmes","création d'un site pour une auto-école"]

    },
     {
        id:2,
        icon:imgGenius,
        poste: "Développeur FullStack,Onma",
        annees : "jan 2025 - Mai 2025 ",
        taches: ["création des sites vitrines","création des sites e-commerces"]

    },
  
]

const skills=[

    {
        id:1,
        name:"HTML",
        image:imgHTML,
    },
     {
        id:2,
        name:"CSS",
        image:imgCSS,
    },
     {
        id:3,
        name:"JavaScript",
        image:imgJS,
    },
     {
        id:4,
        name:"TypeScript",
        image:imgTYPESCRIPT,
    },
     {
        id:5,
        name:"React js",
        image:imgREACT,
    },
     {
        id:6,
        name:"Tailwind CSS",
        image:imgTAILWIND,
    },
     {
        id:7,
        name:"Python",
        image:imgPYTHON,
    },
     {
        id:8,
        name:"Django",
        image:imgDJANGO,
    },
      {
        id:9,
        name:"Github",
        image:imgGithub,
    },
     {
        id:10,
        name:"Git",
        image:imgGit,
    },
];


function Experiences(){
    return(
        
        <div className="mx-auto">
            <Title  title="MES EXPÉRIENCES"/>
            

                <div className="md:px-45 md:py-10 flex justify-center md:flex-row flex-col-reverse  ">
                        <div className="flex flex-wrap gap-2 w-xs mx-auto">
                            {skills.map((skill)=>(
                                <div key={skill.id} className="flex justify-center items-center flex-col ">
                                
                                    <div className="size-24 rounded-full p-2 border-2 border-accent mx-auto">
                                        <img src={skill.image} alt={skill.name} className="rounded-full object-cover w-full h-full" />

                                    </div>
                                    <p className="mt-2 text-sm">{skill.name}</p>
                                    
                                

                                </div>
                            ))}
                        </div>
                    <div className="md:w-1/2">
                        <div >
                            
                                {compagnies.map((compagnie)=>(

                                   <ul key={compagnie.id} className="bg-gray-700 mb-5 py-7 px-2">

                                        <div >
                                            <div className="flex">
                                                <li>
                                                    <img src={imgGenius} alt="" className="w-9 h-9 mr-5"/>
                                                </li>

                                                <li>
                                                    <h3 className="text-orange-400 text-2xl text-bold mb-2">{compagnie.poste}</h3>
                                                     <span className="text-sm" >{compagnie.annees}</span>
                                                </li>
                                                 

                                            </div>
                                            
                                             <div>
                                                      {compagnie.taches.map((tache,index)=>(
                                                       <ul key={index} className="ml-12 text-xl list-disc">
                                                           <li >{tache}</li>
                                                       </ul>
                                                      ))}
                                                  </div>
                                               
                                            
                                        </div>
                                     
                                    
                                      
                                    </ul>
            
                                ))}
                            
                        </div>

                    </div>
                </div>
                  
                    
                
           
            
           

        </div>
    )

}
export default Experiences