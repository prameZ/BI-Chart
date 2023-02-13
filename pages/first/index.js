import { useState } from "react";

const first = () => {
  const [humidity, sethumidity] = useState();
  const [temperature, settemperature] = useState();

  const [ansCostFunction, setansCostFunction] = useState();

  const submit = (e) => {
    e.preventDefault();
    let CostFunction = humidity + 2 * temperature;
    setansCostFunction(CostFunction);
  };

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <label className="block mb-2 text-sm font-medium text-black">
          ค่าความชื้น
        </label>
        <input
          type="number"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => sethumidity(e.target.value)}
        ></input>

        <label className="block mb-2 text-sm font-medium text-black pt-3">
          อุณหภูมิ
        </label>
        <input
          type="number"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={(e) => settemperature(e.target.value)}
        ></input>

        <button
          className="mt-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={submit}
        >
          คำนวน
        </button>

        <div className="flex flex-row">
          <p className="pt-2 font-semibold pr-2">ผลลัพธ์ : </p>
          <p className="pt-2 font-semibold">{ansCostFunction}</p>
        </div>
      </div>
    </div>
  );
};
export default first;
