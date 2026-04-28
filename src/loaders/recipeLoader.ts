import type { LoaderFunctionArgs } from 'react-router-dom'
import { buildApiUrl } from '../lib/api'

export const recipeLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.id) {
    throw new Response('Recipe id is required', { status: 400 })
  }

  const response = await fetch(buildApiUrl(`/recipes/${params.id}`))

  if (!response.ok) {
    throw new Response('Recipe not found', { status: 404 })
  }

  return response.json()
}
