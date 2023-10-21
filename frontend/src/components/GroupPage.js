import React from "react";
import "../styles/GroupPage.css"
import mock from "../mock_data.json"

function GroupPage() {
    let i = 0
    return (
        <div className={"group_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{mock['username']}</div>
            </div>

            <div className="new_transaction">
                <div>
                    Create new transaction
                </div>
                <div className="button">Create</div>
                <div className="button">Balance</div>
            </div>

            <div className={"list"}>
                {
                mock['group_list'][i]['transactions'].map(
                    (item)=>{
                        return (
                        <div className="transaction">
                        <div className="name">{item["name"]}</div>
                        <div>Buyer: {item["buyer"]}</div>
                        <div>Users: {item["users"].map((user)=><div>{user}</div>)}</div>
                        <div>Amount: {item["amount"]}</div>
                        </div>)
                    }
                )
                }
            </div>
        </div>
    );
}

export default GroupPage;