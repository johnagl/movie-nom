import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./components/TabPanel";
import MovieSearch from "./components/MovieSearch";
import Movies from "./components/Movies";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    margin: "auto"
  },
  tab: {
    minWidth: "20em"
  },
  appBar: {
    backgroundColor: "#000000"
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [movieTitle, setMovieTitle] = useState('');
  const [movies, setMovies] = useState([]);
  const [nominations, setNomination] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onKeyDown = async (event) => {
    if (event.key === 'Enter') {
      await handleSearchMovie();
    }
  }

  const handleChangeMovieTitle = (event) => {
    setMovieTitle(event.target.value);
  }

  const handleSearchMovie = async () => {
    let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDBAPI_KEY}&s=${movieTitle}`);
    let result = await response.json();
    if (result["Response"]) {
      setMovies(result["Search"]);
    }
  }

  const addNomination = (movie) => {
    if (!nominations.some(m => m["imdbID"] === movie["imdbID"])) {
      let newNominations = [...nominations];
      newNominations.push(movie);
      setNomination(newNominations);
    }
  }

  const removeNomination = (movie) => {
    let newNominations = [...nominations];
    let filteredNominations = newNominations.filter((m) => {
      return movie["imdbID"] !== m["imdbID"]; 
    });
    setNomination(filteredNominations);
  }

  return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Tabs className={classes.tabs} value={value} onChange={handleChange}>
            <Tab className={classes.tab} label="Movie Search" />
            <Tab className={classes.tab} label="Nominations"  />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MovieSearch onKeyDown={onKeyDown} handleSearchMovie={handleSearchMovie} handleChangeMovieTitle={handleChangeMovieTitle}></MovieSearch>
          <Movies nominations={nominations} addNomination={addNomination} removeNomination={removeNomination} movies={movies}></Movies>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Movies nominations={nominations} addNomination={addNomination} removeNomination={removeNomination} movies={nominations}></Movies>
        </TabPanel>
      </div>
  );
}
