import Form from './Form';
import Icons from './Icons';
import { useState } from 'react';
import './css/style.css';
import Background from './Background';


const Contact = () => {
const [isFormHovered, setIsFormHovered] = useState(false);

  return(
    <section id="contact"
    className="bg-primary text-font flex flex-col justify-between items-center py-[150px] shadow-primary-shadow "

    >
      <div className="relative w-sectionWidth mx-auto flex flex-col items-center z-[1]">
        <h1 className="text-[2rem] text-center z-[1]">CONTACT</h1>
        <Icons/>
        <Form setIsFormHovered={setIsFormHovered} /> 
        <Background isFormHovered={isFormHovered}/> 
      </div>

    </section>
  );
  };
  export default Contact;
