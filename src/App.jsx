import { useState } from 'react'
import { Header } from './components/header'
import { Measurements } from './components/measurements'
import { HourlyForecast } from './components/hourlyForecast'
import { DayForecast } from './components/dayForecast'

function App() {

  return (
    <>
      <Header section="Today"/>
      <main className='mx-[5vw] gap-4 flex flex-col'>
        <Measurements windMain="12" windSubordinate="2" rainMain="24" rainSubordinate="10" pressureMain="720" pressureSubordinate="32" uvMain="2,3" uvSubordinate="0,3"/>
        <HourlyForecast/>

      </main>
    </>
  )
}

export default App
