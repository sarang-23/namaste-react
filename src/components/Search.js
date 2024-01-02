import { useState } from "react";

const Search = ({ search }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Aaj khane mein kya hai!"
      />
      <button onClick={() => search(searchText)}>Search</button>
    </div>
  );
};

export default Search;
