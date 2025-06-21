
import img1 from "../assets/projects/1.png"
import imgPortfolio from "../assets/projects/2.png"
import imgGT from "../assets/projects/5.png"
import Title from './Title';
import { Github, Video } from 'lucide-react';

const projets = [
    {
        id: 1,
        imgpro1: img1,
        nomProjet: "Plateforme E-commerce",
        description: "Je vous présente mes différentes compétences et projets sur le développement web",
        langages: ["React JS", "TypeScript", "MySQL"], 
        demo: "#",
        github: 'https://github.com/drikara/Portofolio'
    },
    {
        id: 2,
        imgpro1: imgPortfolio,
        nomProjet: "Portfolio",
        description: "Je vous présente mes différentes compétences et projets sur le développement web",
        langages: ["React JS", "TypeScript", "Tailwind CSS"],
        demo: "#",
        github: 'https://github.com/drikara/Portofolio'
    },
    {
        id: 3,
        imgpro1: imgGT,
        nomProjet: "Gestion de Tâche",
        description: "Je vous présente mes différentes compétences et projets sur le développement web",
        langages: ["React JS", "Firebase", "CSS"],
        demo: "#",
        github: 'https://github.com/drikara/Portofolio'
    },
];
const Projets = () => {
    return (
        <div className='md:px-25 md:mb-5'>
            <Title title='MES PROJETS'/>
            <div className=' md:flex gap-7 py-5 '>
               {projets.map((projet)=>(
                <div key={projet.id} className=' bg-gray-700 p-4' >
                    <img src={projet.imgpro1} alt="" className='w-full h-60 mb-7'/>
                    <h2 className='mb-7 text-2xl text-accent'>{projet.nomProjet}</h2>
                    <p className='mb-7'>{projet.description}</p>
                    <div className='flex flex-wrap gap-2 mb-7'>
                        {projet.langages.map((langage,index)=>(
                            <div className='bg-amber-700 p-2'>
                                <span key={index}>{langage}</span>
                            </div>
                        ))}
                    </div>
                    <div className='grid grid-cols-4  gap-5'>
                        <a href={projet.demo} className='flex items-center  col-span-3  bg-amber-700 hover:bg-amber-900  py-5 rounded-xl'> <Video className='mx-auto' /></a>
                         <a href={projet.github} className=' col-span-1  bg-gray-500 text-center py-5 rounded-xl hover:bg-gray-900'><Github className='mx-auto'/></a>
                    </div>
                </div>
               ))}
            </div>

            
        </div>
    );
}

export default Projets;
