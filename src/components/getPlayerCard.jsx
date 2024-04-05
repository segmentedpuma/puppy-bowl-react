

const GetPlayerCard = ({currentObject, setPlayerDeets, baseURL, getAllPlayers}) => {
  

  const getDetails = () => {
    setPlayerDeets(currentObject);
    
  }

  const removePup = async () => { 
    try {
      const response = await fetch(`${baseURL}/players/${currentObject.id}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      console.log(result);
    }
    catch (error) {
      console.log(error);
    }
    getAllPlayers();

  }





return (
  
<div>
  <h3>{currentObject.name}</h3>
    
    <p></p>
    <img src={currentObject.imageUrl} width={"200px"} alt="" />
    <button onClick={getDetails}>see details</button>
    <button onClick={removePup}>remove puppy</button>
      
    
</div>
  
)
}

export default GetPlayerCard;