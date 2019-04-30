import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "../scss/contact.scss";


export default () => (
    <div>
        <Navigation />
        <div className="container">
            <div className="row">
             <div className="col-12">
                <h1 className="section-h">Kontakt</h1>
             </div>
            </div>
            <div className="row contacts">
                <div className="col-4">
                    <b>Ondřej Mikulčík</b> <br />
                    +420 656 123 651 <br />
                    seznam@seznam.cz
                </div>
                <div className="col-4">
                    <b>Ondřej Mikulčík</b> <br />
                    +420 656 123 651 <br />
                    seznam@seznam.cz
                </div>                <div className="col-4">
                    <b>Ondřej Mikulčík</b> <br />
                    +420 656 123 651 <br />
                    seznam@seznam.cz
                </div>
            </div>
        </div>
        <div className="container-fluid fluid0">
            <div className="mapouter">
                <div className="gmap_canvas">
                <iframe title="google map" id="gmap_canvas" src="https://maps.google.com/maps?q=Brno&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)