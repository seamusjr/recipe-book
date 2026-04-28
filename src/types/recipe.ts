export type Recipe = {
  id: number
  name: string
  description: string
  type: string
  cuisine: string
  prepTime: string
  cookTime: string
  servings: string
  ingredients: string[]
  instructions: string[]
  tags: string[]
}

export type RecipeFormData = Omit<Recipe, 'id'>