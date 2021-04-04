
import React, {useEffect, useState} from 'react';
import './Header_style.css';

const Bus_Schedule_header_form = (props) => {
    const history = props.history;


    const handleSearchForm = (event) => {
        event.preventDefault();        
      let from_city = event.target.from_city.value;
      let to_city = event.target.to_city.value;
      let journey_date = event.target.journey_date.value;
      let return_date = event.target.return_date.value;
      console.log(from_city, to_city, journey_date, return_date);
    }


    return (
    <div>
        <form className="fitlering_form" onSubmit={handleSearchForm}>
            <div className="form-group">
                <label htmlFor="from">From</label>
                <input type="text" name="from_city" className="form-control" id="from" placeholder="Enter City"/>
            </div>
            <div className="form-group">
                <label htmlFor="to">To</label>
                <input type="text" name="to_city" className="form-control" id="to" placeholder="Enter City"/>
            </div>
            <div className="form-row">
                <div className="form-group col-sm-6">
                    <label htmlFor="journey_date">Date of Journey</label>
                    <input type="date" name="journey_date" className="form-control" id="journey_date" placeholder="Pick a date"/>
                </div>
                <div className="form-group col-sm-6">
                    <label htmlFor="return_date">Date of Return (Optional)</label>
                    <input type="date" name="return_date" className="form-control" id="return_date" placeholder="Pick a date"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary"> Search Buses</button>
        </form>
    </div>
    );
}
export default Bus_Schedule_header_form;