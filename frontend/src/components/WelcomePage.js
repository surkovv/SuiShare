import React from "react";
import "../styles/WelcomePage.css"
import {Link} from "react-router-dom";

function WelcomePage() {
    return (
        <div className={"welcome_page"}>
            <div className={"title"}>SuiShare</div>
            <div className={"button"}>Sign up</div>
            <div className={"button"}>Sign in</div>

        </div>
    );
}

export default WelcomePage;