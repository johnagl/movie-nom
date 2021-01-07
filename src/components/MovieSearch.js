import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
}));


const MovieSearch = ({handleChangeMovieTitle, handleSearchMovie, onKeyDown}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Movie Title"
                inputProps={{ 'aria-label': 'Input website url' }}
                onChange={handleChangeMovieTitle}
                onKeyDown={onKeyDown}
            />
            <IconButton onClick={handleSearchMovie} className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}

export default MovieSearch;