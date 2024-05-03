import "./App.css";
import { useState, useEffect } from "react";
import JobCard from "./Jobcards";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(6);
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const body = JSON.stringify({
    limit: page,
    offset: 0,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body,
  };
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight 
    ) {
      getData();
    }
 
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  const getData = async () => {
    setIsLoading(true);
    await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        setData(result);
        setPage(page+6);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      
     
      <JobCard data={data.jdList} />
      <br/>
      <Box sx={{ display: 'flex',justifyContent:"center" }}>
      {isLoading && <CircularProgress/>}
    </Box>
  
    </div>
  );
}

export default App;
