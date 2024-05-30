import React from 'react';
import Carousel from './Carousel';
import NewsSlider from './NewsSlider';
import CardSlider from './CardSlider';
import TabsWithContent from './TabsWithContent';
import RecentUpdates from './RecentUpdates';

const Main = () => {
  return (
    <main id="app">
      <div className="grid ww-8hteb5">
        <div id="loading-container-replacement">
          <div className="overflow-hidden">
            <div className="sm2:px-40 px-24 mx-auto max-w-[1280px] pt-16 pb-40 sm:pt-36 sm:pb-80">
              <div className="flex w-full flex-col lg:flex-row lg:space-x-40">
                {/* Komponen Pertama */}
                <div className="lg:w-[61.66%]">
                  <div className="flex w-full flex-col lg:flex-row lg:space-x-40 mb-8">
                    <div className="lg:w-2/3">
                      <Carousel />
                    </div>
                    <div className="lg:w-1/3">
                      <NewsSlider />
                    </div>
                  </div>
                </div>
              </div>
              {/* Komponen Kedua */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Genre Populer</h2>
                <CardSlider maxItems={5} />
              </section>
              {/* Komponen Ketiga */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Populer Minggu Ini</h2>
                <CardSlider maxItems={6} />
              </section>
              {/* Komponen Keempat */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Novel Baru</h2>
                <CardSlider maxItems={6} />
              </section>
              {/* Komponen Kelima */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Kategori</h2>
                <TabsWithContent />
              </section>
              {/* Komponen Keenam */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Update Terbaru</h2>
                <RecentUpdates />
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
