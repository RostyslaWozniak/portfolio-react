import { useAppContext } from '../../Context/AppContext';
import arrow from '../../asets/images/animations/arrow1.svg';
const MainArrow = () => {
    const { hasHeaderBackground } = useAppContext();
    return ( 
        <>
            {!hasHeaderBackground
            &&
            <div>
                <img src={arrow}/>
            </div>}
        </>
     );
};
 
export default MainArrow;