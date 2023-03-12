import axios from "axios"
import { CURRENCY_ENDPOINT, TRADE_COIN_PAIRS_ENDPOINT } from "../../Constants/EndpointConstants"
export const fetchDataCoin = async () => axios.get(CURRENCY_ENDPOINT)
export const fetchDataPrice = async () => axios.get(TRADE_COIN_PAIRS_ENDPOINT, { headers: { "X-Requested-With":  "XMLHttpRequest" } })