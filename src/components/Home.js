import React from "react";
import Navigation from "./Navigation"

const Home = () => (
    <div className={"container"}>
        <Navigation />
        {document.title = "Homepage"}
        <p>This is my home page</p>
    </div>
);


export default Home