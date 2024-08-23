import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid, Rating } from '@mui/material'
import BtnComp from '../../reusable/BtnComp';

const CardComp = () => {
  return (
    <Grid  item lg={3} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Rating name="size-small" defaultValue={2} size="small" />
        <Typography  variant="button" display="block" gutterBottom>
         Price : 20$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <BtnComp size={"small"} name={"Add to Cart"} />
      <BtnComp size={"small"} name={"View"} />
    </CardActions>
  </Card>
  </Grid>

  )
}

export default CardComp
