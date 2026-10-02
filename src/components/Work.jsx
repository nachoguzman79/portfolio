import { useState, useEffect } from 'react'
import WebProject from './WebProject'
import RecordProject from './RecordProject'
import PosterProject from './PosterProject'
import babyJaguars from '../assets/babyjaguars.jpg'
import sebThieme from '../assets/sebthieme.jpg'
import record01A from '../assets/record01A.png'
import record01B from '../assets/record01B.png'
import record02A from '../assets/record02A.png'
import record02B from '../assets/record02B.png'
import record03A from '../assets/record03A.png'
import record03B from '../assets/record03B.png'
import poster01 from '../assets/Poster01.png'
import poster02 from '../assets/Poster02.png'
import poster03 from '../assets/Poster03.jpg'
import poster04 from '../assets/Poster04.png'
import poster06 from '../assets/Poster06.png'
import poster07 from '../assets/Poster07.png'
import poster08 from '../assets/Poster08.png'
import poster09 from '../assets/Poster09.png'
const webProjects = [
  {
    title: 'Los Baby Jaguars',
    image: babyJaguars,
    role: 'Web Design & Front-End Development',
    year: '2026',
    url: 'https://www.losbabyjaguars.com/',
    description:
      'Complete website design and front-end development for Berlin-based band Los Baby Jaguars. Designed the visual system, layout and user experience, integrating releases, live dates, tickets and band content into a responsive website.',
    technologies: 'React · Vite · Tailwind CSS',
  },
  {
    title: 'Seb Thieme',
    image: sebThieme,
    role: 'Web Design & Front-End Development',
    year: '2026',
    url: 'https://www.sebthieme.com/',
    description:
      'An interactive portfolio developed around Seb Thieme’s illustrations. I worked on the interaction concept, typography and front-end development, creating a playful digital environment around his work.',
    technologies: 'React · Tailwind CSS',
  },
]
const records = [
  {
    title: 'Los Chicos del Pantano',
    front: record01A,
    back: record01B,
    year: '2026',
  },
  {
    title: 'Pablo Climent — TaTiTa',
    front: record02A,
    back: record02B,
    year: '2026',
  },
  {
    title: 'The Chukukos — Deep Latin Surf Attack!',
    front: record03A,
    back: record03B,
    year: '2026',
  },
]
const posters = [
  { image: poster01, title: 'Poster 01' },
  { image: poster02, title: 'Poster 02' },
  { image: poster03, title: 'Poster 03' },
  { image: poster04, title: 'Poster 04' },
  { image: poster06, title: 'Poster 06' },
  { image: poster07, title: 'Poster 07' },
  { image: poster08, title: 'Poster 08' },
  { image: poster09, title: 'Poster 09' },
]
function Work() {
  const [openSections, setOpenSections] = useState([])
  const toggleSection = (section) => {
    setOpenSections((current) => current.includes(section)
      ? current.filter((item) => item !== section)
      : [...current, section])
  }
  const sectionHeader = (id, number, title, count) => (
    <button
      type="button"
      aria-expanded={openSections.includes(id)}
      aria-controls={`work-${id}`}
      onClick={() => toggleSection(id)}
      className="w-full flex items-center justify-between gap-4 py-6 md:py-8 border-b border-black text-left cursor-pointer group"
    >
      <span className="flex items-baseline gap-4 md:gap-8 min-w-0">
        <span className="text-xs md:text-sm text-black/45">{number}</span>
        <span className="text-2xl md:text-5xl font-normal tracking-tight group-hover:opacity-50 transition-opacity">{title}</span>
      </span>
      <span className="flex items-center gap-3 md:gap-8 shrink-0">
        <span className="hidden sm:inline text-xs md:text-sm text-black/50">{count} projects</span>
        <span className="text-2xl md:text-3xl font-light" aria-hidden="true">{openSections.includes(id) ? '−' : '+'}</span>
      </span>
    </button>
  )
  const [selectedPoster, setSelectedPoster] = useState(null)
  const [selectedRecord, setSelectedRecord] = useState(null)
  const [selectedWebProject, setSelectedWebProject] = useState(null)
  /* POSTER NAVIGATION */
  const previousPoster = () => {
    setSelectedPoster((current) =>
      current === 0 ? posters.length - 1 : current - 1
    )
  }
  const nextPoster = () => {
    setSelectedPoster((current) =>
      current === posters.length - 1 ? 0 : current + 1
    )
  }
  /* RECORD NAVIGATION */
  const previousRecord = () => {
    setSelectedRecord((current) =>
      current === 0 ? records.length - 1 : current - 1
    )
  }
  const nextRecord = () => {
    setSelectedRecord((current) =>
      current === records.length - 1 ? 0 : current + 1
    )
  }
  /* WEB PROJECT NAVIGATION */
  const previousWebProject = () => {
    setSelectedWebProject((current) =>
      current === 0 ? webProjects.length - 1 : current - 1
    )
  }
  const nextWebProject = () => {
    setSelectedWebProject((current) =>
      current === webProjects.length - 1 ? 0 : current + 1
    )
  }
  /* KEYBOARD CONTROLS */
  useEffect(() => {
    if (
      selectedPoster === null &&
      selectedRecord === null &&
      selectedWebProject === null
    ) {
      return
    }
    const handleKeyDown = (e) => {
      /* POSTERS */
      if (selectedPoster !== null) {
        if (e.key === 'ArrowLeft') {
          previousPoster()
        }
        if (e.key === 'ArrowRight') {
          nextPoster()
        }
      }
      /* RECORDS */
      if (selectedRecord !== null) {
        if (e.key === 'ArrowLeft') {
          previousRecord()
        }
        if (e.key === 'ArrowRight') {
          nextRecord()
        }
      }
      /* WEB PROJECTS */
      if (selectedWebProject !== null) {
        if (e.key === 'ArrowLeft') {
          previousWebProject()
        }
        if (e.key === 'ArrowRight') {
          nextWebProject()
        }
      }
      /* CLOSE */
      if (e.key === 'Escape') {
        setSelectedPoster(null)
        setSelectedRecord(null)
        setSelectedWebProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedPoster, selectedRecord, selectedWebProject])
  return (
    <section id="work" className="py-16 md:py-20">
      {/* SELECTED WORK HEADER */}
      <div className="flex justify-between items-end border-b border-black pb-3">
        <h2 className="text-sm font-medium uppercase">
          Selected Work
        </h2>
        <p className="text-sm">
          2020—2026
        </p>
      </div>
      {/* INTERACTIVE WORK CATEGORIES */}
        {sectionHeader('web', '01', 'Web Design', webProjects.length)}
        {openSections.includes('web') && (
          <div id="work-web" className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 pb-10">
            {webProjects.map((project, index) => (
              <WebProject
                key={project.title}
                title={project.title}
                image={project.image}
                role={project.role}
                year={project.year}
                onClick={() => setSelectedWebProject(index)}
              />
            ))}
          </div>
        )}
        {sectionHeader('records', '02', 'Record Artwork', records.length)}
        {openSections.includes('records') && (
          <div id="work-records" className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 pb-10">
            {records.map((record, index) => (
              <RecordProject
                key={record.title}
                title={record.title}
                front={record.front}
                back={record.back}
                year={record.year}
                onClick={() => setSelectedRecord(index)}
              />
            ))}
          </div>
        )}
        {sectionHeader('posters', '03', 'Posters & Graphic Design', posters.length)}
        {openSections.includes('posters') && (
          <div id="work-posters" className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 pb-10">
            {posters.map((poster, index) => (
              <PosterProject
                key={poster.title}
                image={poster.image}
                title={poster.title}
                onClick={() => setSelectedPoster(index)}
              />
            ))}
          </div>
        )}
        {/* WEB PROJECT LIGHTBOX */}
      {selectedWebProject !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#f2f0e9] overflow-y-auto"
          onClick={() => setSelectedWebProject(null)}
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedWebProject(null)}
            className="fixed top-6 right-6 text-black text-3xl cursor-pointer z-20"
            aria-label="Close"
          >
            ×
          </button>
          {/* PREVIOUS */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              previousWebProject()
            }}
            className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 text-black text-4xl md:text-5xl cursor-pointer z-20"
            aria-label="Previous web project"
          >
            ←
          </button>
          <div
            className="max-w-7xl mx-auto px-16 md:px-20 py-16 md:py-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* PROJECT INFO */}
            <div className="mb-12">
              <div className="flex justify-between items-end border-b border-black pb-3 mb-6">
                <p className="text-sm font-medium uppercase">
                  Web Design
                </p>
                <p className="text-sm">
                  {webProjects[selectedWebProject].year}
                </p>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium uppercase leading-[0.9] tracking-tight max-w-5xl">
                {webProjects[selectedWebProject].title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-6 mt-10 md:mt-14 border-t border-black pt-5">
                <div className="md:col-span-3">
                  <p className="text-xs uppercase mb-2">
                    Role
                  </p>
                  <p className="text-sm max-w-[15rem]">
                    {webProjects[selectedWebProject].role}
                  </p>
                </div>
                <div className="md:col-span-3">
                  <p className="text-xs uppercase mb-2">
                    Technologies
                  </p>
                  <p className="text-sm">
                    {webProjects[selectedWebProject].technologies}
                  </p>
                </div>
                <div className="md:col-span-6">
                  <p className="text-lg md:text-xl leading-snug max-w-xl">
                    {webProjects[selectedWebProject].description}
                  </p>
                  <a
                    href={webProjects[selectedWebProject].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-7 text-sm uppercase border-b border-black pb-1 hover:opacity-50 transition-opacity"
                  >
                    Visit Website ↗
                  </a>
                </div>
              </div>
            </div>
            {/* WEBSITE IMAGE */}
            <img
              src={webProjects[selectedWebProject].image}
              alt={`${webProjects[selectedWebProject].title} website`}
              className="w-full h-auto"
            />
          </div>
          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextWebProject()
            }}
            className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 text-black text-4xl md:text-5xl cursor-pointer z-20"
            aria-label="Next web project"
          >
            →
          </button>
        </div>
      )}
      {/* RECORD LIGHTBOX */}
      {selectedRecord !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 md:p-12"
          onClick={() => setSelectedRecord(null)}
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedRecord(null)}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer z-10"
            aria-label="Close"
          >
            ×
          </button>
          {/* PREVIOUS */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              previousRecord()
            }}
            className="absolute left-4 md:left-8 text-white text-4xl md:text-5xl cursor-pointer z-10"
            aria-label="Previous record"
          >
            ←
          </button>
          {/* FRONT + BACK */}
          <div
            className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={records[selectedRecord].front}
              alt={`${records[selectedRecord].title} front cover`}
              className="max-w-full md:max-w-[42%] max-h-[80vh] object-contain"
            />
            <img
              src={records[selectedRecord].back}
              alt={`${records[selectedRecord].title} back cover`}
              className="max-w-full md:max-w-[42%] max-h-[80vh] object-contain"
            />
          </div>
          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextRecord()
            }}
            className="absolute right-4 md:right-8 text-white text-4xl md:text-5xl cursor-pointer z-10"
            aria-label="Next record"
          >
            →
          </button>
        </div>
      )}
      {/* POSTER LIGHTBOX */}
      {selectedPoster !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 md:p-12"
          onClick={() => setSelectedPoster(null)}
        >
          {/* CLOSE */}
          <button
            onClick={() => setSelectedPoster(null)}
            className="absolute top-6 right-6 text-white text-3xl cursor-pointer z-10"
            aria-label="Close"
          >
            ×
          </button>
          {/* PREVIOUS */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              previousPoster()
            }}
            className="absolute left-4 md:left-8 text-white text-4xl md:text-5xl cursor-pointer z-10"
            aria-label="Previous poster"
          >
            ←
          </button>
          {/* IMAGE */}
          <img
            src={posters[selectedPoster].image}
            alt={posters[selectedPoster].title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain"
          />
          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextPoster()
            }}
            className="absolute right-4 md:right-8 text-white text-4xl md:text-5xl cursor-pointer z-10"
            aria-label="Next poster"
          >
            →
          </button>
        </div>
      )}
    </section>
  )
}
export default Work
