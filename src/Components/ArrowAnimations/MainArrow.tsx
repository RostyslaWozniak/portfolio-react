import { useAppContext } from '../../Context/AppContext';
const MainArrow = () => {
    const { hasHeaderBackground } = useAppContext();
    return ( 
        <>
            {!hasHeaderBackground
            &&
            <a href="#about" id="main-arrow-container" className="border">
                <div className="first"></div>
                <div className="second"></div>
                <div className="third"></div>
            </a>}
        </>
     );
};
 
export default MainArrow;