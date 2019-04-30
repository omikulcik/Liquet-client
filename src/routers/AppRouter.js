import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/Home";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Blog from "../components/Blog";
import Teambuildings from "../components/Teambuildings";
import NotFound from "../components/NotFound";


const AppRouter = () => (
    <div>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/degustace" component={Events} />
                <Route exact path="/kontakt" component={Contact} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/oslavy-a-teambuildingy" component={Teambuildings} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
);

export default AppRouter;