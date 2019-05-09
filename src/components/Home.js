import React from "react";
import Navigation from "./Navigation";
import "../scss/home.scss";
import wineicon from "../images/glass.png";
import foodicon from "../images/cutlery.png";
import staricon from "../images/star.png";
import stain from "../images/stain.jpg"
import Footer from "./Footer";



const Home = () => (
    <div>
        <Navigation />
        <div className="container-fluid fluid0 parallax homepage d-none d-md-flex">
            <div className="container my-auto">
                <h1 className="claim-header">
                   <span className="main-claim">Pellentesque habitant morbi tristique?</span><br />
                   <span className="main-claim">Consectetuer adipiscing elit</span>
                </h1>
            </div>
        </div>
        <section className="container-fluid expl">
            <div className="container">
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h1>Pellentesque habitant morbi tristique?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p>
                        Praesent vitae arcu tempor neque lacinia pretium. Aliquam ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam erat volutpat. Praesent id justo in neque elementum ultrices.
                        </p>
                    </div>
                    <div className="col-md-6 d-none d-md-flex stain">
                     <img src={stain} alt="wine-stain" />
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid ksa">
            <div className="container">
                <div className="row">
                    <div className="col-12 section-h-col text-center">
                        <h1>Lorem ipsum dolor sit amet</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-md-4 single-ksa">
                        <img className="img-fluid" src={wineicon} alt="wine icon" />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Pellentesque pretium lectus id turpis. Vivamus porttitor turpis ac leo. Etiam quis quam.</p>
                    </div>
                    <div className="col-6 col-md-4 single-ksa">
                        <img className="img-fluid" src={foodicon} alt="food icon" />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Pellentesque pretium lectus id turpis. Vivamus porttitor turpis ac leo. Etiam quis quam.</p>
                    </div>
                    <div className="col-12 col-md-4 single-ksa">
                        <img className="img-fluid" src={staricon} alt="star icon" />
                        <h2>Lorem ipsum dolor sit amet</h2>
                        <p>Pellentesque pretium lectus id turpis. Vivamus porttitor turpis ac leo. Etiam quis quam.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);


export default Home