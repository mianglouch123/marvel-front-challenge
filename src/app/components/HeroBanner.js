import Image from "next/image"
export default function HeroBanner(){

  const FILM_PRODUCTION = 50;
  const GOAL = 100;
  const percentaje = (GOAL * FILM_PRODUCTION) / 100


    return (
        <div className="flex justify-center items-center gap-8 px-4 pt-4">

            <div className="flex flex-col items-center mt-2   gap-2 h-[192px] w-[510px] bg-[#111111]/80 text-white">
             <h2 className="py-4">PROGRESO DE PELICULAS PRODUCIDAS</h2>

             <div className="flex flex-col items-center flex-end gap-2 ">
                <small className="flex flex-col items-center justify-center ml-[330px] pt-2 text-[16px] text-[#C89B3C]">100 Peliculas <small>meta producción</small></small>
             
             <div className="flex absolute  items-center justify-start relative bg-[#ffffff]  h-[30px] w-[400px]  rounded-[1px] border border-[#C89B3C] ">
             {[...Array(10)].map((_, index) => (
            <div key={index} className=" flex relative items-center justify-center  w-[10%] border-2 z-[1000] border-black  h-[40px]"></div>
  ))}
           <div  className={`absolute h-[30px] mb-2 w-[${percentaje}%] translate-y-1 tra bg-[#58dfea]`}></div>
             
             </div>
             <div>
            <p className="text-[16px] text-[#58dfea]">50 producidas</p>
            </div>
             </div>
             </div>

            
             
            
             <div className="relative h-[192px] w-[382px] bg-[#111111]/80 text-white">
             <video height="192" width="382"  autoPlay muted loop>
                <source src="/trailerBanner.mp4" type="video/mp4" />
             </video>
             </div> 

                <div className="flex items-center justify-center relative h-[192px] w-[382px] bg-[#111111]/80 text-white">
             <Image className="object-cover" src={'/guardiansGalaxyBanner.webp'} alt="image-banner" height={192} width={380} />
             </div> 
                 
                

        </div>
    )
}