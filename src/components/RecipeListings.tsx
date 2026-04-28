import { useEffect, useState } from 'react'
import RecipeListing from './RecipeListing'
import Spinner from './Spinner'
import { buildApiUrl } from '../lib/api'
import type { Recipe } from '../types/recipe'

type RecipeListingsProps = {
  isHome?: boolean
}

const RecipeListings = ({ isHome = false }: RecipeListingsProps) => {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchRecipes = async () => {
          const apiUrl = buildApiUrl('/recipes')
          try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            setRecipes(isHome ? data.slice(0, 3) : data)
          } catch (error) {
            console.error('Error fetching recipes:', error)
          } finally {
            setLoading(false)
          }
        }

        fetchRecipes()
    }, [isHome])
  return (
    <section className="px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black-500 mb-6 text-center">
          {isHome ? 'Recent Recipes' : 'Browse Recipes'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeListing key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default RecipeListings