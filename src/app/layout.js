
import './globals.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         

      <body className={inter.className}>
        
      <div className='h-[100px] px-4 w-full bg-[#000000] bottom-2 border-bottom-[#3C3C41] flex items-center justify-around gap-4
      '>
       <div className='flex cursor-pointer items-center justify-center mr-[500px] gap-3'>
       <div>
        <Image src={"/LOGO MARVEL.png"} width={250} height={40} alt="logo marvel"></Image>
        </div>

       <div className=' font-[500] px-10 flex gap-6 items-center justify-center  text-[17px] text-[#FFFFFF]'>
       <div className='relative flex group flex-col items-center justify-center  hover:bg-gradient-to-b from-gray-900 via-gray-800 to-transparent hover:to-gray-900 transition-colors duration-300  h-[100px] w-ful hover:text-[#C89B3C] transition-colors duration-300 cursor-pointer'>
         <Image className='absolute top-0 hidden group-hover:inline transition duration-300' src={"/TopArrow.png"} height={19} width={39} alt='top-arrow'  />
          <h1 className=''>HOME</h1>
          </div>
       
          <div className='relative flex group flex-col items-center justify-center  hover:bg-gradient-to-b from-gray-900 via-gray-800 to-transparent hover:to-gray-900 transition-colors duration-300  h-[100px] w-ful hover:text-[#C89B3C] transition-colors duration-300 cursor-pointer'>
         <Image className='absolute top-0 hidden group-hover:inline transition duration-300' src={"/TopArrow.png"} height={19} width={39} alt='top-arrow'  />
          <h1 className=''>PERSONAJE</h1>
          </div>
       </div>



       
       </div>

       <div className='flex cursor-pointer gap-6 items-center pl-[250px] justify-center object-cover'>
        <Image src={"/notification.png"} alt='notification' height={15} width={15}></Image>
        <Image className='flex items-center justify-center relative' src={"/settings.png"} alt='setting' height={15} width={15}></Image>
       </div>

       <div>

       </div>
      
      </div>

      <div>{children}</div>
      </body>
    </html>
  )
}
