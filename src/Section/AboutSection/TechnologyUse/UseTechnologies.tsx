
import IconElement from './IconElement';
import { technologiesArray }from '../../../helpers/technologiesIcons';
const UseTechnologies = () => {
    const showTechnologies = technologiesArray.map(technology => (
        <IconElement key={technology.name} name={technology.name} url={technology.url} delay={technology.delay}/>
    ));
    return ( 
        <div className="flex justify-center flex-wrap gap-sm ">
            {showTechnologies}
        </div>
     );
};
 
export default UseTechnologies;