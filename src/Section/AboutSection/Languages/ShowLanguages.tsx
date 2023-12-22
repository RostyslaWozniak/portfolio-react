import '../css/style.css';
import ItemLang from './ItemLang';

const ShowLanguages = () => {
    const languages = [
        {name: 'English', nameEng: 'English', level: 'B2', delay: 1},
        {name: 'Українська', nameEng: 'Ukrainian', level: 'C2', delay: 2},
        {name: 'Polski', nameEng: 'Polish', level: 'C1', delay: 3},
        {name: 'російська', nameEng: 'russian',  level: 'C1', delay: 4},
      ];
      const showLanguages = languages.map(language => (
        <div 
          key={language.name}
          className="group relative h-[51px] flex flex-col text-[1.2rem] gap-[10px] duration-300 cursor-default z-[1] shadow-sm scale-[.98] hover:scale-[1] hover:shadow-md overflow-hidden rounded-lg">
            <ItemLang 
              name={language.name} 
              level={language.level} 
              delay={language.delay}
              top={0}
            />
            <ItemLang 
              name={language.nameEng} 
              level={language.level} 
              delay={language.delay}
              active={true}
              top={60}
            />
        </div>
      ));
    return ( 
        <>{showLanguages}</>
     );
};
 
export default ShowLanguages;