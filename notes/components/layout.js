// 'use client'
// import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../styles/globals.css'
import { useState } from "react";
import NavBar from "../pages/nav";
import Tooltip from "../pages/tooltip";
import SearchIndex from '../pages/searchIndex';


export default function Layout ({ children }) {

  const router = useRouter();
  const [navShow,setNavShow] = useState(false)
  const [search,setSearch] = useState(false)
  const [grid,setGrid] = useState(false)
  // console.log(navShow)
  const menuItems = [
    {
      href : '/',
      title : 'Notes',
      log : 'material-symbols-outlined',
      logName : 'lightbulb'
    },
    {
      href : '/reminder',
      title : 'Reminders',
      log : 'material-symbols-outlined',
      logName : 'notifications'
    },
    {
      href : '/editLable',
      title : 'Edit lables',
      log : 'material-symbols-outlined', 
      logName : 'edit'
    },
    {
      href : '/archive',
      title : 'Archive',
      log : 'material-symbols-outlined',
      logName : 'archive'
    },
    {
      href : '/bin',
      title : 'Bin',
      log : 'material-symbols-outlined',
      logName : 'delete'
    },
  ];
  return (
    <>
      <div>
        <title>Google Keep Notes</title>
        <link rel='icon' href="/icon.png"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </div>
      <div className='flex flex-col'>
        <header className='sticky top-0 h-14 grow'>
          <NavBar setNavShow={setNavShow} navShow={navShow} setSearch={setSearch} search={search} grid={grid} setGrid={setGrid}/> 
        </header>
        <div className='flex'>
          <aside className={`sticky top-16 h-[29rem] w-fit`}>
            <nav className={`${navShow ? 'w-16 ' : 'w-60'} ${navShow ?'hover':null}`}>
            {/*<nav className="w-14 md:w-60">*/}
              <ul className="mt-0 sm:mt-2 md:mt-2">
                {menuItems.map(({ href, title,log,logName }) => (
                  <li className=' px-[0.25rem] sm:pl-[0.50rem] md:p-0' key={title}>
                    <Link href={href}>
                      {/* <div className={`flex p-3 max-md:rounded-full max-md:w-12 md:rounded-r-full h-12 hover:bg-gray-200 max-md:hover:ml-1 cursor-pointer ${router.asPath === href && 'bg-fuchsia-600 text-white'}`}>*/}
                      {/* {console.log(router.asPath , href)} */}
                      <div className={`flex ${navShow ? null:"hover:bg-gray-200 "} p-3 max-md:hover:rounded-full md:rounded-r-full ${router.asPath === href && 'bg-black text-white'}`}>
                        <span className={`flex  md:sekf-center ${navShow ? 'p-3 -mx-1  -my-3 hover:bg-gray-200' : 'pl-2' } rounded-full self-center ${log}`}>{logName}</span>
                        <p className={` ml-7 self-center  ${navShow ? 'hidden': 'inline ' }`}>{title}</p>
                        {/* <span className={`pl-[0.25rem] md:pl-[0.50rem] pr-0 md:pr-10 ${log}`}>{logName}</span><p className="hidden md:inline">{title}</p> */}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          {/* <aside className={`sticky top-16 h-[29rem] w-fit bg-sky-400`}>
            <nav className={`${navShow ? 'w-20' : 'w-60'}`}>  
            {/* <nav className="w-14 md:w-60">   *
              <ul className="mt-0 sm:mt-2 md:mt-2">
                {menuItems.map(({ href, title,log,logName }) => (
                  <li className=' px-[0.25rem] sm:pl-[0.50rem] md:p-0' key={title}>
                    <Link href={href}>
                      {/* <div className={`flex p-3 max-md:rounded-full max-md:w-12 md:rounded-r-full h-12 hover:bg-gray-200 max-md:hover:ml-1 cursor-pointer ${router.asPath === href && 'bg-fuchsia-600 text-white'}`}> */}
                      {/* {console.log(router.asPath , href)} *
                      <div className={`flex hover:bg-gray-200 p-2 max-md:hover:rounded-full md:rounded-r-full ${router.asPath === href && 'bg-black text-white'}`}>
                        <span className={`flex  md:sekf-center px-2 rounded-full self-center hover:bg-red-500 ${log}`}>{logName}</span><p className={` ml-7 self-center ${navShow ? 'hidden': 'inline' }`}>{title}</p>
                        {/* <span className={`pl-[0.25rem] md:pl-[0.50rem] pr-0 md:pr-10 ${log}`}>{logName}</span><p className="hidden md:inline">{title}</p> *
                      </div>
                    </Link>
                  </li >
                ))}
              </ul>
            </nav>
          </aside> */}
          {search ? 
          <SearchIndex/>
          :
          <main className='flex-1'>{children}</main>
          }
        </div>
        
      </div>
      
    </>
  );
}