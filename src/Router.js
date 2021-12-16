import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './View/Home';
import About from './View/About';
import Error404 from './View/Error404';
 
export default class RouteList extends React.Component {

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={ <Home /> } />
                    <Route exact path="/about" element={ <About /> } />
                    {/* <Route path="/will-match" element={} /> */}
                    <Route path="*" element={ <Error404 /> } />
                </Routes>
            </Router>
        )
    }
}