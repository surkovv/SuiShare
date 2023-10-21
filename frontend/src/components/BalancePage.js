import React from "react";
import "../styles/BalancePage.css"
import mock from "../mock_data.json"

function BalancePage() {
    let i = 0;
    let balance = mock['group_list'][i]['balance'];
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