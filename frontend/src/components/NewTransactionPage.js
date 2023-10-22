import React from "react";
import "../styles/NewTransactionPage.css"
import mock from "../mock_data.json"

function NewTransactionPage() {
    let i = 0;
    let members = mock['group_list'][i]['members'];
    let groupname = mock['group_list'][i]['name']
    return (
        <div className={"new_transaction_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{mock['username']}</div>
            </div>
            <div style={{padding: "15px"}}>New transaction for group {groupname}</div>
            <div className='transaction_name'>
                <label>Transaction name</label>
                <input
                    name='name'
                    type='text'
                />
            </div>
            <div className='amount'>
                <label>Amount</label>
                <input
                    name='name'
                    type='text'
                />
            </div>
            <div>Who owes for it?</div>
            <div>
                {members.map(member=>{
                    return (
                        <div>
                        <input type="checkbox" />
                        {member}
                        </div>
                    )
                })}
            </div>
            <div className='button'>
                Create new transaction
            </div>
        </div>
    )
}

export default NewTransactionPage;