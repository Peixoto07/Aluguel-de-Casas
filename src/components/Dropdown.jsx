/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri'; // Importe os ícones necessários
import { Menu } from '@headlessui/react';

const Dropdown = ({ items, selectedItem, setSelectedItem, icon: Icon, title }) => { // Renomeie 'icon' para 'Icon' e ajuste a desestruturação
  
  return (
    <Menu as='div' className='dropdown relative'>
      {({ open }) => (
        <>
          <Menu.Button className='dropdown-btn w-full text-left'>
            {Icon && <Icon className='dropdown-icon-primary' />}
            <div>
              <div className='text-[15px] font-medium leading-tight'>{selectedItem}</div>
              <div className='text-[13px]'>{title}</div>
            </div>
            {open ? (
              <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (
              <RiArrowDownSLine className='dropdown-icon-secondary' />
            )}
          </Menu.Button>
  
          <Menu.Items className='dropdown-menu'>
            {items.map((item, index) => (
              <Menu.Item
                onClick={() => setSelectedItem(item)}
                className='cursor-pointer hover:text-violet-400 transition'
                as='li'
                key={index}
              >
                {item}
              </Menu.Item>
            ))}
          </Menu.Items>
        </>
      )}
    </Menu>
  );
  
};

export default Dropdown;
