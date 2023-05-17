import Image from "next/image";
import sorridents from "../../assets/Paciente_LP.png";
import AgendarConsulta from "../ButtonAgendarConsulta/ButtonAgendar";

export default function WhySorridents() {
  return (
    <section className="w-full flex flex-col-reverse justify-around py-10 px-5 lg:px-10 lg:flex-row">
      <div className="w-full flex flex-col items-center lg:w-1/2 lg:items-start text-white">
        <h2 className="text-2xl lg:text-4xl font-bold">Porque a Sorridents?</h2>
        <p className="my-3 text-sm lg:text-base font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          voluptatem reprehenderit dicta culpa pariatur provident! Iusto ducimus
          nisi ea tempore soluta, quisquam fugit porro saepe exercitationem
          omnis quam earum autem?
        </p>
        <p className="text-sm lg:text-base font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          pariatur mollitia hic ullam deserunt exercitationem praesentium
          aliquid quae nisi aspernatur sit, doloribus vitae architecto ut ipsa.
          Officiis incidunt ducimus numquam.
        </p>
        <AgendarConsulta />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="mx-auto w-full" style={{ maxWidth: "500px" }}>
          <Image
            src={sorridents}
            alt="Landscape picture"
            layout="responsive"
            width={500}
            height={400}
            className="rounded mb-5"
          />
        </div>
      </div>
    </section>
  );
}
