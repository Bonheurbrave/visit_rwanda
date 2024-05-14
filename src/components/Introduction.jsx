import React from "react";

function Introduction() {
  return (
    <>
    <div className=" pt-32">

      <div className=" text-center text-slate-400 pt-32">
        <h1 className=" font-extrabold mb-4 text-slate-300 text-2xl">
          Mission , Courage and values
        </h1>
        <h1 className=" font-semibold text-slate-200 px-20 max-sm:px-2 max-sm:ln max-sm:text-xl">
          Known as the land of a thousand hills, Rwanda’s stunning scenery and
          warm, friendly people offer unique experiences in one of the most
          remarkable countries in the world. It is blessed with extraordinary
          biodiversity, with incredible wildlife living throughout its
          volcanoes, montane rainforest and sweeping plains.
        </h1>

        <div className="w-1/3 mx-auto py-8">
          <button className=" ease-in-out duration-300 hover:bg-green-400 cta bg-green-500 text-white font-semibold rounded-md w-full py-3">
            Visit Rwanda
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default Introduction;
