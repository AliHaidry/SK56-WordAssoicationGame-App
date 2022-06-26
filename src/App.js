import axios from "axios";
import { useState } from "react";
import {useEffect} from "react"

// This is called as an functional expression.
const App = () => {
  const [chosenLevel, setChosenLevel] = useState('2');
  const [words, setWords] = useState(null)

  const getRandomWords = () => {
    const options = {
      method: "GET",
      url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
      params: { level: chosenLevel, area: "sat" },
      headers: {
        "X-RapidAPI-Key": "2d74103165msh55bc962c9e4d63fp1bd12ajsn21a55e1d6325",
        "X-RapidAPI-Host": "twinword-word-association-quiz.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setWords(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(words && words.quizlist);


  useEffect(() => {
    if (chosenLevel) getRandomWords()
  }, [chosenLevel]);

  return (
    <div className="App">

    {!chosenLevel && <div className="level-selector">
      <h1>Word Association App</h1>
      <p>Select Your Level to Start</p>
    <select
          name="levels"
          id="levels" value={chosenLevel}
          onChange={(e) => setChosenLevel(e.target.value)}
      >
        <option value={null}>Select a Level</option>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </select>
      </div>}
      
      {chosenLevel && words && <div className="question-area">
        <h1>Welcome to Level: {chosenLevel}</h1>

        {words.quizlist.map(question => (
        <div className="question-box">
            <p>{question.correct}</p>
        </div>
        ))}


      </div>}

    

      
    </div>
  );
};

export default App;
