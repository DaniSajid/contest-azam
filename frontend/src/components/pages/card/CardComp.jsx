import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions, Grid, Rating } from '@mui/material';
import BtnComp from '../../reusable/BtnComp';
import { useContext } from 'react';
import { CartContext } from '../../context/ContextComp';

const CardComp = ({ id, image, title, rating, price, description, addToCartBtn, viewBtn }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = {
      id,
      image,
      name: title,
      rating,
      price,
      description,
    };
    addToCart(product);
  };

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Rating name="size-small" value={rating} size="small" precision={0.5} readOnly />
            <Typography variant="button" display="block" gutterBottom>
              Price: {price}$
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <BtnComp size={"small"} name={addToCartBtn} onClick={handleAddToCart} />
          <BtnComp size={"small"} name={viewBtn} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardComp;
