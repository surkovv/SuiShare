import React from "react";
import "../styles/BalancePage.css"
import mock from "../mock_data.json"
import { useParams } from "react-router-dom";
import groups_parser from "../utils";
import { ethos, SignInButton } from "ethos-connect"
import { useState, useEffect } from "react";
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { Link } from "react-router-dom";
import config from "../config.json";

function BalancePage() {
    let { idx } = useParams();
    let [flag, setFlag] = useState(0);

    let [balance, setBalance] = useState([]);

    const { status, wallet } = ethos.useWallet();
    
    var defaultDict = new Proxy({}, {
        get: (target, name) => name in target ? target[name] : 0
    })

    function count_balances(data) {
        console.log(data)
        const persons = data.fields.persons
        const balances = defaultDict
        persons.map(person=>{
            const pname = person.fields.name;
            person.fields.debts.map(debt=>{
                const lname = debt.fields.name;
                const amt = parseInt(debt.fields.val);
                balances[pname] -= amt;
                balances[lname] += amt;
                console.log([pname, lname, amt])
            })
        });
        let balance_list = []
        for (const [key, value] of Object.entries(balances)) {
            balance_list.push([key, value])
        }
        return balance_list;
    }
    
    useEffect(() => {
        if (wallet) {
            wallet.client.getObject({id: config["BOARD_ID"], options: {showContent: true}})
            .then(data=>{
                setBalance(count_balances(data.data.content.fields.groups[idx]));
            })
        } 
    }, [wallet]);

    if (balance.length == 0) return <div>Loading...</div>
    return (
        <div className={"balance_page"}>
            <div className="header">
                <div className="title"> SuiShare </div>
                <div className="username">{mock['username']}</div>
            </div>
            <div className="balance_list">
                {balance.map((item)=>{
                    return (
                    <div className="item" key={item[0]}>
                        <div>{item[0]}</div>
                        <div>{item[1]}</div>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default BalancePage;