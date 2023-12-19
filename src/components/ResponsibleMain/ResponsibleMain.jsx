import { Pagination } from "@mui/material";
import BasicCard from "../Card/Card";
import "./ResponsibleMain.css";

function ResponsibleMain() {
  return (
    <div>
      <div className='headingsBox-res'>
        <h1 className="heading">All customers</h1>
        <p className="activeHeading">Active members</p>
        <input type="text" placeholder='Search' className='search' />
      </div>
      <br />
      <BasicCard
        status="active"
        statusText="Active"
        name="Jane Cooper"
        company="Microsoft"
        number="(225) 555-0118"
        numberHref="2255550118"
        email="jane@microsoft.com"
        country="United States"
      />
      <br />
      <BasicCard
        status="inactive"
        statusText="Inactive"
        name="Floyd Miles"
        company="Yahoo"
        number="(205) 555-0100"
        numberHref="2055550100"
        email="floyd@yahoo.com"
        country="Kiribati"
      />
      <br />
      <BasicCard
        status="inactive"
        statusText="Inactive"
        name="Ronald Richards"
        company="Adobe"
        number="(302) 555-0107"
        numberHref="3025550107"
        email="ronald@adobe.com"
        country="Israel"
      />
      <br />
      <BasicCard
        status="active"
        statusText="Active"
        name="Marvin McKinney"
        company="Tesla"
        number="(252) 555-0126"
        numberHref="2525550126"
        email="marvin@tesla.com"
        country="Iran"
      />
      <br />
      <BasicCard
        status="active"
        statusText="Active"
        name="Jerome Bell"
        company="Google"
        number="(629) 555-0129"
        numberHref="629550129"
        email="jerome@google.com"
        country="Réunion"
      />
      <br />
      <BasicCard
        status="active"
        statusText="Active"
        name="Kathryn Murphy"
        company="Microsoft"
        number="(406) 555-0120"
        numberHref="4065550120"
        email="kathryn@microsoft.com"
        country="Curaçao"
      />
      <br />
      <BasicCard
        status="active"
        statusText="Active"
        name="Jacob Jones"
        company="Yahoo"
        number="(208) 555-0112"
        numberHref="2085550112"
        email="jacob@yahoo.com"
        country="Brazil"
      />
      <br />
      <BasicCard
        status="inactive"
        statusText="Inactive"
        name="Kristin Watson"
        company="Facebook"
        number="(704) 555-0127"
        numberHref="7045550127"
        email="kristin@facebook.com"
        country="Åland Islands"
      />
      <br />
      <p className="db-pagination-text-res">
        Showing data 1 to 8 of 256K entries
      </p>
      <br />
      <Pagination
        count={40}
        color="secondary"
        shape="rounded"
        className="paginationRes"
      />
    </div>
  );
}
export default ResponsibleMain;
