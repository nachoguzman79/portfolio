function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <p className="text-sm font-medium uppercase">
          Contact
        </p>

        <div>
          <p className="text-3xl md:text-5xl leading-tight">
            Have a project in mind?
            <br />
            Let's work together.
          </p>

          <a
            href="mailto:ignacioguzmanok@gmail.com"
            className="inline-block mt-10 text-sm border-b border-black"
          >
            ignacioguzmanok@gmail.com
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact