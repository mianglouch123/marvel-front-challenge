import Image from "next/image"

 function ButtonCart({handlePrev,handleNext, page , limitPage}){

    
    return (
        <div className="flex justify-center items-center px-3 pt-4 gap-3">
        <div className="bg-[#C89B3C] cursor-pointer h-[34px] w-[34px] flex justify-center items-center  rounded-[50%]" onClick={()=> handlePrev()}>
            <Image src={'/prevArrow.png'}  height={15} width={15} alt='prev-arrow' />
        </div>
        <div>
            <span className='text-[#C89B3C] text-[20px]'>{page} / {limitPage - 1}</span>
        </div>
        <div className="bg-[#C89B3C] cursor-pointer h-[34px] w-[34px] flex justify-center items-center   rounded-[50%]" onClick={()=>handleNext()}>
        <Image src={'/nextArrow.png'}  height={15} width={15} alt='next-arrow' />

        </div>

    </div>

    )
}

export default ButtonCart