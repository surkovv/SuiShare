import React from "react";
import "../styles/WelcomePage.css"
import {Link} from "react-router-dom";
import { ethos, SignInButton } from "ethos-connect";
import logo from '../public/logo.png';

function WelcomePage() {
    return (
        <div className={"welcome_page"}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <img style={{height: "50px", padding: "10px"}} src={logo} alt="Logo"/><div className={"title"}>SuiShare</div>
            </div>
            <Link to='list'><SignInButton style={{padding: "15px"}}></SignInButton></Link>
        </div>
    );
}

export default WelcomePage;