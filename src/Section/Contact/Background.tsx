import message from '../../asets/images/background/contact/message.svg';
import mail from '../../asets/images/background/contact/mail.svg';
import lines from '../../asets/images/background/contact/lines.svg';
import pencil from '../../asets/images/background/contact/pencil.svg';

type BackgroundProps = {
    isFormHovered: boolean;
}
const Background = ({ isFormHovered } : BackgroundProps) => {

    return ( 
        <>
            <img className="hidden absolute duration-1000 laptop:block z-[-1]" 
                style={{
                    top: isFormHovered ? '90px' : '40px',
                    left: isFormHovered ? '70px' : '10px',
                }}
                src={pencil}
            />
            <img className="hidden absolute duration-500 laptop:block z-[-1]"
                style={{
                    top: isFormHovered ? '150px' : '100px',
                    right: isFormHovered ? '70px' : '40px',
                }}
                src={message}
            />
            <img className="hidden absolute duration-[1.3s] laptop:block z-[-1]" 
                style={{
                    bottom: isFormHovered ? '-30px' : '-100px',
                    left: isFormHovered ? '10px' : '-30px',
                }}
                src={mail}
            />
            <img className="hidden absolute duration-700 laptop:block z-[-1]"
                style={{
                    bottom: isFormHovered ? '50px' : '20px',
                    right: isFormHovered ? '60px' : '40px',
                }}
                src={lines}
            />
        </>
     );
};
 
export default Background;