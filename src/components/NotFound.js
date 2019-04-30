import React from "react";
import {Link} from "react-router-dom";


export default () => (
    <div>
        <p className={"not-found"}>Stránka nebyla nalezena.<br />
         <Link to="/">Zpět na domonskou stránku</Link>
        </p>
    </div>
)