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
      padding: 0,
  },
  cardActionsRoot: {
      padding: 0,
  }
});

const MovieMediaCard = ({title, poster}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={poster}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContentRoot}>
          <Typography variant="body2" component="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Year
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActionsRoot}>
            <Button size="small" color="primary" disabled={true}>
                Nominate
            </Button>
            <Button size="small" color="primary" disabled={false}>
                Remove
            </Button>
        </CardActions>
    </Card>
  );
}

export default MovieMediaCard;