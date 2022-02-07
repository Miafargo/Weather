import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCities = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="city" className="title-input">
          Search Your City
        </label>
        <input
          type="text"
          id="city"
          ref={searchValue}
          onChange={searchCities}
        />
      </form>
    </div>
  );
};

export default SearchForm;
