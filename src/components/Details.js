import { Container, Chip } from "@mui/material"
import './Details.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 'auto',
    marginTop: '110px',
    background: 'rgba(233, 0, 0, 0.15)',
    borderRadius: '5px',
  },
  chip: {
    margin: '10px'
  }
});


const Details = ({ selected }) => {

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className="parent-div">
        <img className='details-image' src={selected.show.image.original} alt='' />
        <div className='details-content'>
          <h2 className='details-title'>{selected.show.name}</h2>
          <p className="details-rating"><span><i className="fa-solid fa-star"></i></span>{!selected.show.rating.average ? "Not Rated" : selected.show.rating.average}</p>
          <p className="details-summary">{selected.show.summary}</p>
          <hr className="style14"></hr>
          <p className="details-language">Language: {selected.show.language}</p>
          <hr className="style14"></hr>
          <Chip className={classes.chip} color="error" label={selected.show.type} />
          <Chip className={classes.chip} color="error" label={selected.show.status} />
          <hr className="style14"></hr>
          <p className="details-language"><span><i className="fa-regular fa-calendar-days"></i></span>Premiered on: {selected.show.premiered}</p>
          <hr className="style14"></hr>
          <a href={selected.show.officialSite} className="details-website"><span><i className="fa-solid fa-link"></i></span>Official Website</a>
        </div>
      </div>
    </Container>
  )
}

export default Details