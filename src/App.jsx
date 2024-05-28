import React from 'react';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <div id="layout" className="min-h-screen flex flex-col items-center">
      <div className="sticky-outer-wrapper w-full max-w-5x1">
        <div className="sticky-inner-wrapper w-full" style={{ position: 'relative', top: '0px', zIndex: 999 }}>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
