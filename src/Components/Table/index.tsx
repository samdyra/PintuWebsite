import React, {
  memo, useContext, useEffect 
} from 'react'
import useCoinData from '../../Context/Hooks/useCoinData';
import { Context as CoinListContext } from '../../Context/CryptoContext';

const Table:React.FC = () => {
  const { state, getAllCoin } = useContext(CoinListContext);
  const result = useCoinData()
  
  useEffect(() => {
    getAllCoin(result)
  }, [ result ])

  return (
    <div className="sm:border-2 sm:border-b-0 sm:rounded-lg sm:mx-8" >
      <header className='flex font-bold text-xs border-y-2 py-5 px-8 sm:border-t-0 sm:px-4'>
        <h3 className='sm:hidden'>CRYPTO</h3>
        <thead className='hidden sm:block w-full'>
          <section className='flex w-full text-gray-500 text-base'>
            <h3 className='w-3/12 '>CRYPTO</h3>
            <h3 className='w-3/12'>HARGA</h3>
            <h3 className='w-2/12'>24 JAM</h3>
            <h3 className='w-2/12'>1 MGG</h3>
            <h3 className='w-2/12'>1 BLN</h3>
            <h3 className='w-2/12'>1 THN</h3>
          </section>
        </thead>
      </header>
      <table className='hidden w-full sm:block'>
        <tbody className='flex border-b-2 py-5 w-full hover:bg-slate-100 hover:cursor-pointer transition duration-150 ease-out hover:ease-in'>
          <section className='flex pl-2 w-3/12 h-12 justify-center items-center'>
            <img className='h-8 mr-3' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' alt='image-coin'></img>
            <div className='flex flex-col items-start'>
              <h3 className='font-bold'>Bitcoin</h3>
              <p className='text-gray-500 text-sm'>BTC</p>
            </div>
          </section>
          <section className='flex flex-col pr-4 w-3/12 items-center justify-center'>
            <h4 className='font-bold'>Rp500.000.000</h4>
          </section>
          <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
            <h3 className='font-medium text-green-600'>2%</h3>
          </section>
          <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
            <h3 className='font-medium text-green-600'>2%</h3>
          </section>
          <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
            <h3 className='font-medium text-green-600'>2%</h3>
          </section>
          <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
            <h3 className='font-medium text-green-600'>2%</h3>
          </section>
        </tbody>
      </table>
      <table className='w-full sm:hidden hover:bg-slate-100 hover:cursor-pointer transition duration-150 ease-out hover:ease-in'>
        <tbody className='flex border-b-2 py-5 w-full justify-between'>
          <section className='flex pl-2 w-36 h-12 justify-around items-center'>
            <img className='h-8' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png' alt='image-coin'></img>
            <div className='flex flex-col items-start'>
              <h3 className='font-bold'>Bitcoin</h3>
              <p className='text-gray-500 text-sm'>BTC</p>
            </div>
          </section>
          <section className='flex flex-col pr-4 w-52 items-end'>
            <h4 className='font-bold'>Rp500.000.000</h4>
            <h3 className='font-medium text-green-600'>2%</h3>
          </section>
        </tbody>
      </table>
    </div>
  )
}


export default memo(Table)