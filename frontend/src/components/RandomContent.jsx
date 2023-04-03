function RandomContent() {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      {/* {/* {show ? ( */}
      <div className="text-2xl font-semibold font-display text-black sm:text-3xl">
        <h1>Have difficulty choosing what to eat?</h1>
        <h2>Click the dice to make a decision!</h2>
      </div>
      {/* ) : (
      ""
    // )} */}
      <div className="mt-5 max-w-xl text-base text-gray-400">
        <p>(Continue click dice to change.)</p>
      </div>

      <div
        className="mt-5"
        //   onClick={chooseRandom}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="2.8em"
          width="2.8em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
            fill="currentColor"
          />
          <path
            d="M16.9451 14.8921C15.8405 14.8921 14.9451 15.7875 14.9451 16.8921C14.9451 17.9967 15.8405 18.8921 16.9451 18.8921C18.0496 18.8921 18.9451 17.9967 18.9451 16.8921C18.9451 15.7875 18.0496 14.8921 16.9451 14.8921Z"
            fill="currentColor"
          />
          <path
            d="M5.05518 7.05518C5.05518 5.95061 5.95061 5.05518 7.05518 5.05518C8.15975 5.05518 9.05518 5.95061 9.05518 7.05518C9.05518 8.15975 8.15975 9.05518 7.05518 9.05518C5.95061 9.05518 5.05518 8.15975 5.05518 7.05518Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* {display === "yes" ? (
      <DishDetails
        img={recipe.strMealThumb}
        name={recipe.strMeal}
        ingredients={ingredientsArr.map((i, index) => (
          <li key={index}>{i[1]}</li>
        ))}
        measures={measuresArr.map((m, index) => (
          <li key={index}>{m[1]}</li>
        ))}
        area={recipe.strArea}
        category={recipe.strCategory}
        tags={recipe.strTags ? <span>{tags}</span> : ""}
        youtube={recipe.strYoutube}
        instructions={recipe.strInstructions}
      />
    ) : (
      ""
    )} */}
    </div>
  );
}

export default RandomContent;
