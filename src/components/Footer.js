import React from "react";
import {Link} from "react-router-dom"
import "../scss/footer.scss"


export default () => (
    <footer className="container-fluid footer-container fluid0">
        <div className="container">
            <div className="row footer-cols">
                <div className="col-3 footer-col">
                   <div className="row">
                        <div className="mx-auto" >
                            <h4>Menu</h4>
                            <Link to="/" >O nás</Link>
                            <Link to="/degustace" >Události</Link>
                            <Link to="/oslavy-a-teambuildingy" >Teambuildingy</Link>
                            <Link to="/blog" >Blog</Link>
                            <Link to="/kontakt" >Kontakt</Link>
                        </div>
                   </div>
                </div>
                <div className="col-5 footer-col">
                   <div className="row">
                        <div className="mx-auto" >
                            <h4>Sledujte nás</h4>
                            <Link to="" >Facebook</Link>
                        </div>
                   </div>
                </div>
                <div className="col-4 footer-col">
                   <div className="row">
                        <div className="mx-auto" >
                            <h4>Kontakt</h4>
                            <p>Náhodná ulice 1488</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>Made by Ondřej Mikulčík</p>
        </div>
    </footer>
)