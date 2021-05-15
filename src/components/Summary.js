import React from "react";
import { useEffect } from "react";
import {
    Grid,
    Container,
    Card
  } from 'semantic-ui-react'
const Summary = (props) => {
    useEffect(() => {
        
      }, []);


    return (
        <Container>
            <Grid columns={3} doubling>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>New Confirmed</Card.Header>
                            <Card.Meta>New Confirmed Cases of of today</Card.Meta>
                            <Card.Description>
                                {props.global.NewConfirmed}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Total Confirmed</Card.Header>
                            <Card.Meta>Total Confirmed Cases of of today</Card.Meta>
                            <Card.Description>
                                {props.global.TotalConfirmed}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>New Deaths</Card.Header>
                            <Card.Meta>New Deaths of of today</Card.Meta>
                            <Card.Description>
                                {props.global.NewDeaths}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Total Deaths</Card.Header>
                            <Card.Meta>Total Deaths of of today</Card.Meta>
                            <Card.Description>
                                {props.global.TotalDeaths}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>New Recovered</Card.Header>
                            <Card.Meta>New Recoveries of of today</Card.Meta>
                            <Card.Description>
                                {props.global.NewRecovered}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card>
                        <Card.Content>
                            <Card.Header>Total Recovered</Card.Header>
                            <Card.Meta>Total Recoveries of of today</Card.Meta>
                            <Card.Description>
                                {props.global.TotalRecovered}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </Container>
        
      );
};
export default Summary;