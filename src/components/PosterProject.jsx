function PosterProject({ image, title, onClick }) {
  return (
    <article
      className="overflow-hidden aspect-[4/5] cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
      />
    </article>
  )
}

export default PosterProject