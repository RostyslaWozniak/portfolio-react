import { useAppContext } from '../../../../Context/AppContext';

const Navigation = () => {
    const { isNavActive } = useAppContext();
const navArray = [
    {name: 'About', href: '#about'},
    {name: 'Projects', href: '#projects'},
    {name: 'Contact', href: '#contact'},
];
    const showNavigation = navArray.map(item => (
        <li 
            key={item.name}
            className="group relative">
            <a href={item.href}> {item.name} </a>
              <span 
                className="absolute bottom-0 left-0 h-[2px] w-[0] bg-background rounded group-hover:w-[50%] duration-300">
              </span>
          </li>
    ));

    return (      
        <nav 
            className="fixed top-[0] h-screen w-[min(500px,100%)] py-40 bg-secondary shadow-lg duration-300 laptop:shadow-[none] laptop:static laptop:h-[50px] laptop:py-3 laptop:bg-opacity-0 laptop:w-[400px]"
            style={{
                left: isNavActive ? '0' : '-110%',
            }}
        >
            <ul className="flex flex-col laptop:flex-row items-center justify-between text-[1.7rem] text-background gap-[40px] laptop:text-[1.2rem]">
                {showNavigation}
            </ul>
        </nav>
     );
};
 
export default Navigation;