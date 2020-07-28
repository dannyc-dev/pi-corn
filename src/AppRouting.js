import React from 'react';
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
//To DO import home and define a home component to display the webcam
import Home from "./app/route-home/Home";

function AppRouting(props) {
    return (
        <React.Fragment>  
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route exact path="/home" render={ () => <Home {...props} objUI={props.objUI}/> }/>
        </React.Fragment> 
    )
}

export const AppRouter = withRouter(AppRouting);

