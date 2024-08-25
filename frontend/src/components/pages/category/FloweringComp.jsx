import { Grid } from "@mui/material"
import { flowering } from "../../../data"
import PagesTopComp from "../../reusable/PagesTopComp"
import CardComp from "../card/CardComp"

const FloweringComp = () => {
  return (
   <>
   <PagesTopComp name={"Flowering Shrubs"} pageName={"Flowering Shrubs"} pagePath={"/floweringshrubs"} />
     <h1 className="text-center">Flowering Shrub</h1>
            <Grid container columns={12} spacing={2}>
            { flowering.map((item,index)=>(
            <CardComp key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} description={item.description} addToCartBtn={item.addToCartBtn} viewBtn={item.viewBtn} />
          ))}
            </Grid>
   </>
  )
}

export default FloweringComp
