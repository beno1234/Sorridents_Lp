import  logo  from "../../assets/sorridents.svg"
import Image from 'next/image'


export const Section1 = () => {
  return (
    <div className="flex items-center justify-center bg-section-1 h-full text-white">
      <div className="w-12/12 lg:w-7/12 flex flex-col gap-5 items-center lg:items-start">
        <Image src={logo} alt="Sorridents" className="w-9/12  lg:w-4/12"/>
        <div className="flex items-center lg:items-start flex-col gap-10 w-11/12 lg:w-7/12 ">
          <h1 className="font-sans lg:text-6xl lg:text-left text-5xl font-bold text-center">Sorriso de <strong className="">1ª<br/> para gente</strong> de verdade</h1>
          <p className="font-semibold lg:text-2xl text-center lg:text-left">Pare de uma vez por todas ter medo de sorrir com nossos implantes dentários em até 48 horas.  São 2900 implantes instalados e aprovados.</p>
          <button className="bg-one hover:opacity-95 text-white font-bold py-4 px-4 rounded w-10/12 lg:w-10/12 ">Agendar avaliação</button>
        </div>
      </div>
    </div>
  )
}
