import { Routes, Route } from "react-router-dom";
import Ingredients from "./pages/Ingredients";
import Profile from "./pages/Profile";
import Random from "./pages/Random";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import Connection from "./pages/Connection";
import Areas from "./pages/Areas";

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
      </Routes>
    </div>
  );
}

export default App;
