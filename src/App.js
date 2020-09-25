import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import FlexboxPage from './pages/FlexboxPage'
import GridPage from './pages/GridPage'
import TodoPage from './pages/TodoPage'

function App() {
  return (
    <div style={appStyles}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={FlexboxPage} />
        <Route path="/grid" component={GridPage} />
        <Route path="/todo" component={TodoPage} />
      </BrowserRouter>
    </div>
  )
}

const appStyles = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
}

export default App
