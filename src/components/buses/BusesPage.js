import PageTemplate from "../templates/Template";
import BusesTable from "./BusesTable";
import BusesGrid from "./BusesGrid";
import React from "react";

const BusesPage = (props) => {
    return(
    <PageTemplate title="Buses List">
        {/* <BusesTable/> */}
        <BusesGrid />
    </PageTemplate>)
}
export default BusesPage;
