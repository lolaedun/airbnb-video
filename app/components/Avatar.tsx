'use client';

import Image from "@/node_modules/next/image";

const Avatar = () => {
    
return (
    <Image 
    className="rounded-full"
    height="30"
    width= "30"
    alt="Avatar"
    src="/images/placeholder.jpg"
    
    />
);

}

export default Avatar;