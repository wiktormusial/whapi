import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux/hooks";
import { BsSearch } from "react-icons/bs";
import { fetchCity, createError } from "../../store/cities/citiesSlice";
import "./SearchBar.css";

const SearchBar = () => {
  const [userCity, setUserCity] = useState("");
  const dispatch = useAppDispatch();

  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userCity.trim() === "") {
      dispatch(createError("Empty string"));
    } else {
      dispatch(fetchCity(userCity));
    }
  };

  return (
    <form
      className="container"
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSumbit(e)}
    >
      <input
        type="text"
        className="searchbar"
        data-testid="search-bar"
        placeholder="Type your city"
        onChange={(e) => setUserCity(e.target.value)}
      />
      <button className="searchbutton" data-testid="search-button">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
