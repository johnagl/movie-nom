import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    height: "100%",
  },
  media: {
    height: 180
  },
  cardContentRoot: {
      padding: "4.5px 5px",
  },
  cardActionsRoot: {
      padding: 0,
  }
});

const MovieMediaCard = ({addNomination, movie, nominated, removeNomination }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={movie["Poster"]}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContentRoot}>
          <Typography variant="body2" component="h6">
            {movie["Title"]}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              {movie["Year"]}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActionsRoot}>
            <Button onClick={() => addNomination(movie)}size="small" color="primary" disabled={nominated}>
                Nominate
            </Button>
            <Button onClick={() => removeNomination(movie)} size="small" color="primary" disabled={!nominated}>
                Remove
            </Button>
        </CardActions>
    </Card>
  );
}

export default MovieMediaCard;