function Header() {
  return (
    <header className="flex justify-between items-start py-6">
      <p className="text-sm font-medium">
        NACHO GUZMÁN
      </p>

      <nav className="flex gap-6 text-sm font-medium">
        <a href="#work">WORK</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
    </header>
  )
}

export default Header