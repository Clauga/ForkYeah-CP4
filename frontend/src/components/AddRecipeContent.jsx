import { Link } from "react-router-dom";

function AddRecipeContent() {
  return (
    <div className="mb-10 mt-5">
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <img
                src="https://images.unsplash.com/photo-1540420828642-fca2c5c18abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=682&q=80"
                className="max-w-xl text-lg rounded-full"
                alt=""
              />
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border border-grey3"
                    placeholder="Recipe Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Difficulty
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border border-grey3"
                      placeholder="Difficulty"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Time
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border border-grey3"
                      placeholder="Time"
                      type="time"
                      id="time"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Country
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border border-grey3"
                      placeholder="Country"
                      type="country"
                      id="country"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Url
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm border border-grey3"
                      placeholder="url youtube"
                      type="url"
                      id="url"
                    />
                  </div>
                </div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-900"
                  htmlFor="small_size"
                >
                  Choose your picture
                </label>
                <input
                  className="block w-full mb-5 text-xs border border-grey3 rounded-lg cursor-pointer bg-grey4"
                  id="small_size"
                  type="file"
                />
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border border-grey3"
                    placeholder="List of ingredients and quantities"
                    rows="8"
                    id="message"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm border border-grey3"
                    placeholder="Instructions for the recipe"
                    rows="8"
                    id="message"
                  />
                </div>

                <div className="mt-4">
                  <Link to="/profile">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-full bg-yellow px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Save
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddRecipeContent;
