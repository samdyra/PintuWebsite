import axios from "axios"

export const fetchDataCoin = async () => axios.get("https://api.pintu.co.id/v2/wallet/supportedCurrencies")
export const fetchDataPrice = async () => axios.get("https://nameless-taiga-23840.herokuapp.com/https://api.pintu.co.id/v2/trade/price-changes", { headers: { "X-Requested-With":  "XMLHttpRequest" } })