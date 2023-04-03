function CardsCategories() {
  return (
    <div className="flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3]  px-2">
      <div className="w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="max-w-md mx-auto">
          <div className="h-[136px]">
            <img
              className=""
              alt="delicious plate"
              src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6"
            />
          </div>
          <div className="p-4 sm:p-6 mt-10">
            <p className="font-bold text-gray-700 text-[22px] leading-7 mb-1">
              Spagetti with shrimp sauce
            </p>
            <div className="flex flex-row">
              <span className="text-xs inline-block py-1 px-2 rounded-full text-emerald-600 bg-emerald-200 last:mr-0 mr-1">
                Low Calories
              </span>
            </div>
            <p className="text-[#7C7C80] font-[15px] mt-6">
              Shrimp sauce is made with mozarella, a creamy taste of shrimp
              extra kick of spices.
            </p>
            <div className="flex justify-center items-center">
              <button
                type="button"
                href="foodiesapp://food/1001"
                className="block mt-10 w-40 px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-main-light rounded-[14px]  focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80"
              >
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsCategories;
