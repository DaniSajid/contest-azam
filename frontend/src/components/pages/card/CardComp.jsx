import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid, Rating } from '@mui/material'
import BtnComp from '../../reusable/BtnComp';


const CardComp = ({key,image ,name,rating,price,description,addToCartBtn,viewBtn}) => {
  return (

    <Grid key={key} item lg={3} md={4} sm={6} xs={12}>
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="190"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Rating name="size-small" defaultValue={rating} size="small" precision={0.5} />
        <Typography  variant="button" display="block" gutterBottom>
         Price : {price}$
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <BtnComp size={"small"} name={addToCartBtn} />
      <BtnComp size={"small"} name={viewBtn} />
    </CardActions>
  </Card>
  </Grid>


  )
}

export default CardComp
