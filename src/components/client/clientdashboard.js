import PageTemplate from "../templates/Template";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DashCard from "./clientcard"

const ClinetDashboard = () => {

    return(
    <PageTemplate title="Dashboard">
    <Grid container direction="row"  justify="center" alignItems="center">
    
<ClientCard pagename='companies'/>
   
    </Grid>
    </PageTemplate>)
}
export default ClinetDashboard;