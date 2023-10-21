import React from "react";
import "../styles/GroupListPage.css"
import mock from "../mock_data.json"

function GroupListPage() {
    return (
        <div className={"group_list_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{mock['username']}</div>
            </div>
            <div className="enter_group">
                <div className="new_group">
                    Create new group
                </div>
                <div className="button">Create</div>
                <div>or enter access code</div>
                <input type='text' name={"access_code"} placeholder={"Access code"}/>
                <div className="button">Enter</div>
            </div>
            <div className="list">
                {
                    mock['group_list'].map((item)=>{
                        return <div className="item">
                            <div className="group_name">{item['name']}</div>
                            <div className="members">
                                <div style={{color: "red", fontWeight: "bold"}}>Members:</div>
                                {
                                item['members'].map((user)=>{
                                    return <div>{user}</div>
                                })
                            }</div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default GroupListPage;