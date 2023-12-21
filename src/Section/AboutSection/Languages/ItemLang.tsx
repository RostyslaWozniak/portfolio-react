import { primary, secondary, font, background } from '../../../utilities/colors';
type ItemLangProps = {
    name: string;
    level: string;
    delay: number;
    active?: boolean;
}


const ItemLang = ({ name, level, delay, active = false } : ItemLangProps) => {


    return ( 
        <div 

            className="w-full h-full flex justify-between px-2 py-[8px] rounded duration-300"
            style={{
                backgroundColor: active ? secondary : background,
                color: active ? primary : font,
                animation: `5s ${delay}s linear infinite alternate changeLanguage`,
            }}
            >
            <p>{name}</p><p>{level}</p>
        </div>
     );
};
 
export default ItemLang;