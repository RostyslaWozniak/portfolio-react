import { useState } from 'react';
import ShowProjectDescriptions from './ShowProjectDescriptions';
import { laptopWidth } from '../../helpers/variables';

type ProjectElementProps = {
    id: number
    name: string
    imgSrc: string
    technologies: string[]
    description: string
    github: string
}

const ProjectElement = ({ 
    id, 
    name, 
    imgSrc, 
    technologies, 
    description,
    github
}: ProjectElementProps) => {
    const [isProjectDescriptionsVisible, setIsProjectDescriptionsVisible] = useState(false);
    const handleOpenProjectDescriptions = () => {
        if(innerWidth < laptopWidth) return;
        setIsProjectDescriptionsVisible(true);
    };
    return ( 
        <>
            <div 
                onClick={handleOpenProjectDescriptions}
                key={id}
                className="w-[min(400px,100%)] tablet:w-[300px] grid place-items-center rounded-lg shadow-sm-light overflow-hidden border-2 scale-[.98] hover:scale-[1] hover:shadow-lg-light duration-300 backdrop-blur cursor-pointer"
                style={{
                    gridColumn: id === 0 ? '1/2' : '',
                    gridRow: id === 0 ? '1/3' : ''
                }}
                
            >
                <img 
                    className="hover:scale-110 opacity-60 brightness-75 hover:opacity-100 hover:brightness-100 duration-300" 
                    src={imgSrc} 
                    alt={name} 
                />
                
            
            </div>
            <ShowProjectDescriptions 
                name={name} 
                imgSrc={imgSrc} 
                technologies={technologies}
                description={description}
                github={github}
                isProjectDescriptionsVisible={isProjectDescriptionsVisible}
                setIsProjectDescriptionsVisible={setIsProjectDescriptionsVisible}
            />
        </>
     );
};
 
export default ProjectElement;



