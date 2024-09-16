'use Client';

import React from 'react';
import Container from '../Container';
import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox  from '../CategoryBox';

export const categories = [
    {
      label: 'Beach',
      icon: TbBeach,
      description: 'This property is close to the beach!',
    },
    {
      label: 'Windmills',
      icon: GiWindmill,
      description: 'This property is has windmills!',
    },
    {
      label: 'Modern',
      icon: MdOutlineVilla,
      description: 'This property is modern!'
    },
]

const Categories = () => {
  return (
    <Container>
        <div className='flex 
                        flex-row 
                        items-center 
                        justify-between
                        gap-3
                        md:gap-0'>
            {categories.map((item) => (
                <CategoryBox 
                key={item.label}
                label={item.label}
                icon={item.icon}
                description={item.description}
          />
        ))}
        </div>
    </Container>
  )
}

export default Categories;