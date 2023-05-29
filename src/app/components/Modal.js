'use client'

import Image from "next/image"

export default function Modal({isOpenModal, setOpenModal , characterById}){
    
    return (
        <div className={`${isOpenModal ?'inline' : 'hidden'
    } h-[500px] w-[410px] rounded-[5px] absolute flex flex-col gap-4 items-center z-50 bg-[#000000] text-[#C89B3C] z-50`}>
       
       <span onClick={()=> setOpenModal(!isOpenModal)} className="cursor-pointer z-50 flex items-end py-2 mr-4 absolute  right-0 justify-end text-[17px] text-black ">X</span>
       
       {characterById.length > 0 && characterById.map((character) => (
        <div className="flex items-center justify-center flex-col gap-4 " key={character.id}>

            <Image className="object-cover " src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="logo avatar" height={500} width={410} />
             <p className="py-8 font-bold bg-slate-900/60 z-50 w-full flex items-center justify-center absolute bottom-0 ">{character.name}</p>
g        </div>
       ))   
    }
    </div>

    )
}