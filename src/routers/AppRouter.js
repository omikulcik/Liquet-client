import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "../components/Home";
import Events from "../components/Events";
import Admin from "../components/Admin";
import AddEvent from "../components/AddEvent";
import RegisteredTable from "../components/RegisteredTable";
import EditEvent from "../components/EditEvent"
import EditSingleEvent  from "../components/EditSingleEvent";


const AppRouter = () => (
    <div>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/admin" component={Admin} />
                <Route exact path="/admin/addevent" component={AddEvent} />
                <Route exact path="/admin/registeredtable" component={RegisteredTable} />
                <Route exact path="/admin/editevent" component={EditEvent} />
                <Route exact path="/admin/editevent/:eventkey" component={EditSingleEvent} />
            </div>
        </BrowserRouter>
    </div>
);

export default AppRouter;