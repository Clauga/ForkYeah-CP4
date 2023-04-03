function HeaderCategories() {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
          <h2 className="ml-20 text-2xl font-semibold font-display text-black sm:text-3xl">
            Let's get cookin'! .
          </h2>
          <p className="mt-2 max-w-xl text-base text-gray-400">
            Our recipe categories are the ultimate menu for your taste buds!
            From snack attacks to sweet retreats, we've got something to tickle
            every fancy. So let's get browsing and find your next nom nom
            nirvana!
          </p>
          <form className="flex items-center ml-20 mt-5">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Search a category"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-yellow rounded-lg border  focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          Dessert
        </span>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
          Dinner
        </span>
        <span className="bg-grey2 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
          Side
        </span>
        <span className="bg-main-light text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
          Starter
        </span>
        <span className="bg-green text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
          Vegan
        </span>
        <span className="bg-emerald-200 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
          Vegetarian
        </span>
        <span className="bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
          Miscellaneus
        </span>
      </div>
    </>
  );
}

export default HeaderCategories;
