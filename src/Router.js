import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './View/Home';
import Logement from './View/Logement';
import About from './View/About';
import Error404 from './View/Error404';
 
export default class RouteList extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" children={ <Home /> } />
                    <Route path="/Fiche-Logement/:id" children={<Logement/>} />
                    <Route exact path="/about" children={ <About /> } />
                    <Route path="/404" children={ <Error404 /> } />
                    <Route path="*" children={ <Error404 /> } />
                </Switch>
            </Router>
        )
    }
}

//props => <DetailsPage id={props.match.params.id}/>