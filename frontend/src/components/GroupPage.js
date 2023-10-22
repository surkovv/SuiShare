import React from "react";
import "../styles/GroupPage.css"
import mock from "../mock_data.json"
import groups_parser from "../utils";
import { ethos, SignInButton } from "ethos-connect"
import { useState } from "react";
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { Link } from "react-router-dom";
import config from "../config.json"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function GroupPage() {
    let { idx } = useParams();
    
    let [groups, setGroups] = useState([]);

    const { status, wallet } = ethos.useWallet();
    useEffect(() => {
        if (wallet) {
            wallet.client.getObject({id: config["BOARD_ID"], options: {showContent: true}})
            .then(data=>{
                setGroups(groups_parser(data.data));
            })
        } 
    }, [wallet]);

    function create_transaction() {
        let name = prompt('Type transaction name');
        let amount = prompt('Type amount of transaction');
        const trx = new TransactionBlock();
        trx.setGasBudget(1000000000);
        trx.moveCall({
            target: `${config.PACKAGE_ID}::board::add_case`,
            arguments: [trx.pure(idx), trx.object(config.BOARD_ID), trx.pure(amount), trx.pure(name)]
        })
        if (wallet) {
            const resData = wallet.signAndExecuteTransactionBlock({
                transactionBlock: trx
            }).then(data=>{console.log(data)}).catch(error=>{console.log(error)})
        }
    }

    if (groups.length == 0) return <div>Loading...</div>
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
                <div className="button" onClick={create_transaction}>Create</div>
                <div className="button">Balance</div>
            </div>

            <div className={"list"}>
                {
                groups['group_list'][idx]['transactions'].map(
                    (item)=>{
                        return (
                        <div className="transaction">
                        <div className="name">{item["name"]}</div>
                        <div>Buyer: {item["buyer"]}</div>
                        {/* <div>Users: {item["users"].map((user)=><div>{user}</div>)}</div> */}
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