import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import FlexContainer from './components/FlexContainer'
import GridContainer from './components/GridContainer'

function App() {
  return (
    <div style={appStyles}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={FlexContainer} />
        <Route path="/grid" component={GridContainer} />
      </BrowserRouter>
    </div>
  )
}

const appStyles = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
}

export default App
