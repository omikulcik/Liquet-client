import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import "../scss/teambuilding.scss";


export default () => (
    <section>
        <Navigation />
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="section-h" >You know we are the infinity</h1>
                </div>
            </div>
        </div>
        <div className="container-fluid big-photo">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Aliquam ornare wisi eu metus. Aenean fermentum risus id tortor. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Fusce aliquam vestibulum ipsum. Cras elementum. Vivamus porttitor turpis ac leo. Aenean fermentum risus id tortor. Vivamus ac leo pretium faucibus. Sed ac dolor sit amet purus malesuada congue. Pellentesque ipsum. Et harum quidem rerum facilis est et expedita distinctio. Suspendisse sagittis ultrices augue. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Donec vitae arcu.
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="section-h text-center">Lorem ipsum</h2>
                </div>
            </div>
            <div className="row cta">
                <div className="col-8 offset-2 text-center">
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Aliquam ornare wisi eu metus. Aenean fermentum.
                    </p>
                    <Button><Link to="/kontakt">Kontaktujte nás</Link></Button>
                </div>
            </div>
        </div>
        <Footer />
    </section>
)