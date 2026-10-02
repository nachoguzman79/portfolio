
function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-32 border-t border-black"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        <p className="text-sm font-medium uppercase">
          Contact
        </p>

        <div>
          <p className="text-2xl md:text-4xl leading-tight">
            Have a project in mind?
            <br />
            Let's work together.
          </p>

          <a
            href="mailto:ignacioguzmanok@gmail.com"
            className="inline-block mt-6 md:mt-10 text-sm border-b border-black hover:opacity-50 transition-opacity"
          >
            ignacioguzmanok@gmail.com
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact
