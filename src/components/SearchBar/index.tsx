import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux/hooks";
import { BsSearch } from "react-icons/bs";
import { fetchCity } from "../../store/cities/citiesSlice";
import "./SearchBar.css";

const SearchBar = () => {
  const [userCity, setUserCity] = useState("");
  const dispatch = useAppDispatch();

  const handleSumbit = () => {
    if (userCity.trim() === "") {
      console.error("Empty string");
    } else {
      dispatch(fetchCity(userCity));
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        className="searchbar"
        data-testid="search-bar"
        placeholder="Type your city"
        onChange={(e) => setUserCity(e.target.value)}
      />
      <button
        onClick={() => handleSumbit()}
        className="searchbutton"
        data-testid="search-button"
      >
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
