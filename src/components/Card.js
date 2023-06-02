import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@mui/material/Chip';
// import { StarBorderOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
    root: {
        margin: '20px',
        cursor: 'pointer'
    },
    media: {
        width: '300px',
        height: "450px"
    },
    chip: {
        margin: '0 10px'
    }
});

export default function MovieCard({ handleClick, movietitle, type, genres, language, status, rating, thumbnail, serial, movies, selected, setSelected }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                onClick={() => handleClick(serial)}
                className={classes.media}
                image={thumbnail}
                sx={{ objectFit: "contain" }}
            />
            <CardContent sx={{ backgroundColor: '#740000', color: 'white' }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {movietitle}
                </Typography>
                <Typography sx={{ marginBottom: '20px' }} variant="body1" component="p">
                    {`Language: ${language}`}
                </Typography>
                <Chip className={classes.chip} color="error" label={type} />
                <Chip className={classes.chip} color="error" label={status} />
                <Chip className={classes.chip} color="error" label={!rating ? 'Not rated' : rating} />
            </CardContent>
        </Card>
    );
}