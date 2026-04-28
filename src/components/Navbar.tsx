import logo from '../assets/images/carrots-logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-green-900 text-white rounded-md hover:text-white hover:bg-green-900 px-2 py-2"
      : "rounded-md hover:text-white hover:bg-green-900 px-2 py-2"
  return (
    <nav className="bg-amber-200 border-amber-300 border-b">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img className="h-10 w-auto" src={logo} alt="Recipes" />
              <h1>Veg Friendly Recipes</h1>
            </NavLink>
            <div className="md-ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/recipes" className={linkClass}>
                  Recipes
                </NavLink>
                <NavLink to="/add-recipe" className={linkClass}>
                  Add Recipe
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar