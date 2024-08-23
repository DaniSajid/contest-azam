import PagesTopComp from "../reusable/PagesTopComp"
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PaidIcon from "@mui/icons-material/Paid";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

const AboutComp = () => {
  return (
   <>
   <PagesTopComp name={"About Us"} pageName={"About Us"} pagePath={"/about"} />
   <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">About Us</h1>
        <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        </div>
    </div>
    <div className="container px-4 py-2" id="hanging-icons">
    <h2 className="pb-2 border-bottom text-center">Customer Services</h2>
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
   </>
  )
}

export default AboutComp
