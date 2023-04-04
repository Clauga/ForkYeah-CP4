import ProfileTabs from "./ProfileTabs";

function ProfileContent() {
  return (
    <div className="h-full p-8 mt-5">
      <div className="bg-white rounded-lg shadow-lg pb-8">
        <div className="right-12 mt-4 rounded">
          <button
            type="button"
            className="border border-gray-400 p-2 rounded text-gray-300 hover:text-gray-300 bg-gray-100 bg-opacity-10 hover:bg-opacity-20"
            title="Settings"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center -mt-20">
          <img
            alt=""
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            className="w-40 border-4 border-white rounded-full"
          />
          <div className="flex items-center space-x-2 mt-2">
            <p className="text-2xl">Amanda Ross</p>
            <span className="bg-blue-500 rounded-full p-1" title="Verified">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-100 h-2.5 w-2.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center lg:items-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button
                type="button"
                className="flex items-center text-grey2 px-4 py-2 text-sm space-x-2 transition duration-100 hover:text-yellow hover:border-gray-300 underline"
              >
                <span>Edit Profile</span>
              </button>
            </div>
          </div>
          <p className="text-gray-700">Senior Software Engineer</p>
          <p className="text-sm text-gray-500">New York, USA</p>
        </div>
        <ProfileTabs />
      </div>
    </div>
  );
}

export default ProfileContent;
