
import '../styles/App.css';
import {Routes, Route, BrowserRouter, Switch} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import GroupListPage from './GroupListPage';
import GroupPage from './GroupPage';
import BalancePage from './BalancePage';
import NewGroupPage from './NewGroupPage';
import NewTransactionPage from './NewTransactionPage';
import { SuiClient, SuiObjectChange } from "@mysten/sui.js/client";
import { TransactionBlock } from "@mysten/sui.js/transactions"
import { ethos, SignInButton } from "ethos-connect"

// const { status, wallet } = ethos.useWallet();
// const object_id = "0xc36747ad739ed3116e401dc3a4b836db126d6cf77fae54c579764b8150b6fe11"
//   console.log(wallet)
//   if (wallet) {
//     const res = wallet.client.getObject({
//       id: object_id, options: {
//           showContent: true
//       }
//     }).then((res)=>
//       console.log(res.data)
//     )
//   }
//   const PACKAGE_ID = "0x2466f829a2867b44b2b83dad0a5523b3bbb6e3da3cdf1b04abeaaffdc3445703";
//   const BOARD_ID =   "0xc36747ad739ed3116e401dc3a4b836db126d6cf77fae54c579764b8150b6fe11";
//   const trx = new TransactionBlock();
//   trx.setGasBudget(1000000000);
//   trx.moveCall({
//       target: `${PACKAGE_ID}::board::add_group`,
//       arguments: [trx.object(BOARD_ID), trx.pure("Buying Sui"), trx.pure("Slava")], trx
//   })
//   if (wallet) {
//     const resData = wallet.signAndExecuteTransactionBlock({
//       transactionBlock: trx
//     }).then(data=>{console.log(data)}).catch(error=>{console.log(error)})
//   }

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<WelcomePage/>}/>
        <Route path='/list' exact element={<GroupListPage/>}/>
        {/* <Switch> */}
        <Route path='/group/:idx' element={<GroupPage/>}/>
        {/* </Switch> */}
        <Route path='/balance' exact element={<BalancePage/>}/>
        <Route path='/new_group' exact element={<NewGroupPage/>}/>
        <Route path='/new_transaction' exact element={<NewTransactionPage/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
