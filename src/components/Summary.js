import React from "react";
import { useEffect } from "react";
const Summary = (props) => {
    useEffect(() => {
        
      }, []);


    return (
        <div class="container justify-content-center">
                <div className="row">
                    <div className="col-3 mx-auto alert alert-primary border border-primary">
                        <h6>New Confirmed</h6>
                        <h5>{props.global.NewConfirmed}</h5>
                    </div>
                    <div className="col-3 mx-auto alert alert-secondary border border-primary">
                        <h6>Total Confirmed</h6>
                        <h5>{props.global.TotalConfirmed}</h5>
                    </div>
                    <div className="col-3 mx-auto alert alert-success border border-primary">
                        <h6>New Deaths</h6>
                        <h5>{props.global.NewDeaths}</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 mx-auto alert alert-danger border border-primary">
                        <h6>Total Deaths</h6>
                        <h5>{props.global.TotalDeaths}</h5>
                    </div>
                    <div className="col-3 mx-auto alert alert-warning border border-primary">
                        <h6>New Recovered</h6>
                        <h5>{props.global.NewRecovered}</h5>
                    </div>
                    <div className="col-3 mx-auto alert alert-info border border-primary">
                        <h6>Total Recovered</h6>
                        <h5>{props.global.TotalRecovered}</h5>
                    </div>
                </div>
            </div>
        
      );
};
export default Summary;