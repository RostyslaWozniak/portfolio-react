import { useEffect, useState } from 'react';
import image from '../asets/images/background/project/image-1.jpg';
import ArrowAnimation from '../Components/ArrowAnimations/ArrowAnimation';

const Empty = () => {
    const [emptyBG, setEmptyBG] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 1100 ? setEmptyBG(`url(${image})`) : setEmptyBG('');
        });        
    }, []);
    return ( 
        <section className="relative h-screen flex justify-center text-font" >

            <div className="fixed top-0 h-screen w-[100%] brightness-75" style={{backgroundImage: emptyBG, backgroundPosition: 'center', backgroundSize: 'cover', zIndex: -1}}>
            </div>

            <div className="w-[min(1000px,95%)] h-[500px] text-background grid place-items-center py-5 border rounded-[20px] scale-[.99] backdrop-blur-sm backdrop-brightness-75 shadow-sm-light hover:shadow-lg-light hover:scale-[1] duration-300">
                <div className="text-[2rem] text-center ">
                    <h2 >Are You Interested In Collaboration? </h2>
                    <p>Let's Get In Touch!</p>
                </div>
                <a href="#contact" className="flex cursor-pointer">
                    <ArrowAnimation/>
                </a>
            </div>
        </section>
     );
};
 
export default Empty;