import React from "react";
import "../styles/BalancePage.css"
import mock from "../mock_data.json"
import { useParams } from "react-router-dom";
import groups_parser from "../utils";
import { ethos, SignInButton } from "ethos-connect"
import { useState } from "react";
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { Link } from "react-router-dom";
import config from "../config.json";

function BalancePage() {
    let { idx } = useParams();
    let balance = mock['group_list'][idx]['balance'];
    console.log(balance)
    return (
        <div className={"balance_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{mock['username']}</div>
            </div>
            <div className="balance_list">
                {balance.map((item)=>{
                    return (
                    <div className="item">
                        <div>{item[0]}</div>
                        <div>{item[1]}</div>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default BalancePage;