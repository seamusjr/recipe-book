import { Link } from "react-router-dom";
import Callout from "./Callout";

const MainCallouts = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Callout>
            <h2 className="text-2xl font-bold">Main Courses</h2>
            <p className="mt-2 mb-4">Find some main courses</p>
            <Link
              to="/main-courses.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Main Courses
            </Link>
          </Callout>
          <Callout bg="bg-amber-200">
            <h2 className="text-2xl font-bold">Add a recipe</h2>
            <p className="mt-2 mb-4">Add some recipes</p>
            <Link
              to="/add-recipe.html"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Add a recipe
            </Link>
          </Callout>
        </div>
      </div>
    </section>
  );
}

export default MainCallouts