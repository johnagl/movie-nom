import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "./components/TabPanel";
import MovieSearch from "./components/MovieSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    margin: "auto"
  },
  tab: {
    minWidth: "20em"
  }
}));

export default function App() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [movieTitle, setMovieTitle] = useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeMovieTitle = (event) => {
    setMovieTitle(event.target.value);
    console.log(`movieTitle ${movieTitle}`);
  }

  const handleSearchMovie = async () => {
    let movies = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=da6a286f&s=batman');
    let result = await movies.json();
    console.log(`result ${JSON.stringify(result)}`);
  }

  return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs className={classes.tabs} value={value} onChange={handleChange}>
            <Tab className={classes.tab} label="Movie Search" />
            <Tab className={classes.tab} label="Nominations"  />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <MovieSearch handleSearchMovie={handleSearchMovie} handleChangeMovieTitle={handleChangeMovieTitle}></MovieSearch>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Nominations
        </TabPanel>
      </div>
  );
}
