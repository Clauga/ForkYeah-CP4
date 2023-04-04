import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import CardsCategories from "../components/CardsCategories";
import HeaderCategories from "../components/HeaderCategories";
import expressAPI from "../services/expressAPI";

function Categories() {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    expressAPI.get(`/recipes/${id}`).then((res) => {
      setRecipes([res.data]);
    });
  }, []);
  return (
    <div>
      <NavBar />
      <HeaderCategories />
      <div className="flex flex-row m-10">
        {recipes.map((recipe) => (
          <CardsCategories
            key={recipe.idrecipe}
            name={recipe.name}
            instructions={recipe.instructions}
            difficulty={recipe.difficulty}
            country={recipe.country}
            url={recipe.url}
            picture={recipe.picture}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
