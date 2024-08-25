import { useState } from "react";
import {
  Box,
  Tab,
  AppBar,
  useMediaQuery,
  tabsClasses,
  Tabs,
  Grid,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import CarouselComp from "../carousel/CarouselComp";
import CardComp from "./card/CardComp";
import { flowering, indoor, outdoor, succulent } from "../../data";
import { Link } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const HomeComp = () => {
  const theme = useTheme();
  const [value, setValue] = useState("0");
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CarouselComp />
      <div className="container px-4 py-2" id="hanging-icons">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <LocalShippingIcon sx={{ fontSize: 40 }} />
            </div>
            <div>
              <h3 className="fs-4 text-body-emphasis">All Pakistan Shipping</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <PaidIcon sx={{ fontSize: 40 }} />
            </div>
            <div>
              <h3 className="fs-4 text-body-emphasis">Money Back Gurantee</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-body-emphasis d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <WorkHistoryIcon sx={{ fontSize: 40 }} />
            </div>
            <div>
              <h3 className="fs-2 text-body-emphasis">24/7 Support</h3>
              <p>
                Paragraph of text beneath the heading to explain the heading.
                We'll add onto it with another sentence and probably just keep
                going until we run out of words.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              scrollButtons="auto"
              aria-label="scrollable prevent tabs example"
              variant={isSmallScreen ? "scrollable" : "standard"}
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
              centered
            >
              <Tab label="Indoor" value="0" {...a11yProps(0)} />
              <Tab label="Outdoor" value="1" {...a11yProps(1)} />
              <Tab label="Succulent" value="2" {...a11yProps(2)} />
              <Tab label="Flowering Shrubs" value="3" {...a11yProps(3)} />
            </Tabs>
          </AppBar>
          <TabPanel value="0" dir={theme.direction}>
            <h1 className="text-center">Indoor</h1>
            <Grid container columns={12} spacing={2}>
            { indoor.map((item,index)=>(
            <CardComp key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} description={item.description} addToCartBtn={item.addToCartBtn} viewBtn={item.viewBtn} />
          ))}
            </Grid>
          </TabPanel>
          <TabPanel value="1" dir={theme.direction}>
          <h1 className="text-center">Outdoor</h1>
          <Grid container columns={12} spacing={2}>
          { outdoor.map((item,index)=>(
            <CardComp key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} description={item.description} addToCartBtn={item.addToCartBtn} viewBtn={item.viewBtn} />
          ))}
            </Grid>
          </TabPanel>
          <TabPanel value="2" dir={theme.direction}>
          <h1 className="text-center">Succulent</h1>
          <Grid container columns={12} spacing={2}>
          { succulent.map((item,index)=>(
            <CardComp key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} description={item.description} addToCartBtn={item.addToCartBtn} viewBtn={item.viewBtn} />
          ))}
            </Grid>
          </TabPanel>
          <TabPanel value="3" dir={theme.direction}>
          <h1 className="text-center">Flowering Shrubs</h1>
          <Grid container columns={12} spacing={2}>
          { flowering.map((item,index)=>(
            <CardComp key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} description={item.description} addToCartBtn={item.addToCartBtn} viewBtn={item.viewBtn} />
          ))}
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
      <div className="container my-5">
            <h3 className="mb-4">Our Top Services</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-6 ">
                                <img src="s1.jpg" className="img-fluid rounded-start" alt="Landscaping" />
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">Landscaping</h5>
                                    <p className="card-text">Lawn Park Housing<br /> Society</p>
                                    <p className="text-success">Discount <br /><strong>20% Off</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card my-3">
                        <div className="row g-0">
                            <div className="col-6 ">
                                <img src="s2.jpg" className="img-fluid rounded-start" alt="Lawn Making" />
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">Lawn Making</h5>
                                    <p className="card-text">Restoration Plantation</p>
                                    <p>Starting From <br /><strong className="text-success">10000 Rs</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-6">
                                <img src="s3.jpg" className="img-fluid rounded-start" alt="Office Decor" />
                            </div>
                            <div className="col-6 d-flex align-items-center">
                                <div className="card-body">
                                    <h5 className="card-title">Office Decor</h5>
                                    <p className="card-text">Rental Plants<br />Follow up</p>
                                    <p className="text-success">Discount <br /><strong>10% Off</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <h3 className="mb-4">Our Top Categories</h3>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="card category-card">
                        <img src="indoor/indoor_plant_1.png" className="card-img-top" alt="Indoor Plants" />
                        <div className="card-body">
                            <p className="card-text">Indoor Plants</p>
                            <Link to={"/indoor"} className="btn btn-success">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="card category-card">
                        <img src="outdoor/outdoor_plant_1.jpg" className="card-img-top" alt="Outdoor Plants" />
                        <div className="card-body">
                            <p className="card-text">Outdoor Plants</p>
                            <Link to={"/outdoor"} className="btn btn-success">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="card category-card">
                        <img src="succulent/succulent_plant_1.jpg" className="card-img-top" alt="Flower Plants" />
                        <div className="card-body">
                            <p className="card-text">Succulent</p>
                            <Link to={"/succulent"} className="btn btn-success">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="card category-card">
                        <img src="floweringshrubs/flowering_shrub_1.jpeg" className="card-img-top" alt="Concrete Pots" />
                        <div className="card-body">
                            <p className="card-text">Flowering Shrubs</p>
                            <Link to={"/floweringshrubs"} className="btn btn-success">View All</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default HomeComp;
