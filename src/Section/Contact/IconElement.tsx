import { useState } from 'react';
import Tooltip from '../../Components/Tooltip/Tooltip';
import cvPdf from '../../asets/files/Rostyslav Vozniak CV_eng.pdf';

type IconElementProps = {
    name: string;
    link: string;
    icon: string;
    aditionalIcon: string;
    leftPosition: string;
}

const IconElement = ({ name, link, icon, leftPosition, aditionalIcon} : IconElementProps) => {
    const [coppyWord, setCopyWord] = useState('copy');
    const [downloadWord, setDownloadWord] = useState('download');
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isActiveIcon, setIsActiveIcon] = useState(false);

    function handleCopyOrDownload(e : React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.stopPropagation();
        //download resume
        if(name === 'Download Resume') {
            return setDownloadWord('downloaded');
        }
        //copy link
        setCopyWord('copied');
        navigator.clipboard.writeText(link);
    }
    //close contact icon element click body
    if(isActiveIcon){
        document.body.addEventListener('click', () => setIsActiveIcon(false));
    }
    return ( 
        <div 
            className="absolute h-[70px] grid place-items-center bg-background rounded-lg shadow-sm hover:brightness-95 hover:shadow-md duration-300"
            style={{ 
                width: isActiveIcon ? '95%' : '70px', 
                left: isActiveIcon ? '10px' : leftPosition, 
                boxShadow: isActiveIcon ? '8px 12px 20px -10px #36474a' : '8px 8px 10px -10px #36474a',
                cursor: isActiveIcon ? 'default' : 'pointer',
                zIndex: isActiveIcon ? 10 : 1,
            }}
            onClick={e => {
                e.stopPropagation(); 
                setIsActiveIcon(!isActiveIcon);
            }}
        >
            {/* icon  */}
            <img className="absolute left-[10px]" src={icon}/> 

            {/* link or name  */}
            {
                name === 'GitHub' || name === 'Linkedin' 
                ?
                (<a style={{ visibility: isActiveIcon ? 'visible' : 'hidden' }} href={link} target="_blank" className="underline">{name}</a>)
                :
                (<p style={{ visibility: isActiveIcon ? 'visible' : 'hidden' }}>{name}</p>)
            }   
            

            {/* on click copy or download  */}
            <a 
                href={name === 'Download Resume' ? cvPdf : undefined}
                download={name === 'Download Resume' && cvPdf}
                style={{ 
                    visibility: isActiveIcon ? 'visible' : 'hidden',
                    cursor: isActiveIcon ? 'pointer' : 'default',
                }} 
                className="absolute right-[10px]" 
                onMouseOver={() => setIsTooltipVisible(true)}
                onMouseOut={() => {
                    setIsTooltipVisible(false);
                    setCopyWord('copy');
                    setDownloadWord('download');
                }}
                onClick={handleCopyOrDownload}
            >
                <img 
                    src={aditionalIcon} 
                />
                {isTooltipVisible && <Tooltip value={name === 'Download Resume' ? downloadWord : coppyWord} />}
            </a>
        </div>
     );
};
 
export default IconElement;