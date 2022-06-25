import axios from "axios";
import { useState } from "react";

// This is called as an functional expression.
const App = () => {
  const [chosenLevel, setChosenLevel] = useState(null);

  const getRandomWords = () => {
    const options = {
      method: "GET",
      url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
      params: { level: "3", area: "sat" },
      headers: {
        "X-RapidAPI-Key": "2d74103165msh55bc962c9e4d63fp1bd12ajsn21a55e1d6325",
        "X-RapidAPI-Host": "twinword-word-association-quiz.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(chosenLevel);

  return (
    <div className="App">
      <select
          name="levels"
          id="levels" value={chosenLevel}
          onChange={(e) => setChosenLevel(e.target.value)}
      >
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </select>
    </div>
  );
};

export default App;
