import TakeNotes from "./takeNotes";
import Image from "next/image";

export default function Reminder (){
    return (
        <>
            <div>
                <TakeNotes/>
                <div className="flex flex-col h-[60vh] self-center justify-center align-center">
                    <Image className="self-center" src={require('./asets/notifications.svg')} alt="bell" width={125} height={125}/>
                    <p className="self-center text-2xl">Notes with upcoming reminders appear here</p>
                </div>
            </div>
        </>
    )
}