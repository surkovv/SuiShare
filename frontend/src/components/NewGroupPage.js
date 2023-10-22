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
            <div className='group_name'>
                <label>Group name</label>
                <input
                    name='name'
                    type='text'
                />
            </div>
            <div className='user_name'>
                <label>Your name in this group</label>
                <input
                    name='name'
                    type='text'
                />
            </div>
            <div className='button'>
                Create new group
            </div>


        </div>
    )
}

export default NewGroupPage;