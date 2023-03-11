import React, {
  memo, useContext, useEffect 
} from 'react'
import useCoinData from '../../Context/Hooks/useCoinData';
import { Context as CoinListContext } from '../../Context/CryptoContext';
import { performanceGetter, groupingFormat } from '../../Helpers/GlobalHelpers';

const Table:React.FC = () => {
  // ---------- TYPES ----------
  interface Props {
    list: {
      currencyGroup: string;
      name: string;
      logo: string;
      latestPrice: string;
      day: string;
      week: string;
      month: string;
      year: string;
    }[]
  }

  // ---------- STATE ----------
  const { state, getAllCoin } = useContext(CoinListContext);
  const {
    data, isError, isLoading 
  } = useCoinData()

  // ---------- EFFECTS ----------
  useEffect(() => {
    getAllCoin(data)
  }, [ data ])

  // ---------- UI VARIABLES ----------
  const TableHeader: React.FC = () => (
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
  )

  const TableDekstop: React.FC<Props> = (props: Props) => {
    const { list } = props
    const listElements = list && list.map((el) => {
      const performance = (time: string) => performanceGetter(time)
      const latestPrice = `Rp${groupingFormat(parseFloat(el?.latestPrice))}`

      return (
        <table className='hidden w-full sm:block'>
          <tbody className='flex border-b-2 py-5 w-full hover:bg-slate-100 hover:cursor-pointer transition duration-150 ease-out hover:ease-in'>
            <section className='flex ml-4 w-52 h-12 items-center  lg:w-3/12 lg:ml-8'>
              <img className='h-7 mr-3 lg:h-9' src={el?.logo} alt='image-coin'></img>
              <div className='flex flex-col items-start'>
                <h3 className='font-bold text-sm lg:text-base'>{el?.name}</h3>
                <p className='text-gray-500 text-sm lg:text-base'>{el?.currencyGroup}</p>
              </div>
            </section>
            <section className='flex flex-col pr-4 w-3/12 items-center justify-center '>
              <h4 className='font-bold text-sm lg:text-base'>{latestPrice}</h4>
            </section>
            <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
              <h3 className={`font-medium text-sm lg:text-base ${el?.day > "0" ? "text-green-600" : "text-red-600"}`}>{performance(el?.day)}</h3>
            </section>
            <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
              <h3 className={`font-medium text-sm lg:text-base ${el?.week > "0" ? "text-green-600" : "text-red-600"}`}>{performance(el?.week)}</h3>
            </section>
            <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
              <h3 className={`font-medium text-sm lg:text-base ${el?.month > "0" ? "text-green-600" : "text-red-600"}`}>{performance(el?.month)}</h3>
            </section>
            <section className='flex flex-col pr-4 w-2/12 items-center justify-center'>
              <h3 className={`font-medium text-sm lg:text-base ${el?.year > "0" ? "text-green-600" : "text-red-600"}`}>{performance(el?.year)}</h3>
            </section>
          </tbody>
        </table>
      )
    })

    return (
      <React.Fragment>
        {listElements}
      </React.Fragment>
    )
  }

  const TableMobile: React.FC<Props> = (props: Props) => {
    const { list } = props
    const listElements = list && list?.map((el) => {
      const performance = performanceGetter(el?.day)
      const latestPrice = `Rp${groupingFormat(parseFloat(el?.latestPrice))}`
      
      return (
        <table className='w-full sm:hidden hover:bg-slate-100 hover:cursor-pointer transition duration-150 ease-out hover:ease-in'>
          <tbody className='flex border-b-2 py-5 w-full justify-between'>
            <section className='flex w-60 h-12  items-center ml-4'>
              <img className='h-8' src={el?.logo} alt='image-coin' />
              <div className='flex flex-col items-start ml-4'>
                <h3 className='font-bold'>{el?.name}</h3>
                <p className='text-gray-500 text-sm'>{el?.currencyGroup}</p>
              </div>
            </section>
            <section className='flex flex-col items-end w-24 pr-4'>
              <h4 className='font-bold'>{latestPrice}</h4>
              <h3 className={`font-medium ${el?.day > "0" ? "text-green-600" : "text-red-600"}`}>{performance}</h3>
            </section>
          </tbody>
        </table>
      )
    })

    return (
      <React.Fragment>
        {listElements}
      </React.Fragment>
    )

  }

  const RenderTable: React.FC = () => (
    <main className="sm:border-2 sm:border-b-0 sm:rounded-lg sm:mx-8" >
      <TableHeader />
      <TableDekstop list={state}/>
      <TableMobile list={state}/>
    </main>
  )


  // ---------- RENDER FUNCTIONS ----------
  return <RenderTable />
}


export default memo(Table)