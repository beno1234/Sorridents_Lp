import Image from 'next/image'

import sorridents from "../../assets/sorridents-clinicas.webp"

import AgendarConsulta from '../ButtonAgendarConsulta/ButtonAgendar'

export default function WhySorridents(){
    return(
        <section className="w-full flex flex-col-reverse justify-around py-20 px-5 lg:px-[15%] lg:flex-row">
            <div className="w-full flex flex-col items-center lg:w-1/2 lg:items-start text-white">
                <h2 className="text-[34px] font-bold">Porque a Sorridents?</h2>
                <p className="my-3 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatem reprehenderit dicta culpa pariatur provident! Iusto ducimus nisi ea tempore soluta, quisquam fugit porro saepe exercitationem omnis quam earum autem?</p>
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima pariatur mollitia hic ullam deserunt exercitationem praesentium aliquid quae nisi aspernatur sit, doloribus vitae architecto ut ipsa. Officiis incidunt ducimus numquam.</p>
                <AgendarConsulta />
            </div>
            <Image
                src={sorridents}
                alt="Landscape picture"
                width={500}
                height={400}
                className="rounded mb-5"
            />
        </section>
    )
}