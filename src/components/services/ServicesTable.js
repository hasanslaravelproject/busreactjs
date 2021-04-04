import MaterialTable from 'material-table';
import React, {useEffect, useState} from 'react';
import tableIcons from '../templates/TableIcons';
import getColumns from './ServicesColumns';
import Edit from "@material-ui/icons/Edit";
import { Switch } from "@material-ui/core";
import {withRouter} from "react-router";
import {AddBox} from "@material-ui/icons";
import {deleteServices, getServices} from "../../repo/servicesRepo";
import { Loading } from "../templates/Loading";
import Demo from '../templates/demo'
/*
Documentation on developing the Material-Table can be found at https://material-table.com/
*/

const ServicesTable = (props) => {
    const history = props.history;
    const [columns, setColumns] = useState(getColumns({}));
    const [loading, setLoading] = useState(false);
    const [services, setServices] = useState([]);

    //Here we call delete
    const handleRowDelete = (oldData, resolve) => {
    setLoading(true);
        deleteServices(oldData.id)
            .then(res => {
                resolve();
                setLoading(false);
            })
            .catch(error => {
                resolve();
                setLoading(false);
            })
    }

    useEffect(()=>{
        const fetchApi=async()=>{
            const { data }=await getServices(0,100,"");
            setServices(data)
        }
        fetchApi()
        console.log(services)
        
    },[])
    const data=services;
    return (
    <div>
   
   <Demo data={data}/>
    </div>);
}
export default withRouter(ServicesTable);
