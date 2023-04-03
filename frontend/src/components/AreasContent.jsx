import SearchAreas from "./SearchAreas";

function AreasContent() {
  return (
    <div className="grid grid-cols-2 gap-2 mt-2 m-10 p-10">
      <div className="mt-auto mb-0">
        <img
          className="mt-10 h-1/4 rounded-lg mt-10"
          src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80"
          alt=""
        />
      </div>
      <div className="mt-auto mb-10">
        <div className="ml-2 text-base  font-display text-black">
          Let's explore different culinary regions and discover amazing recipes
          that will make your mouth water. <br />
          Are you ready to embark on a flavor-filled journey?
          <SearchAreas />
        </div>
        <img
          className="h-auto max-w-full rounded-lg mt-10"
          src="https://images.unsplash.com/photo-1516831083365-0efd347838f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div>
        <img
          className="ml-10 mt-10 h-3/4 rounded-lg"
          src="https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
      <div className="mb-auto mt-10">
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
    </div>
  );
}

export default AreasContent;
