import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-20 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="" src={Laptop} alt="Laptop" />

        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Most companies are collecting loads of data all the time but, in its
            raw form, this data doesn’t really mean anything. This is where data
            analytics comes in. Data analytics is the process of analyzing raw
            data in order to draw out meaningful, actionable insights, which are
            then used to inform and drive smart business decisions. A data
            analyst will extract raw data, organize it, and then analyze it,
            transforming it from incomprehensible numbers into coherent,
            intelligible information. Having interpreted the data, the data
            analyst will then pass on their findings in the form of suggestions
            or recommendations about what the company’s next steps should be.
          </p>

          <button className="bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
