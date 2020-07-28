import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
//To DO import home and define a home component to display the webcam

function AppRouting() {
    return (
        <Route render={({location}) => {
            return (
                <Switch location={location}>
                    <Route exact path="/" render={props => (
                        <Redirect to={{ pathname: '/home', search: props.location.search }} />
                    )}/>
                    <Route exact path="/home" component={Home} />
                </Switch>
            )
        }}/>
    )
}

export const AppRouter = withRouter(AppRouting);

