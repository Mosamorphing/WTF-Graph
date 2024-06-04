# WTF Graph minimalist tutorial: 2. Deploying Subgraph

WTF Graph tutorial helps newcomers get started with using Graph quickly.

**WTF Academy Community**: [Official Website wtf.academy](https://wtf.academy) | [Discord](https://discord.gg/5akcruXrsk)

**Twitter**: [@WTFAcademy_](https://twitter.com/WTFAcademy_) | Compiled by [@Mofasasi](https://twitter.com/mofasasi)

---

In this tutorial, we will learn how to deploy our subgraph indexes for Ethereum Mainnet on the Subgraph Studio. But before we dive into that, what is the subgraph studio and what does it help us do?

# What is Subgraph Studio?

Subgraph Studio serves as an environment where developers can build, deploy, and manage subgraphs, which are smaller, modular components of a larger GraphQL schema that define the data and events to be indexed from the blockchain.

To deploy on Subgraph Studio;

1. Go to [The Graph Studio](thegraphstudio.com/studio) and connect your wallet

2. Click "Create a Subgraph". Enter the name of the project you would like to index. For the sake of this lecture, we'll index the USDT Token. So, we name our subgraph "USDT Subgraph" and click on "create subgraph".

3.  Install the GRAPH CLI using `npm` or `yarn`

```javascript
npm install -g @graphprotocol/graph-cli
yarn global add @graphprotocol/graph-cli
```

4. Initialize the subgraph

```javascript
graph init --studio usdt-subgraph-
```

5. You will be prompted to input some details such as the protocol, ethereum network and contract address. Follow through with the propmts. 

