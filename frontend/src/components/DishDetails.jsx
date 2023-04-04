/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DishDetails(props) {
  return (
    <>
      <div className="flex flex-wrap m-5">
        <div className="w-full md:w-1/2 md:pr-8 ">
          <img src={props.img} alt="meal" className="w-full rounded" />
        </div>
        <div className="fixed right-0">
          <Link to={props.youtube}>
            <button
              className="block mt-10 w-40 px-4 py-3 font-medium hover:underline"
              type="button"
            >
              Watch on Youtube
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4">{props.name}</h3>
          <h4 className="text-xl font-bold mb-4">Ingredients needed: </h4>
          <div className="mb-4 grid grid-cols-2">
            <ul className="">{props.ingredients}</ul>
            <ul className="">{props.measures}</ul>
          </div>
        </div>

        <div className="flex items-center mt-5">
          <span className="bg-blue bg-opacity-50 text-white px-2 rounded-full mr-2">
            {props.area}
          </span>
          <span className="bg-green bg-opacity-50 text-white px-2 rounded-full mr-2">
            {props.category}
          </span>
          <span className="bg-yellow bg-opacity-50 text-white px-2 rounded-full mr-2">
            {props.tags}
          </span>
        </div>
      </div>
      <div className="m-5">
        <h4 className="text-xl font-bold mb-4">Instructions: </h4>
        <p className="">{props.instructions}</p>
      </div>
    </>
  );
}
DishDetails.propTypes = {
  instructions: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  youtube: PropTypes.string.isRequired,
  measures: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default DishDetails;
