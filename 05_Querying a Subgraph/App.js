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
