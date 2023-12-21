const HeaderNavigation = () => {
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
                    className="absolute bottom-0 left-0 h-[2px] w-[0]  bg-background rounded group-hover:w-[50%] duration-300">
                  </span>
              </li>
        ));
    return ( 
    <nav className="hidden w-[min(400px,100%)] laptop:flex">
        <ul className="w-full flex justify-between items-center">
            {showNavigation}
        </ul>
    </nav> 
    );
};
 
export default HeaderNavigation;