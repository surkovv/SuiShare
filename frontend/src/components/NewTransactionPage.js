import React from "react";
import "../styles/NewTransactionPage.css"
import mock from "../mock_data.json"

function NewTransactionPage() {
    return (
        <div className={"new_transaction_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{mock['username']}</div>
            </div>
        </div>
    )
}

export default NewTransactionPage;