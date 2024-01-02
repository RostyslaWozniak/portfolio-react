import { technologiesArray } from '../../helpers/technologiesIcons';
import type { technologiesArrayType } from '../../helpers/technologiesIcons';
type ShowProjectDescriptionsProps = {
    name: string
    imgSrc: string
    technologies: string[]
    description: string
    github: string
    isProjectDescriptionsVisible: boolean
    setIsProjectDescriptionsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const ShowProjectDescriptions = ({ 
    name, 
    imgSrc, 
    technologies, 
    description, 
    github,
    isProjectDescriptionsVisible, 
    setIsProjectDescriptionsVisible
}: ShowProjectDescriptionsProps) => {
    
    const thisTechnologies: technologiesArrayType = [];
    technologies.forEach(el => {
        const item = technologiesArray.find(icon => el === icon.name);
        thisTechnologies.push(item!);
    });
    return ( 
        <>
        {isProjectDescriptionsVisible &&
        (<div 
            onClick={() => setIsProjectDescriptionsVisible(false)}
            className="hidden fixed laptop:flex justify-center items-center inset-0 bg-white z-[30] backdrop-brightness-75 backdrop-blur">
                <div
                onClick={e => e.stopPropagation()}
                 className="h-[min(600px,80%)] w-sectionWidth flex justify-between gap-sm bg-gradient-to-tl from-primary to-secondary rounded-lg p-10 shadow-md-light">
                    <div className="flex items-center w-[300px] h-[300px] overflow-hidden rounded-lg">
                        <img src={imgSrc} alt={name} className="rounded-lg" />
                    </div>
                    <div className="flex flex-col justify-between w-[60%]">
                        <h3 className="text-center text-font text-bold text-4xl">{name}</h3>
                        <p className="text-font text-2xl">
                            {description}
                            <br /><a 
                                    className="italic underline text-background" 
                                    href={github}
                                    target="_blank"
                                    >Code on github.</a>
                        </p>
                        <div className="flex gap-sm self-end self">
                            {thisTechnologies.map(technology => (
                                <div key={technology.name} className="h-[150px] flex flex-col items-center justify-between">
                                    <img className="scale-[.8]" src={technology.url} alt={technology.name} />
                                    <p className="text-font border text-center px-10 py-1 rounded">{technology.name}</p>
                                </div>
                                
                            ))}
                        </div>

                    </div>
                </div>
        </div>) }
        </>
    );
};
 
export default ShowProjectDescriptions;