"use client"

import {MD5} from 'crypto-js'

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from './Modal';
import ButtonCart from './ButtonCart';


export default function MainCarts(){
    

    const [page,setPage] = useState(1)
    const [isOpenModal, setOpenModal] = useState(false)
    const [data ,setData] = useState([])

    const [dataCharacterId, setDataCharacterId] = useState([])


    const LIMIT_PAGE = 5;
    const start = (page - 1) * LIMIT_PAGE;
    const end = start + LIMIT_PAGE 



//   usamos useEffect porque estamos usando un client component , 
//   ya que no podemos usar el async en una funcion que no sea
//   en un server component
 useEffect( () => {

 async function fetchData(){

    const PUBLIC_KEY = process.env.NEXT_PUBLIC_API_KEY;
    const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
    const ts = Date.now();
    const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();


    const res = await fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`, {
   method: 'GET'
   })

if(!res.ok) throw new Error('failed fetch data')

const data = await res.json();

setData(data.data.results)

 }
 fetchData()

 },[])


   const handleSelectedCharacterId = async (e,id) => {
       e.preventDefault()
       setOpenModal(!isOpenModal)

       const PUBLIC_KEY = process.env.NEXT_PUBLIC_API_KEY;
       const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
       const ts = Date.now();
       const hash = MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
        
       const URL = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`
       const res = await fetch(URL);
       if(!res.ok)  throw new Error('failed fetch data for character id')
       
       const data = await res.json()
       setDataCharacterId(data.data.results)
   }


   const truncate = (name) => {
    return name.length > 20  ? name.substr(0,11) : name
    }

   const handlePrev = () => {
    if(page - 1 > 0){
        setPage(page - 1)
    }else{
        setPage(LIMIT_PAGE - 1)
        
    }

   }

   const handleNext = () => {
   if(page >= LIMIT_PAGE -1  || page === LIMIT_PAGE ){
    setPage(1)
   }else{
    setPage(page + 1)
   }
}

 

   

   

    
    return (
        <div className="flex flex-col justify-center items-center pt-8 gap-4">
           <div className="flex items-center justify-center gap-4">

        <Modal isOpenModal={isOpenModal} setOpenModal={setOpenModal} characterById={dataCharacterId}/>
             
           {
            data.slice(start,end).map((character)=>(
                <>
                  <div key={character.id} onClick={(e)=> handleSelectedCharacterId(e,character.id)}  className="cursor-pointer flex bg-[url(/Card.png)] object-cover flex-col items-center pt-6 text-[#FFFFFF] font-normal gap-4 bg-[#3C3C41] h-[448px] w-[248px] rounded-[5px] object-cover">
           

           <div className="flex items-center justify-center gap-4">
          
       
          <Image src={'/Vector (4).png'} alt="right" height={15} width={15} />
          <p>{truncate(character.name)}</p>
          <Image src={'/Vector (5).png'} alt="right" height={15} width={15} />
       
           </div>
       
           <div className="flex items-center pt-12 justify-center">
               <div className="flex cursor-pointer duration-300 gap-3 flex-col transform hover:-rotate-[45deg]  items-center justify-center rounded-[50%] bg-slate-500 relative h-[100px] w-[100px]">
               <Image className="object-cover" src={'/diamond.png'} alt="diamond" height={15} width={15} />
               <Image className="object-fill rounded-[50%]" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="logo avatar" height={100} width={100} />
               <Image className="object-cover" src={'/diamond.png'} alt="diamond" height={15} width={15} />
       
               </div>
       
           </div>
       
           <div className="flex text-[#F0E6D2] flex-col items-center justify-center gap-2 mt-12">
       
               <div className="flex items-center justify-center gap-2 h-[48px] w-[178px] bg-[#1E2328] text-[17px] border border-[#F0E6D2] ">Comic: <span className="font-bold  text-[20px]">{character.comics.available}</span></div>
               <div className="flex items-center justify-center gap-2 h-[48px] w-[178px] bg-[#1E2328] text-[17px] border border-[#F0E6D2] ">Peliculas: <span className="font-bold  text-[20px]">{character.stories.available}</span></div>
       
           </div>
           </div>
                </>

            ))
           }
            
       
           
        </div>


                   <ButtonCart handlePrev={handlePrev} handleNext={handleNext} page={page} limitPage={LIMIT_PAGE} />

    

            

        </div>
    )
}