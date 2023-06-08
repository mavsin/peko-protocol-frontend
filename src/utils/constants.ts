import { IChain, ILP, IToken } from "./interfaces";

export const TEMP_CRYPTO_LOGO_URL =
  "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025";

export const TEMP_CHAINS: Array<IChain> = [
  {
    id: 1,
    name: "Solana",
    imgSrc: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025"
  },
  {
    id: 2,
    name: "Aptos",
    imgSrc: "https://cryptologos.cc/logos/aptos-apt-logo.svg?v=025"
  },
  {
    id: 3,
    name: "Ethereum",
    imgSrc: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025"
  },
  {
    id: 4,
    name: "Fantom",
    imgSrc: "https://cryptologos.cc/logos/fantom-ftm-logo.svg?v=025"
  },
  {
    id: 5,
    name: "BSC",
    imgSrc: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025"
  },
  {
    id: 6,
    name: "Polygon",
    imgSrc: "https://cryptologos.cc/logos/polygon-matic-logo.svg?v=025"
  }
];

export const TEMP_TOKENS: Array<IToken> = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    imgSrc: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025",
    depositedAmount: 0
  },
  {
    id: 2,
    name: "BNB",
    symbol: "BNB",
    imgSrc: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=025",
    depositedAmount: 0
  },
  {
    id: 3,
    name: "USD Coin",
    symbol: "USDC",
    imgSrc: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025",
    depositedAmount: 0
  },
  {
    id: 4,
    name: "Ethereum",
    symbol: "ETH",
    imgSrc: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025",
    depositedAmount: 0
  },
  {
    id: 5,
    name: "Solana",
    symbol: "SOL",
    imgSrc: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=025",
    depositedAmount: 0
  },
  {
    id: 6,
    name: "Aptos Coin",
    symbol: "APT",
    imgSrc: "https://cryptologos.cc/logos/aptos-apt-logo.svg?v=025",
    depositedAmount: 0
  }
];

export const TEMP_WALLET_ADDRESS =
  "0xbee86614d7b0017fd77e07ee2b3c57f8a1908c4fdb5daf126eaaac44dcaff2e1";

export const TEMP_LPS: Array<ILP> = [
  {
    id: 1,
    token: {
      id: 6,
      name: "Aptos Coin",
      symbol: "APT",
      imgSrc: "https://cryptologos.cc/logos/aptos-apt-logo.svg?v=025",
      depositedAmount: 0
    },
    coin: {
      id: 3,
      name: "USD Coin",
      symbol: "USDC",
      imgSrc: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=025",
      depositedAmount: 0
    },
    powererBrandSrc: "/assets/images/test-powerer-brand.png"
  }
];

export const REGEX_NUMBER_VALID = /^[0-9]*\.?[0-9]*$/;
