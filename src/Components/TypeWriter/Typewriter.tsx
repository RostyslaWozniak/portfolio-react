import { useEffect, useState } from 'react';

type TypeWriterProps = {
    text: string;
    startDelay: number;
    speed: number;
}

const TypeWriter = ({ text, startDelay, speed } : TypeWriterProps) => {
    const [index, setIndex] = useState(0);
    const [showText, setSHowText] = useState('');
    const [delay, setDelay] = useState(startDelay);
    useEffect(() => {
        setTimeout(() => {
            if(index <= text.length){
                setSHowText(text.substring(0, index));
                setIndex(index + 1);
                setDelay(speed);
            }
        }, delay);
    }, [delay, index, speed, text]);

    return showText;
};
 
export default TypeWriter;