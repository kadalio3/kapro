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
          <main id="app">
            <div class="grid ww-8hteb5">
            <div id="loading-container-replacement">
            <div class="overflow-hidden">
            <div class="sm2:px-40 px-24 mx-auto max-w-[1280px] pt-16 pb-40 sm:pt-36 sm:pb-80">
            <div class="flex w-full flex-col lg:flex-row lg:space-x-40">
            <div class="lg:w-[61.66%]">
              <div class="flex w-full flex-col lg:flex-row lg:space-x-40">
              <div class="lg:w-[61.66%]"></div>
              </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
