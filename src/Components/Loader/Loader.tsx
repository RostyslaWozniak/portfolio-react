import { useEffect, useState } from 'react';
import './style.css';
import LogoLoader from './LogoLoader';
import loaderBG from '../../asets/images/background/loader/loader-bg.png';
import { useAppContext } from '../../Context/AppContext';


const Loader = () => {
    const { delayLoading } = useAppContext();
    const [isLoaderVisible, setIsLoaderVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaderVisible(false);
            document.body.style.overflowY = 'scroll';
        }, delayLoading);
    }, [delayLoading]);
    const time = delayLoading / 1000 - 1;
    return ( 
        <div id="loader-container" 
        style={{
            display: isLoaderVisible ? 'grid' : 'none', 
            backgroundImage: `url(${loaderBG})`,
            animation: `${time}s 2s linear bg-disappear`,
        }}>
            <LogoLoader/>
        </div>
     );
};
 
export default Loader;