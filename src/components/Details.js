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
                <h1 className="header">Covid-19 Tracker</h1>
                <Summary global={global} currentDate={currentDate}/>
                <table>
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>New Confirmed</th>
                            <th>New Deaths</th>
                            <th>New Recovered</th>
                            <th>Total Confirmed</th>
                            <th>Total Deaths</th>
                            <th>Total Recovered</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map(country => {
                            return <Countries countries={country} key={country.CountryCode}/>
                        })}
                    </tbody>
                </table>
            </div>
          )}
          </div>
      );
};
export default Details;