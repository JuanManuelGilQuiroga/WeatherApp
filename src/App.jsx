import { useState } from 'react'
import { Header } from './components/header'
import { Measurements } from './components/measurements'

function App() {

  return (
    <>
      <Header section="Today"/>
      <main className='mx-[5vw]'>
        <Measurements windMain="12" windSubordinate="2" rainMain="24" rainSubordinate="10" pressureMain="720" pressureSubordinate="32" uvMain="2,3" uvSubordinate="0,3"/>
      </main>
    </>
  )
}

export default App
