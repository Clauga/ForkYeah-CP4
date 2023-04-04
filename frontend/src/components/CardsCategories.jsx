import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CardsCategories({ name, picture, instructions, difficulty, country }) {
  return (
    <div className="flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3]  px-2">
      <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div className="h-[136px]">
            <img className="" alt="delicious plate" src={picture} />
          </div>
          <div className="p-4 sm:p-6 mt-10">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              {name}
            </p>
            <div className="flex flex-row">
              <span className="text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 last:mr-0 mr-1">
                {difficulty}
              </span>
              <span className="text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 last:mr-0 mr-1">
                {country}
              </span>
            </div>
            <p className="text-[#7C7C80] font-[15px] mt-6">{instructions}</p>
            <div className="flex justify-center items-center">
              <Link to="/recipe-details">
                <button
                  type="button"
                  className="block mt-10 w-40 px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-main-light rounded-[14px]  focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
                >
                  Show more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
CardsCategories.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};
export default CardsCategories;
