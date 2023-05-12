import implante from "../../assets/implante.jpg"
import Image from 'next/image'

export default function WhySorridents(){
    return(
        <section className="w-full flex flex-col-reverse justify-around py-20 px-5 lg:px-[15%] lg:flex-row">
            <div className="w-full flex flex-col items-center lg:w-1/2 lg:items-start text-white">
                <h2 className="text-[34px] font-bold">Porque a Sorridents?</h2>
                <p className="my-3 font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis voluptatem reprehenderit dicta culpa pariatur provident! Iusto ducimus nisi ea tempore soluta, quisquam fugit porro saepe exercitationem omnis quam earum autem?</p>
                <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima pariatur mollitia hic ullam deserunt exercitationem praesentium aliquid quae nisi aspernatur sit, doloribus vitae architecto ut ipsa. Officiis incidunt ducimus numquam.</p>
                <button className="py-5 px-10 mt-5 rounded shadow-2xl btn btn-hover bg-gradient-to-r from-cyan-500 to-blue-500 font-bold">Agendar Avaliação</button>
            </div>
            <Image
                src={implante}
                alt="Landscape picture"
                width={400}
                height={400}
                className="rounded mb-5"
            />
        </section>
    )
}