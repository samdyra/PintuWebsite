import React, { memo } from 'react'

const Table:React.FC = () => (
  <div className="sm:border-2 sm:border-b-0 sm:rounded-lg sm:mx-8">
    <header className='flex font-bold text-xs border-y-2 py-5 px-8 sm:border-t-0'>
      <h3>CRYPTO</h3>
    </header>
    <table className='w-full'>
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

export default memo(Table)