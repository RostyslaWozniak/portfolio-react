import './style.css';
type TooltipProps = {
    value: string
}

const Tooltip = ({ value } : TooltipProps) => {
    return ( 
        <div 
            style={{animation: '.3s linear show-tooltip'}}
            className="absolute top-[-50px] px-10 py-1 bg-background border rounded-lg text-center shadow-md z-[20] duration-300">
            {value}
        </div>
     );
};
 
export default Tooltip;