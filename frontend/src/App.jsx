import { Routes, Route } from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import Profile from "./pages/Profile";
import Random from "./pages/Random";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Connection from "./pages/Connection";
import Areas from "./pages/Areas";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import AddRecipe from "./pages/AddRecipe";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connection" element={<Connection />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Ingredients" element={<Ingredients />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Random" element={<Random />} />
        <Route path="/Recipe-details" element={<RecipeDetailsPage />} />
        <Route path="/Add-recipe" element={<AddRecipe />} />
        <Route path="/Edit-Profile" element={<EditProfile />} />
      </Routes>
    </div>
  );
}

export default App;
