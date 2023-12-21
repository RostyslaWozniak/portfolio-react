import gmailIcon from '../../asets/images/contact-icons/mail.svg';
import githubIcon from '../../asets/images/contact-icons/github.svg';
import linkedinIcon from '../../asets/images/contact-icons/linkedin.svg';
import resumeIcon from '../../asets/images/contact-icons/resume.svg';
import IconElement from './IconElement';
import copyIcon from '../../asets/images/additional-icons/copy.svg';
import downloadIcon from '../../asets/images/additional-icons/download.svg';

const Icons = () => {
    const contactsArray = [
        {name: 'Gmail', link: 'rostik19wozniak@gmail.com', icon: gmailIcon, leftPosition: '10px', aditionalIcon: copyIcon},
        {name: 'GitHub', link: 'https://github.com/RostyslaWozniak', icon: githubIcon, leftPosition: '110px', aditionalIcon: copyIcon},
        {name: 'Linkedin', link: 'https://www.linkedin.com/in/rostyslav-vozniak-54835429a/', icon: linkedinIcon, leftPosition: '210px', aditionalIcon: copyIcon},
        {name: 'Download Resume', link: 'rostik19wozniak@gmail.com', icon: resumeIcon, leftPosition: '310px', aditionalIcon: downloadIcon},
    ];
    

    const showContactIcons = contactsArray.map(contact => (
        <IconElement 
            key={contact.name} 
            name={contact.name} 
            link={contact.link} 
            icon={contact.icon} 
            aditionalIcon={contact.aditionalIcon}
            leftPosition={contact.leftPosition}
        />
 
    ));
    return ( 
        <div className="relative h-[300px] w-[min(400px,100%)] flex justify-between items-center scale-90 tablet:scale-100">
            {showContactIcons}
        </div>
     );
};
 
export default Icons;