import { useState } from "react"
import Image from "next/image"



export default function TakeNotes({paper,setPaper}) {
    const [note,setNote] = useState(false)
    const [titleArea,setTitleArea] = useState('')
    const [desArea,setDesArea] = useState('')

    // const [cardData,setCardData] = useState([])

    // console.log(note)

    const handleTitle = (event) => { 
        setTitleArea(event.target.value)
    }
    const handleDes = (event) => {
        setDesArea(event.target.value)
    }
        
    const addArray = () => {
        setNote(false)
        setPaper(paperItem => [...paperItem,{title:titleArea,descreption:desArea}])
    }
    // console.log('cardData array',cardData);
    // console.log('descreption content',desArea);
    return(
        <>
            <div className="flex justify-center ">
                <div className={`grow-0 max-sm:grow max-sm:w-[20rem] shadow-[0px_0px_5px_0.1px_gray] my-14 justify-between rounded-lg hover:text ${note?'w-[36rem] h-[8rem]':'w-[36rem] h-[45px] p-3'}`}  onClick={()=>note? null : setNote(!note)}>
                {note?
                    <div className="flex flex-col grow">
                        <div className="px-3 pt-3">
                            <div className="flex justify-between">
                                <input type="text" value={titleArea} onChange={handleTitle} className="focus:outline-none w-full snap-none appearance-none resize-none h-10" placeholder="Title" rows={1}></input>
                                
                                <span className="material-symbols-outlined m- p-2 hover:bg-gray-200 hover:text-black rounded-full h-10">push_pin</span>
                            </div>
                        </div>
                        <div className="grow px-3 py-1">   
                            <div className="grow">
                                <input type='text' value={desArea} onChange={handleDes} className="focus:outline-none w-full sm:text-sm snap-none appearance-none resize-none" placeholder="Take a note..." rows={1}></input>
                                {/* <p>{desArea}</p> */}
                            </div> 
                        </div>
                        <div className="flex justify-between">
                            <div className="space-x-[0.3rem] m-1  *:inline-flex">
                                <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2  rounded-full" src={require('./asets/add_alert.svg')} alt="bell" width={15} height={20}/></a>
                                <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2  rounded-full" src={require('./asets/person_add.svg')} alt="bell" width={15} height={20}/></a>
                                <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2  rounded-full" src={require('./asets/palette.svg')} alt="bell" width={15} height={20}/></a>
                                <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2  rounded-full" src={require('./asets/image.svg')} alt="bell" width={15} height={20}/></a>
                                <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2  rounded-full" src={require('./asets/archive_.svg')} alt="bell" width={15} height={20}/></a>
                                <a href='\'><Image className="hover:bg-gray-200 w-[2.1rem] p-2  rounded-full" src={require('./asets/more_vert.svg')} alt="bell" width={15} height={20}/></a>
                                <a href='\'><Image className="hover:bg-gray-200 w-8 h-8 p-2  rounded-full cursor-no-drop" src={require('./asets/undo_.svg')} alt="bell" width={5} height={10}/></a>
                                <a href='\'><Image className="hover:bg-gray-200 w-8 h-8 p-2  rounded-full cursor-no-drop" src={require('./asets/redo.svg')} alt="bell" width={10} height={15}/></a>
                            </div>
                            <div className="h-9 flex w-20 text-center mx-2 justify-center item-center rounded hover:bg-gray-100 font-normel cursor-pointer" type='button'  
                            onClick={addArray}>
                            {/* onClick={()=>setNote(false)}> */}
                                <button type="button" >Close</button>
                            </div>
                        </div>    
                    </div>
                    :
                    <div className="flex justify-between">
                        <div className=" w-full">
                            <p>Take a note...</p>
                        </div>
                        <div className="flex -m-3 ">
                            <a><span class="material-symbols-outlined mx-1 p-2.5 hover:bg-gray-200 hover:text-black rounded-full">check_box</span></a>
                            <a><span class="material-symbols-outlined mx-1 p-2.5 hover:bg-gray-200 hover:text-black rounded-full">brush</span></a>
                            <a><span class="material-symbols-outlined mx-1 p-2.5 hover:bg-gray-200 hover:text-black rounded-full">image</span></a>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </>
    )
}