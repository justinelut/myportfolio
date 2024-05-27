import React from "react";

export default function Frameworks() {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col w-[45%] gap-y-10 h-[600px]">
        <div className="w-full py-10 bg-red-300 h-[100px]"></div>
        <div className="w-full py-10 bg-red-300 h-[500px]"></div>
      </div>

      <div className="flex flex-row w-[55%] gap-10 h-[600px]">
        <div className="w-full flex flex-col gap-10">
          <div className="w-full bg-red-300 gap-10 flex flex-row h-[400px]">
            <div className="flex flex-col gap-10">
              <div className="flex flex-col bg-green-600 py-10 px-20 w-full"></div>
              <div className="flex flex-col bg-green-600 py-10 px-20 w-full"></div>
            </div>
            <div className="flex flex-col bg-green-600 py-10 px-20 w-full"></div>
          </div>

          <div className="w-full bg-red-300 flex flex-row gap-10 h-[200px]">
            <div className="bg-green-600 p-20 w-[70%]"></div>
            <div className="bg-green-600 p-20 w-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
