import NavBar from "../components/NavBar";
import CardsCategories from "../components/CardsCategories";
import HeaderCategories from "../components/HeaderCategories";

function Categories() {
  return (
    <div>
      <NavBar />
      <HeaderCategories />
      <div className="flex flex-row m-10">
        <CardsCategories />
        <CardsCategories />
        <CardsCategories />
        <CardsCategories />
      </div>
    </div>
  );
}

export default Categories;
