/// <reference types="vite/client" />

interface Window {
  ethereum: any;
}

interface ImportMetaEnv {
  VITE_CONTRACT_ADDRESS: string;
  VITE_CONTENT_ID: string;
  VITE_FILE_EXTENSION: string;
}
