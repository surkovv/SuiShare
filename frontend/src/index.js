import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'
import { Chain, EthosConnectProvider } from 'ethos-connect'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EthosConnectProvider ethosConfiguration={{chain: Chain.SUI_DEVNET, network: "https://fullnode.devnet.sui.io:443"}}>
    <App />
    </EthosConnectProvider>
  </React.StrictMode>
);
