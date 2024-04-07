
import './App.css';
import { RevenueCard } from './coponents/RevenueCard';

/*
flex code
<div className='flex justify-center'>
        <div className='bg-yellow-500'>Hello</div>
        <div className='bg-green-500'>Hi</div>
        <div className='bg-red-500'>Shivam Raj</div>
      </div>
  
  ..Grid..
  <div className="grid grid-cols-10">
        <div className='bg-yellow-500 col-span-4'>Hello</div>
        <div className='bg-green-500 col-span-4'>Hi</div>
        <div className='bg-red-500 col-span-2'>Shivam Raj</div>
      </div>
      
      Grid-breakdown...
      */


function App() {


  return (
    <div className='grid grid-cols-4'>
      <RevenueCard title={ "Amount pending" } Amount={ "92,312,20" } orderCount={ 13 } />
    </div>
  )
}

export default App;
