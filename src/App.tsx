import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import RecipesPage from './pages/RecipesPage.tsx'
import RecipePage from './pages/RecipePage.tsx'
import { recipeLoader } from './loaders/recipeLoader.ts'
import NotFoundPage from './pages/NotFoundPage.tsx'
import AddRecipePage from './pages/AddRecipePage.tsx'
// import './assets/styles/main.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/recipes" element={<RecipesPage />} />
      <Route
        path="/recipes/:id"
        element={<RecipePage />}
        loader={recipeLoader}
      />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/add-recipe" element={<AddRecipePage />} />
    </Route>
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
