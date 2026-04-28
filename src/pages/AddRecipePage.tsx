import React, { useState } from 'react'
import { buildApiUrl } from '../lib/api'
import type { RecipeFormData } from '../types/recipe'

const AddRecipePage = () => {
  const [formData, setFormData] = useState<RecipeFormData>({
    name: '',
    description: '',
    type: '',
    cuisine: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    ingredients: [''], // Start with one empty ingredient
    instructions: [''], // Start with one empty instruction
    tags: [''] // Start with one empty tag
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index?: number
  ) => {
    const { name, value } = e.target
    if (name === 'ingredients' && index !== undefined) {
      const newIngredients = [...formData.ingredients]
      newIngredients[index] = value
      setFormData({ ...formData, ingredients: newIngredients })
    } else if (name == 'instructions' && index !== undefined) {
        const newInstructions = [...formData.instructions]
        newInstructions[index] = value
        setFormData({ ...formData, instructions: newInstructions })
    } else if (name == 'tags' && index !== undefined) {
        const newTags = [...formData.tags]
        newTags[index] = value
        setFormData({ ...formData, tags: newTags })
    } 
    else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ''] })
  }

  const addInstruction = () => {
    setFormData({ ...formData, instructions: [...formData.instructions, ''] })
  }

  const addTag = () => {
    setFormData({ ...formData, tags: [...formData.tags, ''] })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(buildApiUrl('/recipes'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Recipe submitted successfully!')
        // Reset form after successful submission
        setFormData({
          name: '',
          description: '',
          type: '',
          cuisine: '',
          prepTime: '',
          cookTime: '',
          servings: '',
          ingredients: [''],
          instructions: [''],
          tags: ['']
        })
      } else {
        alert('Failed to submit recipe.')
      }
    } catch (error) {
      console.error('Error submitting recipe:', error)
    }
  }

  return (
    <section className="bg-amber-600">
        <div className="container m-auto max-w-2xl py-24">
            <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">

                <form onSubmit={handleSubmit}>
                    <h2 className="text-3xl text-center font-semibold mb-6">Add Recipe</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2"
                >Recipe Name</label
              >
                        <input
                        type="text"
                        name="name"
                        className="border rounded w-full py-2 px-3 mb-2"
                        placeholder="eg. Tofu Scramble"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="description"
                            className="block text-gray-700 font-bold mb-2"
                            >Description</label
                        >
                        <textarea
                        name="description"
                        className="border rounded w-full py-2 px-3"
                        rows={4}
                        placeholder="Descriptive sentences about the dish"
                        required
                        value={formData.description}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                            >Recipe Type</label
                        >
                        <select
                            id="type"
                            name="type"
                            className="border rounded w-full py-2 px-3"
                            required
                          value={formData.type}
                            onChange={handleChange}
                        >
                          <option value="">Select recipe type</option>
                            <option value="main course">main course</option>
                            <option value="side dish">side dish</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                        >Cuisine</label>
                        <select
                        id="cuisine"
                        name="cuisine"
                        className="border rounded w-full py-2 px-3"
                        required
                        value={formData.cuisine}
                        onChange={handleChange}
                        >
                      <option value="">Select cuisine</option>
                                            <option value="American">American</option>
                <option value="Asian Fusion">Asian Fusion</option>
                <option value="French">French</option>
                <option value="Indian">Indian</option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Middle Eastern">Middle Eastern</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 font-bold mb-2'>
                            Prep Time
                        </label>
                        <input
                        type="text"
                        name="prepTime"
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='e.g. in minutes'
                        required
                        value={formData.prepTime}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 font-bold mb-2'>
                            Cook Time
                        </label>
                        <input
                        type="text"
                        name="cookTime"
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='e.g. in minutes'
                        required
                        value={formData.cookTime}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 font-bold mb-2'>
                            Servings:
                        </label>
                        <input
                        type="text"
                        name="servings"
                        className='border rounded w-full py-2 px-3 mb-2'
                        placeholder='number of servings'
                        required
                        value={formData.servings}
                        onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 font-bold mb-2'>
                            Ingredients:
                        </label>
                        {formData.ingredients.map((ingredient, index) => (
                        <div key={index}>
                            <input
                            type="text"
                            name="ingredients"
                            className='border rounded w-full py-2 px-3 mb-2'
                            placeholder='e.g. 1lb carrots'
                            required
                            value={ingredient}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                            />
                        </div>
                        ))}
                        <button 
                            type="button" 
                            className='bg-green-900 text-white rounded-md hover:bg-green-500 px-2 py-2'
                            onClick={addIngredient}>
                        Add Ingredient
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 font-bold mb-2'>
                            Instructions
                        </label>
                        {formData.instructions.map((instruction, index) => (
                        <div key={index}>
                            <input
                            type="text"
                            name="instructions"
                            className='border rounded w-full py-2 px-3 mb-2'
                            placeholder='e.g. boil until tender'
                            required
                            value={instruction}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                            />
                        </div>
                        ))}
                        <button 
                            type="button" 
                            onClick={addInstruction}
                            className='bg-green-900 text-white rounded-md hover:text-white hover:bg-green-500 px-2 py-2'
                        >
                        Add Instruction
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className='block text-gray-700 font-bold mb-2'>
                            Tags
                        </label>
                        {formData.tags.map((tag, index) => (
                        <div key={index}>
                            <input
                            type="text"
                            name="tags"
                            className='border rounded w-full py-2 px-3 mb-2'
                            placeholder='e.g. easy classic'
                            required
                            value={tag}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index)}
                            />
                        </div>
                        ))}
                        <button 
                            type="button" 
                            onClick={addTag}
                            className='bg-green-900 text-white rounded-md hover:text-white hover:bg-green-500 px-2 py-2'
                        >
                        Add Tag
                        </button>
                    </div>
                    <div>
                        <button className="bg-green-900 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddRecipePage