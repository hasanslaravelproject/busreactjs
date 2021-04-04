import { keys } from '@material-ui/core/styles/createBreakpoints';
import React from 'react';

// import { Container } from './styles';

export default function Demo(props) {
    const data=props.data;
  
  

  return (
    <div className="d-flex flex-wrap h-100 justify-content-center align-items-center w-100">
   {data.map((val,ind)=>(
      
           <div className="Card shadow w-25 p-3 rounded">
           <div className="d-flex flex-column align-items-start">
         
   {Object.keys(val).map((item,key)=>(  <div className="mb-2"><span className="label">{item}</span>{" : "} <span>{Object.values(val)[key]}</span></div>))}
             
               </div>
       </div>
   ))}
  


    </div>
  );
}
