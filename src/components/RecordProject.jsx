function RecordProject({ title, front, back, year = "2026", onClick }) {
  return (
    <article>

      <div
        className="relative group overflow-hidden cursor-pointer"
        onClick={onClick}
      >

        {/* FRONT */}
        <img
          src={front}
          alt={`${title} front cover`}
          className="w-full h-auto transition-opacity duration-500 group-hover:opacity-0"
        />

        {/* BACK */}
        <img
          src={back}
          alt={`${title} back cover`}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

      </div>

      <div className="flex justify-between mt-3 text-sm">

        <div>
          <h3 className="font-medium uppercase">
            {title}
          </h3>

          <p>Record Design</p>
        </div>

        <p>{year}</p>

      </div>

    </article>
  )
}

export default RecordProject