
import '../styles/App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import WelcomePage from './WelcomePage';
import GroupListPage from './GroupListPage';
import GroupPage from './GroupPage';
import BalancePage from './BalancePage';
import NewGroupPage from './NewGroupPage';
import NewTransactionPage from './NewTransactionPage';

function App() {
  return (
    // <h1>Kek</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<WelcomePage/>}/>
        <Route path='/list' exact element={<GroupListPage/>}/>
        <Route path='/group' exact element={<GroupPage/>}/>
        <Route path='/balance' exact element={<BalancePage/>}/>
        <Route path='/new_group' exact element={<NewGroupPage/>}/>
        <Route path='/new_transaction' exact element={<NewTransactionPage/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
