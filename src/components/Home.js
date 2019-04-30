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
        <div className="container-fluid fluid0 parallax homepage">
            <div className="container my-auto">
                <h1 className="claim-header">
                   <span className="main-claim">Do I make you scare ?</span><br />
                   <span className="main-claim">Really cant</span>
                </h1>
            </div>
        </div>
        <section className="container-fluid expl">
            <div className="container">
                <div className={"row"}>
                    <div className={"col-12"}>
                        <h1>A jak to vlastně funguje ?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p>
                            Nepříjde mi, že bych dělal dost a tak dělám víc než kdo jinej. Jsem CMM, vyjebanej CMM. Je tu tvoje buchta vlastně už tvoje ex. Ona mi jen uklízí a vaří oběd. Prcal jsem ji jen jednou a už mě miluje ale já ji ne.
                        </p>
                    </div>
                    <div className="col-6 stain">
                     <img src={stain} alt="wine-stain" />
                    </div>
                </div>
            </div>
        </section>
        <section className="container-fluid ksa">
            <div className="container">
                <div className="row">
                    <div className="col-12 section-h-col text-center">
                        <h1>I never take a day off</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 single-ksa">
                        <img className="img-fluid" src={wineicon} alt="wine icon" />
                        <h2>If it aint about a dream</h2>
                        <p>No matter where life takes me find me with a smile, we are suited to be happy</p>
                    </div>
                    <div className="col-4 single-ksa">
                        <img className="img-fluid" src={foodicon} alt="food icon" />
                        <h2>If it aint about a dream</h2>
                        <p>No matter where life takes me find me with a smile, we are suited to be happy</p>
                    </div>
                    <div className="col-4 single-ksa">
                        <img className="img-fluid" src={staricon} alt="star icon" />
                        <h2>If it aint about a dream</h2>
                        <p>No matter where life takes me find me with a smile, we are suited to be happy</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);


export default Home