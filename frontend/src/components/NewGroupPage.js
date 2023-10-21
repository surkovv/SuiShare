import React from "react";
import "../styles/NewGroupPage.css"
import mock from "../mock_data.json"

function NewGroupPage() {
    return (
        <div className={"new_group_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{mock['username']}</div>
            </div>
            <div></div>
        </div>
    )
}

export default NewGroupPage;