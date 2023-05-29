import HeroBanner from "./components/HeroBanner"
import MainCarts from "./components/MainCarts"

export default function Home() {
  return (
    <div className="h-[800px] flex flex-col w-full py-4 bg-[url(/Fondo.png)] object-cover
    ">
  <HeroBanner />
  <MainCarts />

  </div>
  )
}
