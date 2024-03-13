import Image from "next/image" 
import { useState } from "react"


export default function SearchIndex () {
    const [more,setMore] = useState(false)
console.log(more)
    return(
        <div className="flex h-full flex-col justify-center items-center w-full">
            <div className="flex flex-col justify-center self-center mt-10 shadow-[0px_0px_3px_0.1px_gray]">
                
                <div className="w-auto h-auto">
                    <div>
                        <p className="p-2 font-semibold">Types</p>
                    </div>
                    <div className="flex">
                        <div className="flex flex-col mr-1 size-36 bg-blue-600">
                            <span className="flex justify-center h-28"><Image className="" src={require('./asets/list_.svg')} alt='Lists' width={40} height={40}/></span>
                            <p className="text-white text-center text-sm">Lists</p>
                        </div>
                        <div className="flex flex-col mr-1 size-36 bg-blue-600">
                            {/* <span className="flex justify-center h-28"><Image className="" src={require('./asets/image.svg')} style={{textColor:'white'}} alt='Lists' width={40} height={40}/></span> */}
                            <span className="flex justify-center grid content-center h-28">
                                <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" fill='white'>
                                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z"/>
                                </svg>
                            </span>
                            <p className="text-white text-center text-sm">Images</p>
                        </div>
                        <div className="flex flex-col mr-1 size-36 bg-blue-600">
                            <span className="flex justify-center h-28"><Image className="" src={require('./asets/ink_pen.svg')} alt='Lists' width={40} height={40}/></span>
                            <p className="text-white text-center text-sm">Drawings</p>
                        </div>
                        <div className="flex flex-col size-36 bg-blue-600">
                            <span className="flex justify-center h-28"><Image className="" src={require('./asets/link.svg')} alt='Lists' width={40} height={40}/></span>
                            <p className="text-white text-center text-sm">URLs</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center self-center my-10 shadow-[0px_0px_3px_0.1px_gray]">
                
                <div className="w-auto h-auto">
                    <div className="flex justify-between">
                        <p className="p-2 font-semibold">Things</p>
                        <div className="bg-yellow-">
                            <button className=" m-[2px] px-5  py-2 rounded hover:bg-gray-100 text-blue-600 text-sm" onClick={()=>{setMore(!more)}}>{more?'Less' : 'More'}</button>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex mb-1">
                            <div className="flex flex-col mr-1 size-36 bg-gray-100">
                                <span className="flex justify-center h-28"><Image className="" src={require('./asets/book.svg')} alt='Lists' width={40} height={40}/></span>
                                <p className="text-black text-center text-sm">Books</p>
                            </div>
                            <div className="flex flex-col mr-1 size-36 bg-gray-100">
                                <span className="flex justify-center h-28"><Image className="" src={require('./asets/restaurant.svg')} style={{textColor:'white'}} alt='Lists' width={40} height={40}/></span>
                                <p className="text-black text-center text-sm">Food</p>
                            </div>
                            <div className="flex flex-col mr-1 size-36 bg-gray-100">
                                <span className="flex justify-center h-28"><Image className="" src={require('./asets/theaters.svg')} alt='Lists' width={40} height={40}/></span>
                                <p className="text-black text-center text-sm">Flims</p>
                            </div>
                            <div className="flex flex-col size-36 bg-gray-100">
                                <span className="flex justify-center h-28"><Image className="" src={require('./asets/headphone.svg')} alt='Lists' width={40} height={40}/></span>
                                <p className="text-black text-center text-sm">Music</p>
                            </div>
                        </div>
                        <div className={`flex ${more? 'inline' : 'hidden'}`}>
                            <div className="flex flex-col mr-1 size-36 bg-gray-100">
                                <span className="flex justify-center h-28"><Image className="" src={require('./asets/location.svg')} alt='Lists' width={40} height={40}/></span>
                                <p className="text-black text-center text-sm">Places</p>
                            </div>
                            <div className="flex flex-col mr-1 size-36 bg-gray-100">
                                <span className="flex justify-center h-28"><Image className="" src={require('./asets/flightsmode.svg')} alt='Lists' width={40} height={40}/></span>
                                <p className="text-black text-center text-sm">Travel</p>
                            </div>
                            <div className="flex flex-col size-36 bg-gray-100">
                                <span className="flex justify-center h-28"><Image className="" src={require('./asets/tv.svg')} alt='Lists' width={40} height={40}/></span>
                                <p className="text-black text-center text-sm">TV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}