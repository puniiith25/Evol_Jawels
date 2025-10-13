import React from 'react'
import EntryPage from './camponents/EntryPage'
import { Route, Routes } from 'react-router-dom'
import Welcomepage from './camponents/welcomepage'
import StyleSelectPage from './camponents/StyleSelectPage'
import OccasionPage from './camponents/OccasionPage'
import PriceRangePage from './camponents/PriceRangePage'
import MetalsPage from './camponents/MetalsPage'
import Describe_Y_L_S_page from './camponents/Describe_Y_L_S_page'


const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<EntryPage />} />
        <Route path='/welcome' element={<Welcomepage />} />
        <Route path='/style-select' element={<StyleSelectPage />} />
        <Route path='/occasion' element={<OccasionPage />} />
        <Route path='/price-range' element={<PriceRangePage />} />
        <Route path='/metals' element={<MetalsPage />} />
        <Route path='/Describe-your-lifestyle' element={<Describe_Y_L_S_page />} />

      </Routes>

    </div>

  )
}

export default App