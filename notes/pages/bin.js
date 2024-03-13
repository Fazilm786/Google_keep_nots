import Image from 'next/image'


export default function Bin (){
    return (
        <>
            <div>
                <p className='italic text-lg text-center mt-10'>Notes in the Recycle Bin are deleted after 7 days.</p>
                <div className="flex flex-col h-[60vh] self-center justify-center align-center">
                    <Image className="self-center" src={require('./asets/delete.svg')} alt="bell" width={125} height={125}/>
                    <p className="self-center text-2xl">No notes in Recycle Bin</p>
                </div>
            </div>
        </>
    )
}