import SearchInput from "../components/SearchInput";
import NavBar from "../components/NavBar";
import SideIngredients from "../components/SideIngredients";

function Ingredients() {
  return (
    <div className="">
      <NavBar />
      <div className="flex flex-row">
        <div className="w-1/2 order-last">
          <SearchInput />
        </div>
        <div className="w-1/2 order-first">
          <SideIngredients />
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
