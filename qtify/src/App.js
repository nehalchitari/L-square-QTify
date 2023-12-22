import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";

function App() {
  const [searchData, useSearchData]=useState();
  const [data, setData]=useState({});

  const generateData=(key, source)=>{
    source().then((data)=>{
      setData((prevData)=>{
        return {...prevData, [key]:data};
      })
    })
  }

  useEffect(()=>{
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  },[])

  const {topAlbums=[], newAlbums=[], songs=[]}=data;
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        <Outlet context={{data:{topAlbums, newAlbums, songs}}}/>
      </StyledEngineProvider>
    </>
  );
}

export default App;
