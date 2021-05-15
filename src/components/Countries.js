import React from "react";
import { useEffect } from "react";
import { Table } from 'semantic-ui-react';
const Countries = (props) => {
    useEffect(() => {
        
      }, []);


    return (
        <Table.Row>
            <Table.Cell>{props.countries.Country}</Table.Cell>
            <Table.Cell>{props.countries.NewConfirmed}</Table.Cell>
            <Table.Cell>{props.countries.NewDeaths}</Table.Cell>
            <Table.Cell>{props.countries.NewRecovered}</Table.Cell>
            <Table.Cell>{props.countries.TotalConfirmed}</Table.Cell>
            <Table.Cell>{props.countries.TotalDeaths}</Table.Cell>
            <Table.Cell>{props.countries.TotalRecovered}</Table.Cell>
        </Table.Row>
      );
};
export default Countries;