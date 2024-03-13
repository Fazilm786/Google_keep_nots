import Image from "next/image"
import TakeNotes from "./takeNotes"
import { useState } from "react"
import Tooltip from "./tooltip"
import icon from '../public/icon.png'



export default function NotePaper(){
    const [bgColor,setBgColor] = useState(false)
    const [dots,setDots] = useState(false)
    const [viewCard,setViewCard] = useState(false)
    const [color,setColor] = useState()
    const [cardImage,setCardImage] = useState()
    const [pin,setPin] = useState ([])
    const [nextPaper,setNextPaper] =useState('')
    const [paper,setPaper] = useState([])
    // const paper = [
    //     {
    //         title : 'Card 1',
    //         descreption : `Were going to use use use Emmet abbreviation to the test and publicly publishes all test results to promote Internet research. 
    //         Published information includes your IP address and test results, but doesn’t include any other
    //         information about you as an Internet generate lorem ipsum`,
    //         cardColor: color,
    //         cardImg :cardImage ,
    //         id : 0 

    //     },]
    //     {
    //         title : 'Cards 2',
    //         descreption : 'Were going to use use Emmet abbreviation to generate lorem ipsum',
    //         cardColor: color,
    //         cardImg :cardImage ,
    //         id : 1
    //     },
    //     {
    //         title : 'Cards 3',
    //         descreption : `To run the test, youll be connected to Measurement Lab (M-Lab) and your IP address
    //                         will be shared with them and processed by them in accordance with their privacy policy.
    //                         M-Lab conducts the test and publicly publishes all test results to promote Internet research. 
    //                         Published information includes your IP address and test results, but doesn’t include any other
    //                         information about you as an Internet user Were going to use use Emmet abbreviation to generate
    //                         lor ype lorem in the editor  VS Code supportem ipsum`,
    //         cardColor: color,
    //         cardImg :cardImage ,
    //         id : 2,
    //     },
    //     {
    //         title : 'Cards 4',
    //         descreption : 'Were going to use use Emmet abbreviation to generate lorem ipsum',
    //         cardColor: color,
    //         id : 3,
    //     },
    //     {
    //         title : 'Cards 5',
    //         descreption :  `youll be connected to Measurement Lab (M-Lab) and your IP address
    //         will be shared with them Were going to usype lorem in the editor  VS Code supportype lorem in the editor  VS Code supportype 
    //         lorem in the editor  VS Code supporte use Emmet abbreviation to generate lorem ipsum`,
    //         cardColor: color,
    //         id : 4 ,
    //     },
    //     {
    //         title : 'Cards 6',
    //         descreption : 'Were going to use use Emmet abbreviation to generate lorem ipsum',
    //         cardColor: color,
    //         id : 5 ,
    //     },
    //     {
    //         title : 'Cards 7',
    //         descreption : 'Were going to use use Emmet abbreviation to generate lorem ipsum',
    //         cardColor: color,
    //         id : 6,
    //     }
    // ]
    console.log('setPin val',nextPaper);
    // console.log('Paper',paper);
    return(
        <>
          <TakeNotes setPaper={setPaper} paper={paper}/>  
            <div className="flex justify-center">
                <div className="flex items-start place-contnt-center flex-wrap   " setViewCard={setViewCard} viewCard={viewCard}>
                {console.log('value of pin useState',pin)}
                {/* {console.log('onclick paper storeValue nextPaper',nextPaper)} */}
                    <div className="flex flex-col flex-wrap">
                        <div className={`${pin.length === 0 ? 'hidden' : 'inline'}`}>
                            <p className="text-xs text-[#5f6368] font-semibold pl-7">PINNED</p>
                        </div>
                        <div className="flex flex-wrap items-start place-content-center *:m-2">
                            {pin.map(({title,descreption,cardColor,id},index)=>{
                                // const unPin = () => {
                                //     // paper.splice(paper[index],1)  

                                //     setPin(pin.splice(pin[index],1))
                                // }
                                // console.log('unPin ka',unPin);


                                // const unPin = setPin(pin.filter(function(letter){
                                //     return letter !== pin[index]
                                // }))
                                // console.log('what',unPin);
                                return(
                                    <>
                                        <div className={`hand max-md:w-fit flex flex-col justify-between border-[1px] border-gray-300 rounded-lg hover:shadow-[0px_0px_3px_0.1px_gray] px-[16px] py-[12px] w-[239px] `} style={{backgroundColor:cardColor,}} key={title}>
                                                <div className="">
                                                    <div className=''>
                                                        <Image className="foot hidden -mt-[1.5rem] -ml-[1.6rem] rounded-full"   src={require('./asets/check.svg')} alt="check" width={25} height={25}/>
                                                    </div>
                                                </div>
                                                <div className=""> 
                                                    <button type="button" className="float-right size-10"><Image className="hover:text-red-300 float-right hover:bg-gray-200 rounded-full size-10 p-2 foot hidden"
                                                            onClick={()=>setPin(pin.filter(function(letter){
                                                                return letter !== pin[index]
                                                            }))}
                                                            
                                                        src={require('./asets/keep_check.svg')} width={25} height={25} alt="pin"/></button>
                                                    <div className="">
                                                        <p className="font-semibold">{title}</p>
                                                    </div>
                                                    <div className="mt-5">
                                                        <p className="">{descreption}</p>
                                                    </div>
                                                </div>
                                                <div className="space-x-[0.3rem] p-0 -mx-3 h-10 pt-3 *:inline-flex">
                                                    <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/add_alert.svg')} alt="bell" width={15} height={20}/></a>
                                                    <div className="">
                                                        <Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/person_add.svg')} alt="bell" width={15} height={20}/>
                                                    </div>
                                                    <div type="button"className='flex' >
                                                        <div className="" onClick={()=> {setBgColor(id)}}>
                                                            <Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/palette.svg')} alt="bell" width={15} height={20}/>
                                                        </div>
                                                        <div className={`flex flex-col absolute bg-white rounded-xl shadow-[0px_0px_6px_0.1px_gray] w-auto h-auto z-20  ${bgColor===id ? 'inline' : 'hidden'}`}>
                                                            <div className="flex h-12 *:m-1 mt-2 mx-2">
                                                                <div className="flex size-8 bg-white rounded-full border-2 hover:border-black" type='button' onClick={() => setColor('white')}><Image className="self-center ml-1" src={require('./asets/format_color.svg')} width={18} height={18} alt="bg-color"/></div>
                                                                <div className="size-8 bg-[#bcebbf] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#bcebbf')}></div>
                                                                <div className="size-8 bg-[#f0c9c9] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#f0c9c9')}></div>
                                                                <div className="size-8 bg-[#f0e2c9] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#f0e2c9')}></div>
                                                                <div className="size-8 bg-[#c9f0d5] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#c9f0d5')}></div>
                                                                <div className="size-8 bg-[#90f5eb] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#90f5eb')}></div>
                                                                <div className="size-8 bg-[#e499ff] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#e499ff')}></div>
                                                                <div className="size-8 bg-[#c9cef0] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#c9cef0')}></div>
                                                                <div className="size-8 bg-[#db6edb] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#db6edb')}></div>
                                                                <div className="size-8 bg-[#f0c9d1] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#f0c9d1')}></div>
                                                                <div className="size-8 bg-[#aef5f1] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#aef5f1')}></div>
                                                                <div className="size-8 bg-[#faf9be] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#faf9be')}></div>
                                                            </div>
                                                            <hr/>
                                                            <div className="flex p-2 *:mx-1">
                                                                <div className="size-10 rounded-full border-2 hover:border-black p-1"><span class="material-symbols-outlined">hide_image</span></div>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" onClick={()=>{setCardImage(icon)}} src={require('./asets/bg-images.jpeg')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (1).jpeg')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (2).jpeg')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (3).jpeg')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (4).jpeg')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-image(5).jpg')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-image(6).jpg')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images(7).png')} width={15} height={15}/>
                                                                <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (8).png')} width={15} height={15}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/image.svg')} alt="bell" width={15} height={20}/></a>
                                                    <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/archive_.svg')} alt="bell" width={15} height={20}/></a>
                                                    <div className="">
                                                        <button type='button' onClick={()=>setDots(id)} >
                                                            <Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full" src={require('./asets/more_vert.svg')} alt="bell" width={15} height={20}/>
                                                        </button>
                                                        <div className={`flex flex-col bg-white border rounded-md shadow-[0px_0px_5px_0.1px_gray] *:text-left  *:pl-5 *:p-1 py-2 *:text-sm ${dots === id ? 'inline' : 'hidden'}`}>
                                                            <button type="button" className="hover:bg-gray-200">Delete note</button>
                                                            <button type="button" className="hover:bg-gray-200">Add lable</button>
                                                            <button type="button" className="hover:bg-gray-200">Add drowing</button>
                                                            <button type="button" className="hover:bg-gray-200">Make a copy</button>
                                                            <button type="button" className="hover:bg-gray-200">Show tick boxes</button>
                                                            <button type="button" className="hover:bg-gray-200">Copy to Google Docs</button>
                                                            <button type="button" className="hover:bg-gray-200">Virsion history</button>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                <div className="flex flex-wrap items-start mt-14">
                    <div className={`${pin.length === 0 ? 'hidden' : 'inline'} `}>
                        <p className="text-xs text-[#5f6368] font-semibold pl-7 ">OTHERS</p>
                    </div>
                    <div className="flex flex-wrap items-start place-content-center *:m-2">
                        {paper.map(({title,descreption,cardColor,id},index)=>{
                            const pinClick = () => {
                                setPin(pinValue => [paper[index],...pin])

                                // setNextPapr (paper.pop()) 
                                // paper.splice(paper[index],1)  
                                console.log('onclickFunction',pin)
                                // console.log('onclick paper storeValue',nextPaper)
                                console.log('paper',paper);

                            }
                            // const removeClick = (indexRemove) => {
                            // }
                        {/* {paper.map((item,index)=>{ */}
                            return(
                                
                            <div className={`hand max-md:w-fit flex flex-col justify-between border-[1px] border-gray-300 rounded-lg hover:shadow-[0px_0px_3px_0.1px_gray] px-[16px] py-[12px] w-[239px] `} style={{backgroundColor:cardColor,}} key={title}>
                                    <div className="">
                                        <div className=''>
                                            <Image className="foot hidden -mt-[1.5rem] -ml-[1.6rem] rounded-full"   src={require('./asets/check.svg')} alt="check" width={25} height={25}/>
                                        </div>
                                        <div className="">
                                            
                                            <button type="button" className="float-right size-10"><Image className="hover:text-red-300 float-right hover:bg-gray-200 rounded-full size-10 p-2 hidden foot"     
                                                onClick={pinClick} src={require('./asets/keep.svg')} width={25} height={25} alt="pin"/></button>
                                                <div className="">
                                                    <p className="font-semibold">{title}</p>
                                                </div>
                                                <div className={`mt-5`}>
                                                    <p className="">{descreption}</p>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="space-x-[0.3rem] p-0 -mx-3 h-10 pt-3 *:inline-flex">
                                        <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/add_alert.svg')} alt="bell" width={15} height={20}/></a>
                                        <div className="">
                                            <Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/person_add.svg')} alt="bell" width={15} height={20}/>
                                        </div>
                                        <div type="button"className='flex' >
                                            <div className="" onClick={()=> {setBgColor(id)}}>
                                                <Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/palette.svg')} alt="bell" width={15} height={20}/>
                                            </div>
                                            <div className={`flex flex-col absolute bg-white rounded-xl shadow-[0px_0px_6px_0.1px_gray] w-auto h-auto z-20  ${bgColor===id ? 'inline' : 'hidden'}`}>
                                                <div className="flex h-12 *:m-1 mt-2 mx-2">
                                                    <div className="flex size-8 bg-white rounded-full border-2 hover:border-black" type='button' onClick={() => setColor('white')}><Image className="self-center ml-1" src={require('./asets/format_color.svg')} width={18} height={18} alt="bg-color"/></div>
                                                    <div className="size-8 bg-[#bcebbf] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#bcebbf')}></div>
                                                    <div className="size-8 bg-[#f0c9c9] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#f0c9c9')}></div>
                                                    <div className="size-8 bg-[#f0e2c9] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#f0e2c9')}></div>
                                                    <div className="size-8 bg-[#c9f0d5] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#c9f0d5')}></div>
                                                    <div className="size-8 bg-[#90f5eb] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#90f5eb')}></div>
                                                    <div className="size-8 bg-[#e499ff] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#e499ff')}></div>
                                                    <div className="size-8 bg-[#c9cef0] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#c9cef0')}></div>
                                                    <div className="size-8 bg-[#db6edb] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#db6edb')}></div>
                                                    <div className="size-8 bg-[#f0c9d1] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#f0c9d1')}></div>
                                                    <div className="size-8 bg-[#aef5f1] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#aef5f1')}></div>
                                                    <div className="size-8 bg-[#faf9be] rounded-full hover:border-2 border-black" type = 'button' onClick={() => setColor('#faf9be')}></div>
                                                </div>
                                                <hr/>
                                                <div className="flex p-2 *:mx-1">
                                                    <div className="size-10 rounded-full border-2 hover:border-black p-1"><span class="material-symbols-outlined">hide_image</span></div>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" onClick={()=>{setCardImage(icon)}} src={require('./asets/bg-images.jpeg')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (1).jpeg')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (2).jpeg')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (3).jpeg')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (4).jpeg')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-image(5).jpg')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-image(6).jpg')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images(7).png')} width={15} height={15}/>
                                                    <Image className="size-10 bg-red-400 rounded-full hover:border-2 border-black" src={require('./asets/bg-images (8).png')} width={15} height={15}/>
                                                </div>
                                            </div>
                                        </div>
                                        <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/image.svg')} alt="bell" width={15} height={20}/></a>
                                        <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full " src={require('./asets/archive_.svg')} alt="bell" width={15} height={20}/></a>
                                        <div className="">
                                            <button type='button' onClick={()=>setDots(id)} >
                                                <Image className="hover:bg-gray-200 w-[2.1rem] p-2 foot hidden rounded-full" src={require('./asets/more_vert.svg')} alt="bell" width={15} height={20}/>
                                            </button>
                                            <div className={`flex flex-col bg-white border rounded-md shadow-[0px_0px_5px_0.1px_gray] *:text-left  *:pl-5 *:p-1 py-2 *:text-sm ${dots === id ? 'inline' : 'hidden'}`}>
                                                <button type="button" className="hover:bg-gray-200">Delete note</button>
                                                <button type="button" className="hover:bg-gray-200">Add lable</button>
                                                <button type="button" className="hover:bg-gray-200">Add drowing</button>
                                                <button type="button" className="hover:bg-gray-200">Make a copy</button>
                                                <button type="button" className="hover:bg-gray-200">Show tick boxes</button>
                                                <button type="button" className="hover:bg-gray-200">Copy to Google Docs</button>
                                                <button type="button" className="hover:bg-gray-200">Virsion history</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>    
                </div>
            </div>    
            </div>
            <div className="flex justify-center items-center h-screen">
                <Tooltip text="This is a tooltip">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Hover me</button>
                    <p>laksdjfh</p>
                </Tooltip>
                <p>asdf</p>
            </div>
        </>
    )
}