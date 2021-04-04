import MaterialTable from 'material-table';
import React, {useEffect, useState} from 'react';
import tableIcons from '../templates/TableIcons';
import getColumns from './BusesColumns';
import Edit from "@material-ui/icons/Edit";
import { Switch } from "@material-ui/core";
import {withRouter} from "react-router";
import {AddBox} from "@material-ui/icons";
import {deleteBuses, getBuses} from "../../repo/busesRepo";
import { Loading } from "../templates/Loading";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import history from '../../history';
import Grid from "@material-ui/core/Grid";


/*
Documentation on developing the Material-Table can be found at https://material-table.com/
*/

const BusesTable = (props) => {
        // just for UI test for now. 
        const cards = [
            "first",
            "second",
            "third",
            "fourth",
            "five",
            "buses",
            "company"
        ]

    const history = props.history;
    const [columns, setColumns] = useState(getColumns({}));
    const [loading, setLoading] = useState(false);
    //Here we call delete
    const handleRowDelete = (oldData, resolve) => {
    setLoading(true);
        deleteBuses(oldData.id)
            .then(res => {
                resolve();
                setLoading(false);
            })
            .catch(error => {
                resolve();
                setLoading(false);
            })
    }
    


    return (
        <Grid container direction="row"  justify="center" alignItems="center">
            {
                cards.map((_, i) => {
                    return (
                        <Card className={""} style={{ "margin": "20" }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="100"
                                image="https://picsum.photos/200/80.jpg"
                                title="Contemplative Reptile"
                                />
                        
                                <CardContent style={{textOverflow: "ellipsis", width: '13rem'}}>
                                    <Typography gutterBottom variant="h6" component="h6">
                                        {"row title "}
                                    </Typography>
                                </CardContent>

                            </CardActionArea>

                            <CardActions justify={"flex-end"} alignContent={"flex-end"}>
                                <Button style={{width: '100%'}}variant={"contained"} color="primary" onClick={() => console.log("click")}>View</Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </Grid>
    );
}
export default withRouter(BusesTable);
