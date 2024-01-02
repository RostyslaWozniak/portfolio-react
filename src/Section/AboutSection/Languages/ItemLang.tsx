import { secondary, font, background } from '../../../helpers/variables';
type ItemLangProps = {
    name: string;
    level: string;
    delay: number;
    active?: boolean;
    top: number;
}


const ItemLang = ({ name, level, delay, active = false, top } : ItemLangProps) => {


    return ( 
        <div 
            className="absolute w-full  flex justify-between px-4 py-3 rounded duration-300"
            style={{
                top,
                backgroundColor: active ? secondary : background,
                color: active ? background : font,
                animation: `5s ${delay}s linear infinite alternate changeLanguage`,
            }}
            >
            <p>{name}</p><p>{level}</p>
        </div>
     );
};
 
export default ItemLang;