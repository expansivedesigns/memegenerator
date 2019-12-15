import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MemeGenerator from './container/MemeGenerator'
import './styles.css'

function App() {
  return(
    <div className="App-wrapper">
      <Header />
      <MemeGenerator />
      <Footer />      
    </div>
    )
}


export default App