import SearchAreas from "./SearchAreas";

function AreasContent() {
  return (
    <div className="flex flex-col cols-1 align-items-center">
      <div>
        <h1 className="ml-10 m-5 p-5 mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 text-center">
          So you are searching by <span className="text-blue">AREAS</span>
        </h1>

        <h2 className="ml-2 text-base text-center">
          Let's explore different culinary regions and discover amazing recipes
          that will make your mouth water. <br />
          Are you ready to embark on a flavor-filled journey?
        </h2>
        <div className="ml-[350px]">
          <SearchAreas />
        </div>
      </div>
      <div className="flex items-center gap-8 p-8 lg:p-24">
        <img
          src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
          className="w-[480px] rounded-lg "
          alt="Tree"
        />
        <div>
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80"
            className="mb-8 rounded-lg w-[250px]"
            alt="Tree"
          />
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="rounded-lg w-[260px]"
            alt="Tree"
          />
        </div>
      </div>
    </div>
  );
}

export default AreasContent;
