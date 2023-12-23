import FormButton from './FormButton';

import './css/style.css';

type FormProps = {
    setIsFormHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = ({ setIsFormHovered } : FormProps) => {
    return ( 
        <form 
            action="https://formsubmit.co/rostik19wozniak@gmail.com" 
            method="post"
            onMouseOver={() => setIsFormHovered(true)}
            onMouseOut={() => setIsFormHovered(false)}
            className="relative w-[min(700px,90%)] flex flex-col gap-[20px] p-8 rounded-lg border backdrop-blur-[8px] shadow-sm scale-[.999] hover:shadow-lg hover:scale-[1] duration-200"
        >           
            <div 
                style={{
                    animation: '3s linear infinite alternate left-right'
                }} 
                className="absolute top-[-20px] left-[10px] bg-primary px-2">
                <h3 className="text-[1.5rem]">Send Me Message</h3>
            </div>

            <label className="flex flex-col tablet:flex-row gap-[10px] justify-between">
                <p className="hidden tablet:block">Name:</p>
                <input 
                    className="w-full tablet:w-[min(400px,100%)] rounded py-1 px-3" 
                    type="text" 
                    name="name" 
                    placeholder="Enter Your Name" 
                    required
                /> 
            </label>
            <label className="flex flex-col tablet:flex-row gap-[10px] justify-between">
                <p className="hidden tablet:block">Email Adress:</p>
                <input 
                    className="w-full tablet:w-[min(400px,100%)] rounded py-1 px-3" 
                    type="text" 
                    name="name" 
                    placeholder="Enter Your Name" 
                    required
                /> 
            </label>
            <label className="flex flex-col tablet:flex-row gap-[10px]  justify-between">
                <p className="hidden tablet:block">Message:</p>
                <textarea 
                    className="max-h-[200px] min-h-[200px] w-full tablet:w-[min(400px,100%)] rounded py-1 px-3"
                    name="message" 
                    placeholder="Enter Your Message" 
                    required 
                />
            </label>
                   
            <input type="hidden" name="_captcha" value="false"/>

            <FormButton/>
        </form>
     );
};
 
export default Form;