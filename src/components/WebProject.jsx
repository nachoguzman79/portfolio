function WebProject({ title, image, role, year, onClick }) {
  return (
    <article>

      <button
        type="button"
        onClick={onClick}
        className="block w-full text-left overflow-hidden"
      >
        <img
          src={image}
          alt={`${title} website`}
          className="w-full aspect-[16/9] object-cover object-top transition-transform duration-500 hover:scale-[1.01] cursor-pointer"
        />
      </button>

      <div className="flex justify-between mt-3 text-sm">

        <div>
          <h3 className="font-medium uppercase">
            {title}
          </h3>

          <p>{role}</p>
        </div>

        <p>{year}</p>

      </div>

    </article>
  )
}

export default WebProject