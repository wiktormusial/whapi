import "./SearchBar.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className="container">
      <input
        type="text"
        className="searchbar"
        data-testid="search-bar"
        placeholder="Type your city"
      />
      <button className="searchbutton" data-testid="search-button">
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
