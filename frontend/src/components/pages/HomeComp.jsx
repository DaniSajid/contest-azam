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
            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            </Grid>
          </TabPanel>
          <TabPanel value="1" dir={theme.direction}>
          <h1 className="text-center">Outdoor</h1>
          <Grid container columns={12} spacing={2}>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            </Grid>
          </TabPanel>
          <TabPanel value="2" dir={theme.direction}>
          <h1 className="text-center">Succulent</h1>
          <Grid container columns={12} spacing={2}>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            </Grid>
          </TabPanel>
          <TabPanel value="3" dir={theme.direction}>
          <h1 className="text-center">Flowering Shrubs</h1>
          <Grid container columns={12} spacing={2}>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            <CardComp/>
            </Grid>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default HomeComp;
