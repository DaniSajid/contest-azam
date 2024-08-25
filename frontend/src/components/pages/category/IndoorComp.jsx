import { Grid } from "@mui/material"
import { indoor } from "../../../data"
import PagesTopComp from "../../reusable/PagesTopComp"
import CardComp from "../card/CardComp"


const IndoorComp = () => {
  return (
 <>
 <PagesTopComp name={"Indoor"} pageName={"Indoor"} pagePath={"/indoor"} />
     <h1 className="text-center">Indoor</h1>
            <Grid container columns={12} spacing={2}>
            { indoor.map((item,index)=>(
            <CardComp key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} description={item.description} addToCartBtn={item.addToCartBtn} viewBtn={item.viewBtn} />
          ))}
            </Grid>
 </>
  )
}

export default IndoorComp
