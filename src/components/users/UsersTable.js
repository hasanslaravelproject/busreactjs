import MaterialTable from 'material-table';
import React, {useEffect, useState} from 'react';
import tableIcons from '../templates/TableIcons';
import getColumns from './UsersColumns';
import Edit from "@material-ui/icons/Edit";
import { Switch } from "@material-ui/core";
import {withRouter} from "react-router";
import {AddBox} from "@material-ui/icons";
import {deleteUsers, getUsers} from "../../repo/usersRepo";
import { Loading } from "../templates/Loading";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Demo from '../templates/demo'
/*
Documentation on developing the Material-Table can be found at https://material-table.com/
*/

const UsersTable = (props) => {
    const history = props.history;
    const [columns, setColumns] = useState(getColumns({}));
    const [loading, setLoading] = useState(false);
    const [users,setUsers]=useState([])
    //Here we call delete
    const handleRowDelete = (oldData, resolve) => {
    setLoading(true);
        deleteUsers(oldData.id)
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
            const { data }=await getUsers(0,100,"");
            setUsers(data)
        }
        fetchApi()
        
    },[])
    const data=users;


  
   
    return (

    <div className="d-flex flex-wrap h-100 justify-content-center align-items-center w-100">
  <Demo data={data}/>
    </div>);
}
export default withRouter(UsersTable);
