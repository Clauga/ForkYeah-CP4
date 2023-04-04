function ProfileTabs() {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-grey3 ">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <a
              href="/"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              My recipes
            </a>
          </li>
          <li className="mr-2">
            <a
              href="/"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
            >
              My Favorites
            </a>
          </li>
          <li className="mr-2">
            <a
              href="/"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              Videos
            </a>
          </li>
          <li className="mr-2">
            <a
              href="/"
              className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
            >
              Add new recipe
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileTabs;