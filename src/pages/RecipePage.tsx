import { useParams, useLoaderData } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { FaCarrot } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import type { Recipe } from '../types/recipe'

const RecipePage = () => {
    useParams()
    const recipe = useLoaderData<Recipe>()

  return (
    <>
        <section>
        <div className="container m-auto py-6 px-6">
            <Link
            to="/recipes"
            className="text-green-900 hover:text-indigo-600 flex items-center"
            >
            <FaArrowLeft className='mr-2' /> Back to Recipe Listings
            </Link>
        </div>
        </section>

        <section className="bg-amber-600">
        <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
                <div
                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                >
                    <h1 className="text-3xl font-bold mb-4">
                        { recipe.name }
                    </h1>
                    <p className="mb-4">
                        {recipe.description}
                    </p>
                    <div className='text-green-600'>
                        <FaCarrot className='inline mr-1 mb-1 text-lg'/>
                        {recipe.type}
                    </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md mt-6">

                        <h3 className="text-green-800 text-lg font-bold mb-2">Ingredients</h3>

                        <div className="mb-4">
                            <ul className='ml-6'>
                                
                            {recipe.ingredients.map((ingredient: string) => (
                                <li key={ingredient} className='list-disc'>{ingredient}</li>
                            ))}
                            </ul>
                        </div>

                        <h3 className="text-green-800 text-lg font-bold mb-2">Instructions</h3>

                        <div className="mb-4">
                            <ul className='ml-6'>
                                
                            {recipe.instructions.map((instruction: string) => (
                                <li key={instruction} className='list-disc'>{instruction}</li>
                            ))}
                            </ul>
                        </div>
                    </div>
                </main>

            {/* <aside>
                <div className="bg-white p-6 rounded-lg shadow-md">
                aside
                </div>
            </aside> */}
            </div>
        </div>
        </section>
    </>
    )
}

export default RecipePage