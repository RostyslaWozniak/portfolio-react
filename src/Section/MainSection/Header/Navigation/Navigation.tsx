import { useAppContext } from '../../../../Context/AppContext';

const Navigation = () => {
    const { isNavActive, setIsNavActive, setIsLogoActive } = useAppContext();
const navArray = [
    {name: 'About', href: '#about'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
];
    const showNavigation = navArray.map(item => (
        <li 
            key={item.name}
            className="group relative px-4">
            <a href={item.href}> {item.name} </a>
              <span 
                className="absolute bottom-0 left-0 h-[2px] w-[0]  bg-background rounded group-hover:w-[50%] duration-300">
              </span>
          </li>
    ));

    function handleNavClick(){
        setIsNavActive(false);
        setIsLogoActive(false);
    }

    return ( 
        <nav 
            onClick={handleNavClick}
            className="fixed top-[0] h-screen w-[min(400px,100%)] py-40 bg-secondary z-[10] duration-500 laptop:bg-opacity-0 laptop:p-5 laptop:right-[10%]"
            style={{
                left: isNavActive ? '0' : '-110%',
     
            }}
        >
            <ul className="flex flex-col laptop:flex-row items-center text-[1.5rem] gap-[20px] ">
                {showNavigation}
            </ul>
        </nav>
     );
};
 
export default Navigation;