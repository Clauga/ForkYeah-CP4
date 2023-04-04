import { useNavigate } from "react-router-dom";
import { useCurrentUserContext } from "../contexts/UserContext";

import logout from "../assets/logout.svg";

import expressAPI from "../services/expressAPI";

function Logout() {
  const { setUser } = useCurrentUserContext();
  const navigate = useNavigate();

  const handleDisconnection = () => {
    expressAPI
      .get("/logout")
      .then(() => {
        localStorage.removeItem("user");
        setUser("");
        navigate("/Connection");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="ml-2 w-[100px] mt-2">
      <button type="button" onClick={handleDisconnection} className="w-fit">
        <img src={logout} alt="log-out" className="w-6" />
      </button>
    </div>
  );
}

export default Logout;
