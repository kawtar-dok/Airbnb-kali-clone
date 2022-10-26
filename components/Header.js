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
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header() {
   const {systemThem, theme, setTheme} = useTheme();
   const [mounted, setMounted] = useState(false);
   const [searchInput, setSearchInput] = useState("");
   const [startDate, setStartDate] = useState(new Date());
   const [endDate, setEndDate] = useState(new Date());
   const [numberOfGuest, setNumberOfGuest] = useState(1);
   console.log(numberOfGuest)
   //object
   const selectionRanges = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection'
   }
   const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
   }
   
   const resetInput = () => {
     setSearchInput("");
   }

   console.log(searchInput)


  useEffect(() =>{
    setMounted(true);
  },[])

   const renderThemeChange= () => {
    if(!mounted) return null;
    
    const currentTheme = theme === "system" ? systemThem : theme;

    if(currentTheme === "dark"){
      return (
        <SunIcon 
         className="w-6 h-6 text-yellow-500"
         role="button" 
         onClick={() => setTheme('light')} />
        )
    }
    else {
      return(
        <MoonIcon
        className='w-6 h-6 text-gray-900'
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
     <div className='relative flex items-center h-8 md:h-10
     cursor-pointer my-auto '>
        <Image
            src="https://links.papareact.com/qd3"
            layout='fill'
            objectFit='contain'
            objectPosition="left" 
        />
     </div>
     {/* Middle : Search */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm dark:border-slate-400'>
        <input  
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text" 
        className='flex-grow pl-5 bg-transparent outline-none
        text-sm text-gray-600 placeholder-gray-400 dark:text-white dark:placeholder-slate-400'
        placeholder='Start your search'
         />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white 
        rounded-full p-2 cursor-pointer md:mx-2'/>
      </div>
    
     {/* Right */}
     <div className='flex items-center justify-end md:space-x-4
     text-gray-500'>
        {/* Dark Mode  */}
        <div className='flex items-center cursor-pointer'>
        {renderThemeChange()}
         </div>
         <div className='flex space-x-1'>
          <p className='hidden lg:inline-flex cursor-pointer'>
           Become a Host
         </p>
         <GlobeAltIcon className='hidden md:inline-flex h-6 cursor-pointer'/>
       </div>
      <div className='flex items-center  md:space-x-2 border-2 p-2 rounded-full dark:border-slate-400'>
         <MenuIcon className='h-6'/>
         <UserCircleIcon  className='h-6'/>
      </div>
     </div>
     {searchInput && (
      //this div will has the date range picker to install   
      <div className='flex flex-col col-span-3 mx-auto dark:bg-white dark:text-black'>
         <DateRangePicker 
           ranges={[selectionRanges]}
           minDate={new Date()}
           rangeColors={["#FD5B61"]}
           onChange={handleSelect}
           className="mt-1 dark:bg-white dark:text-black"
         />
         <div className='flex items-center border-b mb-4  dark:bg-white dark:text-black'>
            <h2 className='text-xl tracking-[1px] font-semibold flex-grow '>
              Number of Guest
            </h2>
             <UsersIcon
              className='h-5'
             />
             <input 
              value={numberOfGuest}
              onChange={(e) => setNumberOfGuest(e.target.value)}
              type="number"
              min={1}
              className='w-12 pl-2 text-lg text-red-400 outline-none dark:bg-white'
             />
         </div>
         <div className='flex'>
                <button 
                  className='flex-grow text-gray-500'
                  onClick={resetInput}>
                    Cancel
                </button>
                <button className='flex-grow text-red-400'>Search</button>
         </div>
      </div>
      )}

    </header>
  )
}

export default Header

