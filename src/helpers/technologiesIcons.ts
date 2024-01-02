import htmlIcon from '../asets/images/technoligies_icons/html.svg';
import cssIcon from '../asets/images/technoligies_icons/css.svg';
import tailwindIcon from '../asets/images/technoligies_icons/tailwind.svg';
import jsIcon from '../asets/images/technoligies_icons/js.svg';
import tsIcon from '../asets/images/technoligies_icons/typescript.svg';
import reactIcon from '../asets/images/technoligies_icons/react.svg';
import figmaIcon from '../asets/images/technoligies_icons/figma.svg';
import expressIcon from '../asets/images/technoligies_icons/node.svg';
import mongoDBIcon from '../asets/images/technoligies_icons/mongoDB.svg';
import MySQLIcon from '../asets/images/technoligies_icons/mySQL.svg';
import VSCodeIcon from '../asets/images/technoligies_icons/vs-code.svg';

export type technologiesArrayType = {
    name: string;
    url: string;
    delay: number;
}[];

export const technologiesArray = [
    {name: 'HTML5', url: htmlIcon, delay: 1},
    {name: 'CSS3', url: cssIcon,  delay: 1.5},
    {name: 'Tailwind', url: tailwindIcon,  delay: 1.7},
    {name: 'JavaScript', url: jsIcon, delay: 1.2},
    {name: 'TypeScript', url: tsIcon,  delay: 1.4},
    {name: 'React.js', url: reactIcon,  delay: 1.2},
    {name: 'Figma', url: figmaIcon,  delay: 1.6},
    {name: 'Express.js', url: expressIcon, delay: .9},
    {name: 'MongoDB', url: mongoDBIcon, delay: 1.9},
    {name: 'MySQL', url: MySQLIcon,  delay: .8},
    {name: 'VSCode', url: VSCodeIcon, delay: 1.3},
];