function RecipeDetails() {
  return (
    <div className="flex justify-center mt-5 w-full mb-5">
      <div className="flex flex-col rounded-lg bg-white shadow-lg md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Recipe Name
          </h5>
          <div>
            <h1 className="text-lg">Ingredients :</h1>
            <ul className="list-disc pl-5">
              <li>avocado 0.5</li>
              <li>campari 2.0</li>
              <li>egg whites 2.0</li>
              <li>multigrain bread 1.0</li>
              <li>salt and pepper 1.0</li>
              <li>shallot 0.5</li>
              <li>spinach leaves 1.0</li>
            </ul>
          </div>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Instructions: This is a wider card with supporting text below as a
            natural lead-in to additional content. This content is a little bit
            longer.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            Time cooking: x
          </p>
          <div className="flex flex-row mt-5">
            <span className="text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 last:mr-0 mr-1">
              Tags
            </span>
            <span className="text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 last:mr-0 mr-1">
              Tags
            </span>
            <span className="text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 last:mr-0 mr-1">
              Tags
            </span>
            <span className="text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 last:mr-0 mr-1">
              Tags
            </span>
          </div>
          <button
            type="button"
            href="foodiesapp://food/1001"
            className="block mt-10 w-40 px-2 py-1 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-main-light rounded-[14px]  focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
          >
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
