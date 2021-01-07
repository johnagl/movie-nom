import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MovieMediaCard from "./MovieMediaCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  gridItem: {
      width: 250,
      height: 300,
      minHeight: 300
  },
}));


const Movies = ({movies, addNomination, removeNomination, nominations}) => {
    const classes = useStyles();
    return (
      <Grid container justify="flex-start" spacing={3}>
      {movies.map((movie) => (
        <Grid className={classes.gridItem} key={movie["imdbID"]} item>
          <MovieMediaCard removeNomination={removeNomination} nominated={nominations.some(m => m["imdbID"] === movie["imdbID"])} addNomination={addNomination} movie={movie}></MovieMediaCard>
        </Grid>
      ))}
    </Grid>
    );
}

export default Movies;
