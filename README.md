## BTS Lottery DApp

This project implements a decentralized lottery application (DApp) built on the Ethereum blockchain. 

### Project Overview

The BTS Lottery DApp is a web-based application that allows users to participate in lottery draws. It uses smart contracts deployed on the Ethereum blockchain to ensure fair and transparent outcomes. 

### Features

* **Smart contract:** The core logic of the lottery is implemented in the `Lottery.sol` contract, ensuring that all operations are governed by the blockchain.
* **Frontend:** The frontend is built with Next.js and React, providing a user-friendly interface for interacting with the lottery.
* **Wallet connection:** Users can connect their Ethereum wallets to the DApp using WalletConnect, enabling them to participate in the lottery.
* **Pot management:** The DApp tracks the total pot size and distributes winnings based on the contract's rules.
* **Draw results:** The DApp displays the results of each lottery draw, ensuring that all participants can verify the fairness of the process.

### Installation

1. **Prerequisites:**
   * Node.js (version 18.18.0 or higher)
   * npm or yarn
   * Truffle
   * MetaMask or a compatible Ethereum wallet

2. **Install dependencies:**
   ```bash
   npm install 
   ```

### Usage

1. **Deploy the smart contract:**
   ```bash
   truffle migrate
   ```

2. **Start the Next.js development server:**
   ```bash
   npm run dev 
   ```

3. **Open your browser and navigate to:** http://localhost:3000

4. **Connect your Ethereum wallet:** Click the "Connect Wallet" button and follow the prompts to connect your wallet.

5. **Participate in the lottery:** Enter the amount you want to bet and click "Bet."

6. **View draw results:** After a draw is complete, the results will be displayed on the homepage.

### Contact Information

For inquiries or feedback, please contact [your email address].
