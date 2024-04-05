import { useState } from "react";


const RenderForm = ({ baseURL, getAllPlayers}) => {

  const [inputName, setInputName] = useState("");
  const [inputBreed, setInputBreed] = useState("");
  // const [inputBench, setInputBench] = useState();
  const [imageUrl, setInputImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${baseURL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputName,
          breed: inputBreed,
          // status: inputBench,
          imageUrl: imageUrl,
      })
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
    <form action="" onSubmit={handleSubmit}>
      <h2>add a thingy</h2>
      <label htmlFor="inputName">Name:</label>
      <input type="text" name="inputName" id="inputName" onChange={(event) => {
        setInputName(event.target.value);
      }} />

      <br />
      <label htmlFor="inputBreed">Breed:</label>
      <input type="text" name="inputBreed" id="inputBreed" onChange={(event) => {
        setInputBreed(event.target.value);
      }} />

      {/* <br />
      <label htmlFor="inputBench">Bench Status:</label>
      <input type="text" name="inputBench" id="inputBench" onChange={(event) => {
        setInputBench(event.target.value);
      }} /> */}
      <br />
      <label htmlFor="inputImage">Image URL:</label>
      <input type="text" name="inputImage" id="inputImage" onChange={(event) => {
        setInputImageUrl(event.target.value);
      }} />
      <br />
      <button>submit</button>


    </form>
  )

}

export default RenderForm;