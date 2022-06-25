import axios from 'axios';


// This is called as an functional expression.
const App = () => {

  const options = {
    method: "GET",
    url: "https://twinword-word-association-quiz.p.rapidapi.com/type1/",
    params: { level: "3", area: "sat" },
    headers: {
      "X-RapidAPI-Key": "2d74103165msh55bc962c9e4d63fp1bd12ajsn21a55e1d6325",
      "X-RapidAPI-Host": "twinword-word-association-quiz.p.rapidapi.com",
    },
  };

  axios.request(options).then((response) => {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

  return (
    <div className="App"></div>
  )
};

export default App
