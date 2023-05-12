import Image from 'next/image'

import implante from "../../assets/implante.jpg"


export default function Services(){
    return (
        <section className="w-full flex flex-col-reverse justify-around py-20  px-5 lg:px-[15%] lg:flex-row">
            <div className="flex flex-wrap justify-around gap-10">
                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={implante}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Implante Dentario</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elitriatur beatae odio quia voluptatem nisi cum tenetur amet eum qui.</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={implante}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Implante Dentario</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elitriatur beatae odio quia voluptatem nisi cum tenetur amet eum qui.</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={implante}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Implante Dentario</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elitriatur beatae odio quia voluptatem nisi cum tenetur amet eum qui.</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={implante}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Implante Dentario</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elitriatur beatae odio quia voluptatem nisi cum tenetur amet eum qui.</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={implante}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Implante Dentario</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elitriatur beatae odio quia voluptatem nisi cum tenetur amet eum qui.</p>
                </div>

                <div className='p-2 text-white bg-[#2f2f2f39] shadow-2xl to-blue-500 max-w-[280px] rounded backdrop-blur-sm'>
                    <Image
                        src={implante}
                        alt="Landscape picture"
                        width={280}
                        height={300}
                        className="rounded mb-5"
                    />
                    <h3 className='font-semibold text-[28px] mb-4'>Implante Dentario</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elitriatur beatae odio quia voluptatem nisi cum tenetur amet eum qui.</p>
                </div>
                
            </div>
        </section>
    )
}