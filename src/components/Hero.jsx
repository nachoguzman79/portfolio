function Hero() {
  return (
   <section className="min-h-[75vh] flex flex-col justify-center">

      <h1 className="uppercase font-bold tracking-[-0.07em] leading-[0.76]">
        <span className="block text-[17vw]">
          Nacho
        </span>

        <span className="block text-[20.5vw] mt-[0.04em]">
          Guzmán
        </span>
      </h1>

      <div className="mt-10 flex justify-between items-end text-sm md:text-base">

        <p>
          Graphic Designer
          <br />
          & Front-End Developer
        </p>

        <p className="text-right">
          Berlin, Germany
          <br />
          2026
        </p>

      </div>

    </section>
  )
}

export default Hero