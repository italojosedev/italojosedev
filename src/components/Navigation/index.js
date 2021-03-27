import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBar from "../SideBar";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Skills from "../../pages/Skills";
import Contact from "../../pages/Contact";
import Portifolio from "../../pages/Portifolio";
import { Background, Body, Main } from "./styled";
// Get Framer Motion https://framer.com/motion

const App = () => (
    <Background>
        <SideBar />
        <Body>
            <p>{`<Body >`}</p>
            <p>{`</Body>`}</p>
        </Body>
        <Main>
             <Router>
            <AnimatePresence exitBeforeEnter initial={true}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/skills" component={Skills} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/portifolio" component={Portifolio} />
                </Switch>
            </AnimatePresence>
        </Router>
        </Main>
       
    </Background>
);

export default App;
