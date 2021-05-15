import React from "react";
import { useState, useEffect } from "react";
import InvokeService from "../InvokeService";
import Countries from "./Countries";
import Summary from "./Summary";
import { Message, Table } from 'semantic-ui-react';

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
                <Message info style={{textAlign: "center"}}>
                  <Message.Header>Covid-19 Tracker</Message.Header>
                  <p>
                    Covid-19 Tracker showing the holistic view of the current situation
                  </p>
                </Message>
                <Summary global={global} currentDate={currentDate}/>
                  <Table celled>
                      <Table.Header>
                        <Table.Row>
                              <Table.HeaderCell>Country</Table.HeaderCell>
                              <Table.HeaderCell>New Confirmed</Table.HeaderCell>
                              <Table.HeaderCell>New Deaths</Table.HeaderCell>
                              <Table.HeaderCell>New Recovered</Table.HeaderCell>
                              <Table.HeaderCell>Total Confirmed</Table.HeaderCell>
                              <Table.HeaderCell>Total Deaths</Table.HeaderCell>
                              <Table.HeaderCell>Total Recovered</Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Table.Body>
                          {countries.map(country => {
                              return <Countries countries={country} key={country.CountryCode}/>
                          })}
                      </Table.Body>
                  </Table>    
            </div>
          )}
          </div>
      );
};
export default Details;