function Header() {
  return (
    <header className="
      flex flex-col
      md:flex-row
      md:justify-between
      md:items-start
      gap-5 md:gap-0
      py-6
    ">

      {/* NAME */}
      <p className="text-sm font-medium">
        NACHO GUZMÁN
      </p>

      {/* NAVIGATION */}
      <nav className="
        flex
        justify-between
        md:justify-start
        md:gap-6
        text-sm
        font-medium
      ">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>

    </header>
  )
}

export default Header