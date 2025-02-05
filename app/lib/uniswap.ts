import { ethers } from 'ethers';

// Your target chain's RPC URL (e.g., Ethereum Mainnet, BSC, Polygon, etc.)
const RPC_URL = 'https://your-chain-rpc-url.com';

// Uniswap V2 Clone Contract Address
const UNISWAP_V2_CONTRACT_ADDRESS = '0xYourUniswapV2CloneAddress';

// Uniswap V2 ABI (simplified, extend as needed)
const UNISWAP_V2_ABI = [
  'function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)',
  'function token0() external view returns (address)',
  'function token1() external view returns (address)',
  'function totalSupply() external view returns (uint)',
  'function factory() external view returns (address)',
];

// Initialize ethers provider
const provider = new ethers.JsonRpcProvider(RPC_URL);

// Initialize contract instance
const uniswapV2Contract = new ethers.Contract(
  UNISWAP_V2_CONTRACT_ADDRESS,
  UNISWAP_V2_ABI,
  provider
);

export { uniswapV2Contract };
