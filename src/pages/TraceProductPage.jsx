import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWarehouse,
  faBox,
  faClipboardCheck,
  faShippingFast,
} from "@fortawesome/free-solid-svg-icons";

// Filler component in the progress bar.
const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

// Progress Bar component
const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

const TraceProductPage = () => {
  // Consider order made by the user.
  const [percentage, setPercentage] = useState(10);

  // Percentage values are
  //  10, 35, 65, 100 to fill the bar.
  const updateProgress = () => {
    setPercentage(65);
  };

  // Value change trigger the length of the progress bar
  // To values should trigger this hook.
  useEffect(() => {
    // updateProgress();
  });

  return (
    <>
      <main className="my-3 mx-3">
        <h3 className="mt-5 mb-4 mx-2">Track your products </h3>
        <section className="border shadow rounded p-4 m-2">
          <header className=" d-flex justify-content-between px-3">
            <span className="text-uppercase font-weight-bold">
              Order{" "}
              <span className="pl-1" style={{ color: "orangered" }}>
                #Y234XDHR
              </span>
            </span>
            <span className="font-weight-normal">
              
              Expected Arrival 01/01/2013
              <br />
              USPS <span className="font-weight-bold">243424489657012</span>
            
            </span>
          </header>
          <main className="my-2 ml-3 py-4">
            <ProgressBar percentage={percentage} />
          </main>
          <footer className="d-flex justify-content-between font-weight-bold">
            <section className="ml-n2 d-flex flex-column justify-content-center align-items-center w-25">
              <FontAwesomeIcon icon={faClipboardCheck} size="2x" />
              <small className="mt-3 ">Order Processed</small>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center w-25">
              <FontAwesomeIcon icon={faShippingFast} size="2x" />
              <small className="mt-3">CityHub</small>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center w-25">
              <FontAwesomeIcon icon={faWarehouse} size="2x" />
              <small className="mt-3">WareHouse</small>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center w-25">
              <FontAwesomeIcon icon={faBox} size="2x" />
              <small className="mt-3">Order Arrived</small>
            </section>
          </footer>
        </section>
      </main>
    </>
  );
};

export default TraceProductPage;
