import React from 'react'
import {useState, useEffect} from "react";
import Image from 'next/image'
import Link from 'next/link'
//it s an explicit imports we need to define the exact name 
import {
   SearchIcon,
   GlobeAltIcon,
   UserCircleIcon,
   UsersIcon,
   MenuIcon,
   } from "@heroicons/react/solid"
import {SunIcon ,MoonIcon} from "@heroicons/react/solid";
import {useTheme} from "next-themes";

function Header() {
   const {systemThem, theme, setTheme} = useTheme();
   const [mounted, setMounted] = useState(false);
  
  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChange= () => {
    if(!mounted) return null;
    
    const currentTheme = theme === "system" ? systemThem : theme;

    if(currentTheme === "dark"){
      return (
        <SunIcon 
         className="w-8 h-8 text-yellow-500"
         role="button" 
         onClick={() => setTheme('light')} />
        )
    }
    else {
      return(
        <MoonIcon
        className='w-8 h-8 text-gray-900'
        role="button"
        onClick={() => setTheme('dark')} />
      )
    }
   };

  return (
    <header  className='sticky top-0 z-50 grid grid-cols-3 bg-white
    dark:bg-gray-900 
     shadow-md p-2 md:px-10'>
     {/* a container a box its gonna be a grind layout with 3 colum*/}
   
     {/* left */}
     <div className='relative flex items-center h-10  
     cursor-pointer my-auto '>
        <Image
            src="https://links.papareact.com/qd3"
            layout='fill'
            objectFit='contain'
            objectPosition="left"
        />
     </div>
     {/* Middle : Search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input  
        type="text" 
        className='flex-grow pl-5 bg-transparent outline-none
        text-sm text-gray-600 placeholder-gray-400'
        placeholder='Start your search'
         />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white 
        rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>
    
     {/* Right */}
     <div className='flex items-center justify-end space-x-4
     text-gray-500'>
        {/* Dark Mode  */}
        <div className='flex items-center space-x-10 cursor-pointer'>
        {renderThemeChange()}
         </div>
       <p className='hidden md:inline-flex cursor-pointer'>
        Become a Host
       </p>
       <GlobeAltIcon className='h-6 cursor-pointer'/>
      <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
         <MenuIcon className='h-6'/>
         <UserCircleIcon  className='h-6'/>
      </div>
     </div>

    </header>
  )
}

export default Header

