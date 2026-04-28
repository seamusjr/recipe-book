type HeroProps = {
  title?: string
  subtitle?: string
}

const Hero = ({
  title = 'Enjoy some nice recipes',
  subtitle = 'Find your next favorite dish',
}: HeroProps) => {
  return (
    <>
      <section className="bg-amber-700 py-20 mb-4 sandbox">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="my-4 text-xl">{subtitle}</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
