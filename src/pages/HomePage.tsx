import Hero from "../components/Hero"
import MainCallouts from "../components/MainCallouts"
import RecipeListings from "../components/RecipeListings"

const HomePage = () => {
  return (
    <>
        <Hero subtitle={undefined} />
        <MainCallouts />
        <RecipeListings isHome={true} />
    </>
  )
}

export default HomePage
