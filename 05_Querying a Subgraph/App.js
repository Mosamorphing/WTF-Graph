import React, { useState, useEffect } from 'react';
import './App.css';
import { createClient, cacheExchange, fetchExchange, gql } from '@urql/core';

const client = createClient({
  url: 'https://gateway-arbitrum.network.thegraph.com/api/[api-key]/subgraphs/id/2hTKKMwLsdfJm9N7gUeajkgg8sdJwky56Zpkvg8ZcyP8',
  exchanges: [cacheExchange, fetchExchange],
});

const query = gql`

{
  accounts(first: 1) {
    id
    punksOwned {
      id
    }
    bought {
      id
    }
    nftsOwned
  }
  punks(first: 4) {
    id
    transferedTo {
      id
    }
    assignedTo {
      id
    }
    purchasedBy {
      id
    }
  }
}

`;

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.query(query).toPromise();
        if (data) {
          setData(data);
          console.log('Fetched Data:', data); // Log the fetched data
        } else {
          console.log('No data fetched');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  // Ensure data is not null before accessing its properties
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>Accounts</h1>
      <ul>
        {data.accounts.map(account => (
          <li key={account.id}>
            <p>ID: {account.id}</p>
            <p>NFTs Owned: {account.nftsOwned}</p>
            <p>Punks Owned: {account.punksOwned.map(punk => punk.id).join(', ')}</p>
          </li>
        ))}
      </ul>
      <h1>Punks</h1>
      <ul>
        {data.punks.map(punk => (
          <li key={punk.id}>
            <p>ID: {punk.id}</p>
            <p>Transfered To: {punk.transferedTo ? punk.transferedTo.id : 'None'}</p>
            <p>Assigned To: {punk.assignedTo ? punk.assignedTo.id : 'None'}</p>
            <p>Purchased By: {punk.purchasedBy ? punk.purchasedBy.id : 'None'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
