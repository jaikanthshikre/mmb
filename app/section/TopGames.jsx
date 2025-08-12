import React from 'react'

const TopGames = () => {
  return (
    <>
 <div >
  <h1 className='px-5 text-2xl font-bold mt-5 text-[#FB6765] uppercase text-center'>Some Trending Games</h1>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-3 px-1'>
   
     <img src="/aviator.png" alt="" className='rounded-md' />
     <img src="/Casino.png" alt=""  className='rounded-md'/>
      <img src="/Slots.png" alt="" className='rounded-md'/>
       <img src="/rummy.png" alt="" className='rounded-md'/>
        
          <img src="/fishing.png" alt="" className='rounded-md'/>
           <img src="/sports.png" alt="" className='rounded-md'/>
            
               <img src="/lottery.png" alt="" className='rounded-md'/>
                 <img src="/popular.png" alt="" className='rounded-md'/>
  </div>
  </div>
    </>
   
  )
}

export default TopGames