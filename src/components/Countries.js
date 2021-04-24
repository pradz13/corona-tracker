import React from "react";
import { useEffect } from "react";
const Countries = (props) => {
    useEffect(() => {
        
      }, []);


    return (
        <tr>
            <td>{props.countries.Country}</td>
            <td>{props.countries.NewConfirmed}</td>
            <td>{props.countries.NewDeaths}</td>
            <td>{props.countries.NewRecovered}</td>
            <td>{props.countries.TotalConfirmed}</td>
            <td>{props.countries.TotalDeaths}</td>
            <td>{props.countries.TotalRecovered}</td>
        </tr>
      );
};
export default Countries;