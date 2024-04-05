
const GetPlayerDeets = ({playerDeets, setPlayerDeets}) => {
  console.log(playerDeets);
 
return(
  <>
    <h1>{playerDeets.name}</h1>
    <p>{playerDeets.breed}</p>
    <p>{playerDeets.status}</p>
    <button onClick={() => {setPlayerDeets({})}}>back</button>
  </>
)
}
export default GetPlayerDeets;