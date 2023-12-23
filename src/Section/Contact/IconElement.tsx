import { useState } from 'react';
import Tooltip from '../../Components/Tooltip/Tooltip';

type IconElementProps = {
        name: string;
        link: string;
        icon: string;
        aditionalIcon: string;
        leftPosition: string
}

const IconElement = ({ name, link, icon, leftPosition, aditionalIcon} : IconElementProps) => {
    const [coppyWord, setCopyWord] = useState('copy');
    const [downloadWord, setDownloadWord] = useState('download');
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [isActiveIcon, setIsActiveIcon] = useState(false);

    
    function handleCopyOrDownload(e : React.MouseEvent<HTMLDivElement, MouseEvent>, name: string){
        e.stopPropagation();
        //download resume
        if(name === 'Download Resume') {
            setDownloadWord('downloaded');
            return console.log('Download Resume');
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
            className="absolute h-[70px] grid place-items-center bg-background rounded-lg cursor-pointer shadow-sm hover:brightness-95 hover:shadow-md duration-300"
            style={{ 
                width: isActiveIcon ? '95%' : '70px', 
                left: isActiveIcon ? '10px' : leftPosition, 
                scale: isActiveIcon ? '1.1' : '1',
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
            <p style={{ visibility: isActiveIcon ? 'visible' : 'hidden' }} className="">{name}</p>

            {/* on click copy or download  */}
            <div 
                style={{ visibility: isActiveIcon ? 'visible' : 'hidden' }} 
                className="absolute right-[10px]" 
                onMouseOver={() => setIsTooltipVisible(true)}
                onMouseOut={() => {
                    setIsTooltipVisible(false);
                    setCopyWord('copy');
                    setDownloadWord('download');
                }}
                onClick={e => handleCopyOrDownload(e, name)}
            >
                <img 
                    src={aditionalIcon} 
                />
                {isTooltipVisible && <Tooltip value={name === 'Download Resume' ? downloadWord : coppyWord} />}
            </div>
        </div>
     );
};
 
export default IconElement;

// import { useState } from 'react';
// import Tooltip from '../../Components/Tooltip/Tooltip';

// type IconElementProps = {
//         name: string;
//         link: string;
//         icon: string;
//         aditionalIcon: string;
//         leftPosition: string
// }

// const IconElement = ({ name, link, icon, leftPosition, aditionalIcon} : IconElementProps) => {
//     const [coppyWord, setCopyWord] = useState('copy');
//     const [downloadWord, setDownloadWord] = useState('download');
//     const [isTooltipVisible, setIsTooltipVisible] = useState(false);
//     const [isActiveIcon, setIsActiveIcon] = useState(false);

    
//     function handleCopyOrDownload(e : React.MouseEvent<HTMLDivElement, MouseEvent>, name: string){
//         e.stopPropagation();
//         //download resume
//         if(name === 'Download Resume') {
//             setDownloadWord('downloaded');
//             return console.log('Download Resume');
//         }
//         //copy link
//         setCopyWord('copied');
//         navigator.clipboard.writeText(link);
//     }
//     //close contact icon element click body
//     if(isActiveIcon){
//         document.body.addEventListener('click', () => setIsActiveIcon(false));
//     }
//     return ( 
//         <div 
//             className="absolute h-[70px] grid place-items-center bg-background rounded-lg cursor-pointer shadow-sm hover:brightness-95 hover:shadow-md duration-300"
//             style={{ 
//                 width: isActiveIcon ? '90%' : '70px', 
//                 left: isActiveIcon ? '20px' : leftPosition, 
//                 scale: isActiveIcon ? '1.1' : '1',
//                 zIndex: isActiveIcon ? 10 : 1,
//             }}
//             onClick={e => {
//                 e.stopPropagation(); 
//                 setIsActiveIcon(!isActiveIcon);
//             }}
//         >
//             {/* icon  */}
//             <img className="absolute left-[10px]" src={icon}/> 

//             {/* link or name  */}
//             <p style={{ visibility: isActiveIcon ? 'visible' : 'hidden' }} className="">{name}</p>

//             {/* on click copy or download  */}
//             <div 
//                 style={{ visibility: isActiveIcon ? 'visible' : 'hidden' }} 
//                 className="absolute right-[10px]" 
//                 onMouseOver={() => setIsTooltipVisible(true)}
//                 onMouseOut={() => {
//                     setIsTooltipVisible(false);
//                     setCopyWord('copy');
//                     setDownloadWord('download');
//                 }}
//                 onClick={e => handleCopyOrDownload(e, name)}
//             >
//                 <img 
//                     src={aditionalIcon} 
//                 />
//                 {isTooltipVisible && <Tooltip value={name === 'Download Resume' ? downloadWord : coppyWord} />}
//             </div>
//         </div>
//      );
// };
 
// export default IconElement;