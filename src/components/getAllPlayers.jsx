import { useEffect, useState } from "react";
import GetPlayerCard from "./getPlayerCard";
import GetPlayerDeets from "./getPlayerDeets.jsx";
import RenderForm from "./getForm.jsx";
import SearchBar from "./searchBar.jsx";
import GetSearch from "./getSearch.jsx";

const baseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FTQ`


const GetAllPlayers = () => {
  const [playerList, setPlayerList] = useState([]);
  const [playerDeets, setPlayerDeets] = useState({});
  const [search, setSearch] = useState();


  const getAllPlayers = async () => {
    try {
      const response = await fetch(`${baseURL}/players`);
      const json = await response.json();

      setPlayerList(json.data.players);


    }
    catch (error) {
      console.log(error);
    }

  }




  useEffect(() => {
    getAllPlayers();
  }, []);



  return (

    <>
      {playerDeets.name ? <GetPlayerDeets playerDeets={playerDeets} setPlayerDeets={setPlayerDeets} /> :
        <>
          {search ? <GetSearch search={search} playerList={playerList} setPlayerDeets={setPlayerDeets} baseURL={baseURL} getAllPlayers={getAllPlayers} setSearch={setSearch}/> :

            <>
              <SearchBar setSearch={setSearch} search={search}></SearchBar>
              <RenderForm baseURL={baseURL} getAllPlayers={getAllPlayers} />
              <ul>
                {playerList.map((currentObject, index) => {


                  return <GetPlayerCard key={index} currentObject={currentObject} setPlayerDeets={setPlayerDeets} baseURL={baseURL} getAllPlayers={getAllPlayers} />

                })}
              </ul>
            </>
          }
        </>
      }
    </>
  )
}
export default GetAllPlayers;