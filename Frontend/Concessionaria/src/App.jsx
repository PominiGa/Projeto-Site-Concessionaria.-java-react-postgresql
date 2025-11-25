import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data: CarData[] = [];
  
  return (
    <div className="container">
      <h1>Projeto Concessionária</h1>
      <div className="content">
        {data.map((carData) => <Card/>)}
      </div>
    </div>
  )
}

export default App
