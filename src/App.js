import "./App.css";
import { useState, useEffect } from "react";
import JobCard from "./Jobcards";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function App() {
  const [data, setData] = useState([]);

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: 10,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };


  const getData = async () => {
   
    await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        setData(result);
       
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
     
     
      <JobCard data={data.jdList} />
   
  
    </div>
  );
}

export default App;
