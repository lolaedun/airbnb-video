'use Client';
import React from 'react';
import { useRouter, useSearchParams  } from "next/navigation";
import { useCallback } from "react";

interface CategoryBoxProps  {
    label: string;
    icon: IconType;
    selected: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    label,
    icon: Icon,
    selected
}) => {
    const router = useRouter();
    const params = useSearchParams();
    const handleClick = useCallback(() => {
        let currentQuery = {};
    }, []);
  return (
    <div className={`
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer
    
    ${selected ? 'border-b-neutral-800' : 'border-transparent'}
    ${selected ? 'text-neutral-800' : 'text-neutral-500'}
  `}
    
    >
        <Icon size={26} />
        <div className="font-medium text-sm">
          {label}
        </div>
    </div>
  )
}

export default CategoryBox;