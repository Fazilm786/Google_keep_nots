import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";


export default function NavBar({setNavShow,navShow,viewCard,setViewCard,search,setSearch,grid,setGrid}){
    console.log(viewCard)
    return (
        <>
            <div className="flex w-auto bg-sky-00 sticky top-0 z-30 border-b-[0.1rem] h-16 max-sm:h-14 max-sm:p-1 p-2 bg-white ">
                <div className="flex w-[14.5rem] max-sm:grow max-sm:w-[15rem]">
                    <button type='button' onClick={()=>{setNavShow(!navShow)}}><Link href='/' className=''><span className="material-symbols-outlined hover:bg-gray-200 rounded-full p-3">menu</span></Link></button>
                    <a href='#' className='flex'><Image className="my-1 mx-1" src='/asets/icon.png' alt = 'icon' width={36} height={6}/><p className='text-[#5f6368] text-xl font-medium relative top-2 ml-2'>Keep</p></a>
                </div>
                <div className="flex grow">
                    <div className="flex grow pl-2.5 pr-[1.9rem]">
                        <a href="#" className="grow flex max-lg:hidden">
                            <span className="material-symbols-outlined hover:bg-gray-200 rounded-full m-1 p-2 w-[2.5rem] absolute left-[15.9rem]">search</span>
                            <input onClick={()=>{setSearch(true)}} className="w-full h-full rounded-lg px-14 bg-[#f1f3f4] focus:bg-white focus:outline-none focus:shadow-[0.3px_0.3px_2px_0.5px_gray] " placeholder="Search" />
                            {setSearch ?
                                    <span onClick={()=>setSearch(false)} className="material-symbols-outlined size-10 p-2 rounded-full hover:bg-gray-200 relative right-12 top-1">close</span>
                                // null
                             :
                                // null
                                <span onClick={()=>setSearch(false)} className="material-symbols-outlined size-10 p-2 rounded-full hover:bg-gray-200 relative right-12 top-1">close</span>

                            }
                        </a>
                    </div>
                        <div className="flex ">
                        <a href='#' className='lg:hidden'><span className="material-symbols-outlined hover:bg-gray-200 rounded-full m-1 p-2 w-[2.5rem]">search</span></a>
                        <a href='\' className=''><span className="material-symbols-outlined hover:bg-gray-200 hover:text-black rounded-full p-3">refresh</span></a>          
                        <button type='button' onClick={()=>{setGrid(!grid)}} className='max-sm:hidden'><span className="material-symbols-outlined hover:bg-gray-200 rounded-full hover:text-black p-3">dns</span></button>
                        <a href='\' className=''><span className="material-symbols-outlined hover:bg-gray-200 rounded-full hover:text-black p-3">settings</span></a>
                    </div>
                </div>
                <div className="max-md:w-[5.8rem] w-[8.4rem] flex justify-end">
                    <a href='\' className=''><span className="material-symbols-outlined m-1 p-2 hover:bg-gray-200 rounded-full">apps</span></a>
                    <a href='\' className='hover:bg-gray-200 rounded-full size-10 max-md:m-0 max-md:mt-1 m-1'><Image className='bg-red-400 rounded-full mt-[0.2rem] ml-1' src={require('./asets/profile.png')} alt = 'profile' width={32} height={32}/></a>
                </div>
            </div>
       </>
    )
}