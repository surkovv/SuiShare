import React from "react";
import "../styles/WelcomePage.css"
import {Link} from "react-router-dom";
import { ethos, SignInButton } from "ethos-connect";

function WelcomePage() {
    return (
        <div className={"welcome_page"}>
            <div className={"title"}>SuiShare</div>
            <Link to='list'><SignInButton></SignInButton></Link>
        </div>
    );
}

export default WelcomePage;