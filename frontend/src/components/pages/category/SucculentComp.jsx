import { Grid } from "@mui/material"
import { outdoor } from "../../../data"
import PagesTopComp from "../../reusable/PagesTopComp"
import CardComp from "../card/CardComp"


const SucculentComp = () => {
  return (
    <>
    <PagesTopComp name={"Succulent"} pageName={"Succulent"} pagePath={"/succulent"} />
    <h1 className="text-center">Succulent</h1>
            <Grid container columns={12} spacing={2}>
            { outdoor.map((item,index)=>(
            <CardComp key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} description={item.description} addToCartBtn={item.addToCartBtn} viewBtn={item.viewBtn} />
          ))}
            </Grid>
    </>
  )
}

export default SucculentComp
