import React from "react";
import { useState, useEffect } from "react";
import InvokeService from "../InvokeService";
import Countries from "./Countries";
import Summary from "./Summary";

const Details = () => {
    useEffect(() => {
        InvokeService.invokeCoronaSummaryApi().then(
          (res) => {
            console.log(res);
            setCountries(res.data.Countries);
            setGlobal(res.data.Global);
            setCurrentDate(res.data.Date);
            setLoading(false);
          },
          (error) => {
            console.log(error);
          }
        );
      }, []);

    const [countries, setCountries] = useState([]);
    const [global, setGlobal] = useState([]);
    const [currentDate, setCurrentDate] = useState(null);
    const [loading, setLoading] = useState(true);


    return (
        <div>
        {loading ? (
            <div>
                Loading.....
            </div>
          ) : (
            <div>
                <h1 className="header alert alert-primary text-center">Covid-19 Tracker</h1>
                <Summary global={global} currentDate={currentDate}/>
                <div className="table-responsive">
                  <table className="table table-hover">
                      <thead>
                          <tr>
                              <th scope="col">Country</th>
                              <th scope="col">New Confirmed</th>
                              <th scope="col">New Deaths</th>
                              <th scope="col">New Recovered</th>
                              <th scope="col">Total Confirmed</th>
                              <th scope="col">Total Deaths</th>
                              <th scope="col">Total Recovered</th>
                          </tr>
                      </thead>
                      <tbody>
                          {countries.map(country => {
                              return <Countries countries={country} key={country.CountryCode}/>
                          })}
                      </tbody>
                  </table>
                </div>      
            </div>
          )}
          </div>
      );
};
export default Details;