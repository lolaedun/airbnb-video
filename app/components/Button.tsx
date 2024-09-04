import { IconType } from "@/node_modules/react-icons/lib/iconBase";
import { ReactElement } from "react";

interface ButtonProps {

    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}


const Button:React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon
}) => {
   

    return(
        <button className = {`
        relative 
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        ${outline ? 'bg-white' : 'bg-sky-500'}
        ${outline ?  'border-black' : 'border-sky-500'}
        ${outline ? 'text-black' : 'text-white'}
        
        `}>
            {label}
        </button>
    );
};

export default Button;