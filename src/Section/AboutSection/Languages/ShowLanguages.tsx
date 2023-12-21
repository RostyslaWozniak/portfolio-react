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
          className="group h-[55px] flex flex-col text-[1.2rem] gap-[10px] duration-300 cursor-default z-[1] overflow-hidden">
            <ItemLang 
              name={language.name} 
              level={language.level} 
              delay={language.delay}
            />
            <ItemLang 
              name={language.nameEng} 
              level={language.level} 
              delay={language.delay}
              active={true}
            />
        </div>
      ));
    return ( 
        <>{showLanguages}</>
     );
};
 
export default ShowLanguages;