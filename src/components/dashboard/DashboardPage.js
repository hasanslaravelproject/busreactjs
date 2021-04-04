import PageTemplate from "../templates/Template";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DashCard from "./DashboardCard"

const DashboardPage = () => {

    const cards = [
        "dashboard",
        "buses"
,"bus_categories"
,"bus_routes"
,"bus_schedules"
,"companies"
,"failed_jobs"
,"migrations"
,"model_has_permissions"
,"model_has_roles"
,"oauth_access_tokens"
,"oauth_auth_codes"
,"oauth_clients"
,"oauth_personal_access_clients"
,"oauth_refresh_tokens"
,"password_resets"
,"permissions"
,"personal_access_tokens"
,"roles"
,"role_has_permissions"
,"seat_classes"
,"services"
,"users"

    ]

    return(
    <PageTemplate title="Dashboard" leftMenu={cards}>
    <Grid container direction="row"  justify="center" alignItems="center">
        {
            cards.map((_, i) => {
                return <DashCard pagename={cards[i]}/>
            })
        }
    
    </Grid>
    </PageTemplate>)
}
export default DashboardPage;

