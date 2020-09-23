import React from 'react';
import Header from './components/Header';
import BoxPositions from './components/BoxPositions';

function App() {
  return (
    <div style={appStyles}>
      <Header />
      <BoxPositions />
    </div>
  );
}

const appStyles = {
  backgroundColor: '#282c34',
  minHeight: '100vh',
};

export default App;
