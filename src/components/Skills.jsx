function Skills() {
  return (
    <section
      id="skills"
      className="py-12 md:py-32 border-t border-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        <p className="text-sm font-medium uppercase">
          Technical Skills
        </p>

        <div className="grid grid-cols-2 gap-8">

          <div>
            <h3 className="text-sm uppercase font-medium mb-6">
              Development
            </h3>

            <ul className="text-lg md:text-xl leading-relaxed">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
              <li>Tailwind CSS</li>
              <li>Git / GitHub</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm uppercase font-medium mb-6">
              Design
            </h3>

            <ul className="text-lg md:text-xl leading-relaxed">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Typography</li>
              <li>Visual Design</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills