import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div id="layout" className="min-h-screen flex flex-col items-center">
      <div className="sticky-outer-wrapper w-full max-w-5x1">
        <div className="sticky-inner-wrapper w-full" style={{ position: 'relative', top: '0px', zIndex: 999 }}>
          <Navbar />
          <main className="container mx-auto items-center flex-1 p-4 w-full max-w-5x1">
            <h1 className="text-2xl font-bold mb-4">Main Content</h1>
            <p>This is the main content area.</p>
            </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
