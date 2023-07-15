import { useState } from 'react';
import './App.css';
import img1 from './assets/image-product-desktop.jpg';
import img2 from './assets/image-product-mobile.jpg';

export default function App() {
  return (
    <div className="container bg-slate-200 h-screen block sm:flex">
      {/* first side div here */}
      <div className="mx-0 sm:m-auto bg-slate-400 w-full h-full rounded-lg shadow-xl sm:flex overflow-hidden block sm:h-4/6 sm:w-[512px]">
        <div className="w-full rounded-lg overflow-hidden sm:w-1/2">
          <picture>
            <source srcSet={img2} media="(max-width: 599px)" />
            <img src={img1} alt="" className="w-full h-full sm:block" />
          </picture>
        </div>

        {/* second side div here */}
        <div className="side-div bg-slate-100 w-full h-full block text-center text-slate-950 font-bold overflow-hidden sm:w-1/2">
          <div className="block w-3/4 mx-4 my-10 text-left">
            <p className="text-neutral-400 montse tracking-wider text-[14px]">P E R F U M E</p>
            <h1 className="my-2 fraunces text-2xl leading-tight">Gabrielle Essence Eau De Parfum</h1>
            <p className="montse text-neutral-400 text-[10px]">
              A floral, solar and voluptuous interpretation composed by Olivier page,
              Perfumer-creator for the House of CHANEL.
            </p>
            <div className="flex flex-row space-x-2 my-6">
              <h1 className="fraunces text-deepgreen text-emerald-700 hover:text-lime-900 text-[24px]">
                $149.99
              </h1>
              <i>
                <p className="montse text-[10px] text-neutral-400 py-3">
                  <del>$169.99</del>
                </p>
              </i>
            </div>

            <div className="flex bg-emerald-700 hover:bg-lime-900 transition-all 3s p-2 justify-center items-center text-white montse text-[10px] rounded shadow-md w-1/2 sm:w-full m-auto">
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
