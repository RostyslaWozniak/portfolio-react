import Form from './Form';
import Icons from './Icons';
import message from '../../asets/images/background/contact/message.svg';
import mail from '../../asets/images/background/contact/mail.svg';
import lines from '../../asets/images/background/contact/lines.svg';
import pencil from '../../asets/images/background/contact/pencil.svg';
import { useEffect, useState } from 'react';
import './css/style.css';


const Contact = () => {
const [isFormHovered, setIsFormHovered] = useState(false);
const [isTabletSize, setIsTabletSize] = useState(false);

useEffect(() => {
  if(window.innerWidth > 650) setIsTabletSize(true);
  if(window.innerWidth <= 650) setIsTabletSize(false);
}, [setIsTabletSize]);
  return(
    <section id="contact"
    className="bg-primary text-font flex flex-col justify-between items-center py-[150px] shadow-primary-shadow "
    style={{
      backgroundImage: isTabletSize ? `url(${pencil}), url(${message}), url(${lines}), url(${mail})` : '',
      backgroundPosition: `
        top ${isFormHovered ? '25' : '20'}% left ${isFormHovered ? '25' : '20'}%, 
        top ${isFormHovered ? '32' : '30'}% right ${isFormHovered ? '12' : '10'}%, 
        bottom 10% right 10%, 
        bottom ${isFormHovered ? '15' : '10'}% left ${isFormHovered ? '5' : '10'}%`,
      backgroundRepeat: 'no-repeat',
      transition:  'background-position 1s ease'
    }}
    >
        <h1 className="text-[2rem] text-center z-[1]">CONTACT</h1>
        <Icons/>
        <Form setIsFormHovered={setIsFormHovered}/>  
    </section>
  );
  };
  export default Contact;