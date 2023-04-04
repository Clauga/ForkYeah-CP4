import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

function AddRecipeContent() {
  return (
    <div>
      <NavBar />
      <div className="h-full mt-5 mb-10">
        <div className="border-b-2 block md:flex">
          <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
            <div className="flex justify-between">
              <span className="text-xl font-semibold block">
                Suki Waterhouse
              </span>
              <a
                href="/"
                className="-mt-2 text-md font-bold text-white bg-yellow rounded-full px-5 py-2 hover:oversize-110"
              >
                Edit
              </a>
            </div>

            <span className="text-gray-600">
              This information is secret so be careful
            </span>
            <div className="w-full flex justify-center">
              <img
                alt=""
                src="https://agendaculturel.emstorage.fr/suki-waterhouse-tmaster_rz7snyz1adfpk4-og-51088094.jpg"
                className=" border-white rounded-full"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
            <div className="rounded  shadow p-6">
              <span className="text-gray-600 pt-4 block opacity-70">
                Personal login information of your account
              </span>
              <div className="pb-6">
                <label
                  htmlFor="name"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Name
                </label>
                <div className="flex">
                  <input
                    disabled
                    id="username"
                    className="border-1  rounded-r px-4 py-2 w-full"
                    type="text"
                    value="Suki Waterhouse"
                  />
                </div>
              </div>
              <div className="pb-4">
                <label
                  htmlFor="about"
                  className="font-semibold text-gray-700 block pb-1"
                >
                  Email
                </label>
                <input
                  disabled
                  id="email"
                  className="border-1  rounded-r px-4 py-2 w-full"
                  type="email"
                  value="suki@indie.com"
                />
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="font-semibold text-gray-700 block pb-1"
                  >
                    Password
                  </label>
                  <div className="flex">
                    <input
                      disabled
                      id="username"
                      className="border-1  rounded-r px-4 py-2 w-full"
                      type="password"
                      value="Jane Name"
                    />
                  </div>
                </div>

                <span className="text-gray-600 pt-4 block opacity-70 hover:underline">
                  Delete my account
                </span>
                <div className="flex justify-between mt-5">
                  <Link to="/profile">
                    <button
                      type="button"
                      className="text-md font-bold text-white bg-yellow rounded-full px-5 py-2 hover:oversize-110 float-right"
                    >
                      Save changes
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecipeContent;
