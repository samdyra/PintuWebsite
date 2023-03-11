import { useState, useEffect } from "react";
import { useQuery } from 'react-query';
import { fetchDataCoin, fetchDataPrice } from "../helpers/effects"

type FetchCoinData = () => void;

type UseCoinData = () => {
  data: Array<object>;
  isLoading: boolean;
  isError: boolean;
}

type CoinData = {
  currencyGroup: string;
  name: string;
  logo: string;
  latestPrice: string;
  day: string;
  week: string;
  month: string;
  year: string;
};

type Coin = {
    currencyGroup: string;
    name: string;
    logo: string;
}

type Price = {
    latestPrice: string
    day: string
    week: string
    month: string
    year: string
    pair: string
}

type Result = {
    currencyGroup: string;
    name: string;
    logo: string;
    latestPrice: string;
    day: string;
    week: string;
    month: string;
    year: string;
}


const useCoinData: UseCoinData = () => {
  const [ coinData, setCoinData ] = useState<CoinData[]>([]);
  const {
    data: coinDescription, isLoading: isCoinDescLoading, isError: isCoinDescError 
  } = useQuery('coinDesc', fetchDataCoin)
  const {
    data: coinPrice, isLoading: isCoinPriceLoading, isError: isCoinPriceError 
  } = useQuery('coinPrice', fetchDataPrice)

  const isLoading:boolean = isCoinDescLoading || isCoinPriceLoading;
  const isError:boolean = isCoinDescError || isCoinPriceError;

  const fetchCoinData: FetchCoinData = async () => {
    const combinedData = coinDescription?.data?.payload?.map((coin: Coin) => {


      const pairCoinPrice = coinPrice?.data?.payload?.find(
        (price: Price) => price?.pair === `${coin?.currencyGroup?.toLowerCase()}/idr` 
      )

      const result: Result = {
        currencyGroup: coin?.currencyGroup ?? "BTC",
        name: coin?.name ?? "Bitcoin",
        logo: coin?.logo ?? "https://s3-ap-southeast-1.amazonaws.com/static.pintu.co.id/assets/images/logo/circle_BTC.svg",
        latestPrice: pairCoinPrice?.latestPrice ?? "310695667",
        day: pairCoinPrice?.day ?? "0.42",
        week: pairCoinPrice?.week ?? "-9.20",
        month: pairCoinPrice?.month ?? "-11.39",
        year: pairCoinPrice?.year ?? "-45.02",
      }

      return result
    });

    setCoinData(combinedData);
  };
  
  useEffect(() => {
    fetchCoinData();
  }, [ coinDescription, coinPrice ]);

  return {
    data: coinData, isLoading, isError 
  };

};

export default useCoinData;
