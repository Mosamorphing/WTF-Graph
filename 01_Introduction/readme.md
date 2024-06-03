# WTF Graph minimalist tutorial: 1. Introduction

WTF Graph tutorial helps newcomers get started with using Graph quickly.

**WTF Academy Community**: [Official Website wtf.academy](https://wtf.academy) | [Discord](https://discord.gg/5akcruXrsk)

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | Compiled by [@Mofasasi](https://twitter.com/mofasasi)

---

# What is the Graph Network?

The Graph Network is a decentralized indexing protocol for organizing blockchain data. It makes it easier for users and developers to access and use this information to build decentralized applications. Currently, the graph is still only being used on the Ethereum blockchain. 

Projects like Bored Ape Yacht Club use advanced smart contracts on the Ethereum blockchain to manage their operations. These complex contracts generate large amounts of data that can be challenging to access and understand directly from the blockchain. With a search on blockchain explorers like [etherscan](https://etherscan.io/address/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d#code), you can see  the basic data directly but it gets difficult to look for specific data or interpret them when found. 

# How does the Graph work?

1. Subgraphs: A subgraph is a part of the overall Ethereum or IPFS data that a Graph Node indexes. Subgraphs define which events to pay attention to in the contract, how to map and organize the data, and how to make it available for querying.

2. GraphQL API: The GraphQL API allows applications to query the indexed data in the subgraphs, making it easier to access and retrieve specific information from the blockchain.
Subgraph Manifest: The subgraph manifest is a description of the subgraph, including the smart contracts of interest, events to monitor, and how to map and organize the event data.

3. Indexing Events: As events are logged in the smart contracts, the Graph Node watches for these events, processes the data according to the subgraph manifest, and stores the indexed data in its IPFS database.

4. Querying Data: Applications can use the GraphQL API to query the indexed data in the subgraphs, making it easier to access and retrieve specific information from the blockchain.
