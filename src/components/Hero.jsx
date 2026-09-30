import nachoPic from '../assets/NachoPic.jpg'

function Hero() {
  return (
    <section className="min-h-screen px-6 md:px-10 flex items-center">

      <div className="w-full max-w-[1450px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">

        {/* TEXT */}
        <div className="md:pl-10">

          <p className="text-xs uppercase tracking-[0.3em] mb-8 text-black/45">
            Berlin Based
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-normal leading-[0.95] tracking-[-0.05em] whitespace-nowrap">
            Nacho Guzmán
          </h1>

         <p className="mt-4 text-2xl md:text-3xl lg:text-4xl leading-tight text-black/35 whitespace-nowrap">
  Web Developer & Graphic Designer
</p>

        </div>

        {/* PHOTO */}
        <div className="flex justify-center md:justify-start">

          <img
  src={nachoPic}
  alt="Nacho Guzmán"
  className="w-full max-w-[580px] grayscale object-cover"
/>

        </div>

      </div>

    </section>
  )
}

export default Hero