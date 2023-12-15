import { LEDGER_CANISTER_ID } from "./ic"

export const TOKENS = {
  ICP: {
    symbol: "ICP",
    canisterId: LEDGER_CANISTER_ID,
    name: "ICP",
    decimals: 8,
  },
  XTC: {
    symbol: "XTC",
    canisterId: "aanaa-xaaaa-aaaah-aaeiq-cai",
    name: "Cycles",
    decimals: 12,
  },
  WTC: {
    symbol: "WTC",
    canisterId: "5ymop-yyaaa-aaaah-qaa4q-cai",
    name: "Wrapped Cycles",
    decimals: 12,
  },
  WICP: {
    symbol: "WICP",
    canisterId: "utozz-siaaa-aaaam-qaaxq-cai",
    name: "Wrapped ICP",
    decimals: 8,
  },
  BTKN: {
    symbol: "BTKN",
    canisterId: "cfoim-fqaaa-aaaai-qbcmq-cai",
    name: "Beta Token",
    decimals: 8,
  },
  DUST: {
    symbol: "DUST",
    canisterId: "4mvfv-piaaa-aaaak-aacia-cai",
    name: "Dust Token",
    decimals: 8,
  },
}
