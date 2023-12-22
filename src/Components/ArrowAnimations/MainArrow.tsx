import { useAppContext } from '../../Context/AppContext';
import arrow from '../../asets/images/animations/arrow1.svg';
const MainArrow = () => {
    const { hasHeaderBackground } = useAppContext();
    return ( 
        <>
            {!hasHeaderBackground
            &&
            <div className="w-screen flex justify-center scale-[.7] translate-x-[-5%]">
                <img className="" src={arrow}/>
            </div>}
        </>
     );
};
 
export default MainArrow;