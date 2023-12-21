import { useState } from 'react';
import Tooltip from '../../../Components/Tooltip/Tooltip';
import '../css/style.css';

type IconElementProps = {
    name: string
    url: string
    delay: number
}

const IconElement = ({ name, url, delay } : IconElementProps) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);
    function handleMouseOver(){
        setIsTooltipVisible(true);
        setIsAnimated(true);
    }
    function handleMouseOut(){
        setIsTooltipVisible(false);
        setIsAnimated(false);
    }
    return ( 
        <div 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="relative w-[70px] tablet:w-[80px]"
            style={{
                animation: isAnimated ? '' : `${delay}s ${delay}s infinite linear alternate bouncing`,
            }}
        >
            {isTooltipVisible && <Tooltip value={name} />}
            <img src={url} alt={name}  className="hover:rotate-[-10deg]
            hover:scale-[1.2] duration-300"/>
        </div>
     );
};
 
export default IconElement;