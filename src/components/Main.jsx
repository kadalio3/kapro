import React from "react";

const Main = () => {
  return (
    <main id="app">
      <div className="grid ww-8hteb5">
        <div id="loading-container-replacement">
          <div className="overflow-hidden">
            <div className="sm2:px-40 px-24 mx-auto max-w-[1280px] pt-16 pb-40 sm:pt-36 sm:pb-80">
              <div className="flex w-full flex-col lg:flex-row lg:space-x-40">
                <div className="lg:w-[61.66%]">
                  <div className="flex w-full flex-col lg:flex-row lg:space-x-40">
                    <div className="lg:w-[61.66%]">
                      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
                        Weekly Novel
                      </h2>
                      <div className="overflow-x-auto sm:space-x-16">
                        <div className="flex space-x-40">
                          {/* Menggantikan komponen Novel dengan contoh komponen */}
                          <div className="w-64 h-96 bg-gray-300"></div>
                          <div className="w-64 h-96 bg-gray-300"></div>
                          <div className="w-64 h-96 bg-gray-300"></div>
                          <div className="w-64 h-96 bg-gray-300"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-[38.34%]">
                  <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700">
                    Latest News
                  </h2>
                  <div className="overflow-x-auto sm:space-x-16">
                    <div className="flex space-x-40">
                      {/* Menggantikan komponen News dengan contoh komponen */}
                      <div className="w-64 h-48 bg-gray-300"></div>
                      <div className="w-64 h-48 bg-gray-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
