import React from "react";
import "../styles/GroupListPage.css"
import mock from "../mock_data.json"
import config from "../config.json"
import { useEffect } from "react";
import { ethos, SignInButton } from "ethos-connect"
import { useState } from "react";
import { TransactionBlock } from "@mysten/sui.js/transactions"
import groups_parser from "../utils";
import { Link } from "react-router-dom";

function GroupListPage() {

    let [groups, setGroups] = useState([]);

    const { status, wallet } = ethos.useWallet();
    useEffect(() => {
        if (wallet) {
            wallet.client.getObject({id: config["BOARD_ID"], options: {showContent: true}})
            .then(data=>(setGroups(groups_parser(data.data))))
        } 
    }, [wallet]);

    function joinGroup(idx) {
        let name = prompt('Type your username for this group');
        const trx = new TransactionBlock();
        trx.setGasBudget(1000000000);
        trx.moveCall({
            target: `${config.PACKAGE_ID}::board::add_person`,
            arguments: [trx.pure(idx), trx.object(config.BOARD_ID), trx.pure(name)]
        })
        if (wallet) {
            const resData = wallet.signAndExecuteTransactionBlock({
                transactionBlock: trx
            }).then(data=>{console.log(data)}).catch(error=>{console.log(error)})
        }
    }

    function create_group() {
        let groupname = prompt('Type your group name');
        const trx = new TransactionBlock();
        trx.setGasBudget(1000000000);
        trx.moveCall({
            target: `${config.PACKAGE_ID}::board::add_group`,
            arguments: [trx.object(config.BOARD_ID), trx.pure(groupname)]
        })
        if (wallet) {
            const resData = wallet.signAndExecuteTransactionBlock({
                transactionBlock: trx
            }).then(data=>{console.log(data)}).catch(error=>{console.log(error)})
        }
    }

    if (groups.length == 0) {
        return <div>Loading...</div>
    }
    return (
        <div className={"group_list_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{groups['username']}</div>
            </div>
            <div className="enter_group">
                <div className="new_group">
                    Create new group
                </div>
                <div className="button" onClick={create_group}>Create</div>
            </div>
            <div className="list">
                {
                    groups['group_list'].map((item, idx)=>{
                        return <div><Link to={`/group/${idx}`}><div className="item" key={item['name']}>
                            <div className="group_name">{item['name']}</div>
                            <div className="members">
                                <div style={{color: "red", fontWeight: "bold"}}>Members:</div>
                                
                                {
                                item['members'].map((user)=>{
                                    return <div key={user}>{user}</div>
                                })}
                            </div>
                        </div></Link>
                        <div className="button" onClick={()=>{joinGroup(idx)}}>Join</div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default GroupListPage;