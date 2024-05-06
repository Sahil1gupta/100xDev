import { useState } from 'react'

import './App.css'
import RevenueCard from './component/RevenueCard'

function App() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <RevenueCard title='Total Revenue' amount='$ 1000' orderCount='13'/>
    </div>
  )
}

export default App
