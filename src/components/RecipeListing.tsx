import { Link } from 'react-router-dom'
import { FaCarrot } from 'react-icons/fa'
import type { Recipe } from '../types/recipe'

type RecipeListingProps = {
  recipe: Recipe
}

const RecipeListing = ({ recipe }: RecipeListingProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-green-600">
            <FaCarrot className="inline mr-1 mb-1 text-lg" />
            {recipe.type}
          </div>
          <h3 className="text-xl font-bold">{recipe.name}</h3>
        </div>
        <div className="mb-5">{recipe.description}</div>
        <Link
          to={`/recipes/${recipe.id}`}
          className="h-9 bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default RecipeListing