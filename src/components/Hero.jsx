
import nachoPic from '../assets/NachoPic.jpg'

function Hero() {
  return (
    <section className="px-6 md:px-10 pt-12 pb-10 md:pt-20 md:pb-16 md:min-h-screen md:flex md:items-center">

      <div className="w-full max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">

        {/* TEXT */}
        <div className="md:pl-10">

          <p className="text-xs uppercase tracking-[0.3em] mb-6 md:mb-8 text-black/45">
            Berlin Based
          </p>

          <h1 className="
            text-[14vw]
            md:text-7xl
            lg:text-8xl
            font-normal
            leading-[0.95]
            tracking-[-0.05em]
            md:whitespace-nowrap
          ">
            Nacho Guzmán
          </h1>

          <p className="
            mt-4
            text-2xl
            md:text-3xl
            lg:text-4xl
            leading-tight
            text-black/35
            md:whitespace-nowrap
          ">
            Web Developer
            <br className="md:hidden" />
            <span className="hidden md:inline"> & </span>
            <span className="md:hidden">& </span>
            Graphic Designer
          </p>

        </div>

        {/* PHOTO */}
        <div className="flex justify-start">

          <img
            src={nachoPic}
            alt="Nacho Guzmán"
            className="
              w-full
              max-w-[430px]
              md:max-w-[580px]
              grayscale
              object-cover
            "
          />

        </div>

      </div>

    </section>
  )
}

export default Hero
