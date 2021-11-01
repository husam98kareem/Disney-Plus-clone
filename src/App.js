import React from 'react';

// import { Counter } from './features/counter/Counter';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import './App.css';
import Login from './components/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

function App() {
    return (

        <div className="App" >
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/detail/:id">
                        <Detail />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>
            </Router>

        </div>


    );
}

export default App;