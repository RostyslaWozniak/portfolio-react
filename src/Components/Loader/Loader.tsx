import { useState } from 'react';
import './style.css';
import Logo from './LogoLoader';
import loaderBG from '../../asets/images/background/loader/loader-bg.png';
import { useAppContext } from '../../Context/AppContext';


const Loader = () => {
    const { delayLoading } = useAppContext();
    const [display, setDisplay] = useState('grid');
    window.addEventListener('load', () => {
        setTimeout(() => {
            setDisplay('none');
            document.body.style.overflowY = 'scroll';
        }, delayLoading);
    });
    const time = delayLoading / 1000 - 1;
    return ( 
        <div id="loader-container" 
        style={{
            display, 
            backgroundImage: `url(${loaderBG})`,
            animation: `${time}s 2s linear bg-disappear`,
        }}>
            <Logo/>
        </div>
     );
};
 
export default Loader;