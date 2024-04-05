import { useEffect, useState } from "react";
import GetPlayerCard from "./getPlayerCard";



const GetSearch = ({ search, playerList, setPlayerDeets, baseURL, getAllPlayers, setSearch}) => {

  const [filteredList, setFilteredList] = useState();



  useEffect(() => {
    setFilteredList(playerList.filter((currentObject) => {
      return currentObject.name.toLowerCase().includes(search.toLowerCase());
    }))

  }, [search])

  console.log(filteredList);







  return (
    <>
      <h1>search for: "{search}"</h1>
      <button onClick={console.log('clicked')}>back -cant figure it out :C</button>

      {filteredList ?
        <ul>
          {
            filteredList.map((currentObject, index) => {
              return <GetPlayerCard key={index} currentObject={currentObject} setPlayerDeets={setPlayerDeets} baseURL={baseURL} getAllPlayers={getAllPlayers} />
            })

          }
        </ul>
        : null
      }
    </>
  )
}

export default GetSearch;