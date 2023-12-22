import { useAppContext } from '../../../../Context/AppContext';


const BurgerButton = () => {
    const { isNavActive, setIsLogoActive, setIsNavActive } = useAppContext();
    function handleBurgerButtonClick(){
        setIsNavActive(!isNavActive);
        if(isNavActive){
            setIsLogoActive(false);
        } else {
            setIsLogoActive(true);
        }
    }
    return ( 
        <button
            className="group absolute top-[50%] right-[20px] w-[40px] h-[30px] translate-y-[-50%] laptop:hidden "
            onClick={handleBurgerButtonClick}>
            <span 
                className="absolute w-full top-0 left-0 h-[5px] bg-background rounded duration-300"
                style={{
                    transform: isNavActive ? 'translateY(13px) rotate(-45deg)' : 'translateY(0) rotate(0)'
                }}
            ></span>
            <span 
                className="absolute w-[70%] top-[50%] right-0 h-[5px] bg-background rounded translate-y-[-50%] group-hover:w-[100%] duration-300"
                style={{
                    display: isNavActive ? 'none' : 'block'
                }}
            ></span>
            <span 
                className="absolute w-full bottom-0 left-0 h-[5px] bg-background rounded duration-300"
                style={{
                    transform: isNavActive ? 'translateY(-13px) rotate(45deg)' : 'translateY(0) rotate(0)'
                }}
            ></span>
        </button>
     );
};
 
export default BurgerButton;