import Image from 'next/image'

import estetica from "../../assets/tratamentos/estetica-sorridents-1.webp"
import orto from "../../assets/tratamentos/ortodontis-sorridents-1.webp"
import geral from "../../assets/tratamentos/clinico-geral-sorridents-1.webp"
import implante from "../../assets/tratamentos/implantes-sorridents-1.webp"
import outros from "../../assets/tratamentos/tratamentos-sorridents-1.webp"
import odontopediatria from "../../assets/tratamentos/odontopediatria-sorridents-1.webp"



export default function Services(){
    return (
        <section className="w-full flex flex-col-reverse justify-around py-20  px-5 lg:px-[15%] lg:flex-row">
            <div className="flex flex-wrap justify-around gap-10">
                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={estetica}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Estética</h3>
                    <p>Aqui você encontra nossos tratamentos estéticos que vão lhe garantir um sorriso mais bonito, brilhante e com muita autoestima</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={orto}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Ortodontia</h3>
                    <p>Encontre tratamentos ortodônticos que vão proporcionar uma mastigação adequada e um sorriso mais alinhado</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={geral}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Clínico Geral</h3>
                    <p>Descubra o que nossos tratamentos de limpeza, restauração e muito mais podem fazer pelo seu sorriso</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={implante}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Implantes</h3>
                    <p>Perdeu um ou mais dos seus dentes naturais? Conheça nossos tratamentos de implantes dentários e recupere o seu sorriso</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={outros}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Outros Tratamentos</h3>
                    <p>Encontre aqui os nossos melhores tratamentos odontológicos para você sorrir sem dor e sem receio  </p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={odontopediatria}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Odontopediatria</h3>
                    <p>Tratamentos específicos realizados por dentistas pediatras da melhor qualidade para garantir a saúde bucal do seu filho </p>
                </div>
                
            </div>
        </section>
    )
}