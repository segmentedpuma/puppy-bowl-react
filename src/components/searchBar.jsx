import { useState } from "react"


const SearchBar = ({ setSearch, search }) => {

  const [searchValue, setSearchValue] = useState();

  const searchButton = () => {
    setSearch(searchValue);
  }

  return (
    <>

      <input type="text" name="search" onChange={(event) => {

        setSearchValue(event.target.value);
        
      }} />
      <button onClick={searchButton}>Search</button>


    </>

  )


}

export default SearchBar;