import React from "react";

import cargoImage from "../img/cargo.png";
import { Button } from "reactstrap";

const HomePage = () => {
  return (
    <>
      <main className="row w-100 px-5 py-5 d-flex flex-nowrap justify-content-center align-content-center">
        <section className="col-lg-5 w-75 my-3 d-flex flex-column justify-content-center align-items-md-start">
          <h1 className="display-4 font-weight-bolder">
            Easy Cargo Delivery Tracker
          </h1>
          <p className="py-2">
            Far away, behind the mountains,from countries, there live
            a dedicated team to bring you whatever products you love at the doorsteps.        </p>
            <Button href ="/login" className="landing-btn  btn-radius font-weight-light ml-n3 py-3 px-2 px-md-4">
             Try us now!
            </Button>
        </section>
        <section className="col-lg-5 mr-n4">
          <img src={cargoImage} className="img-fluid" alt="" />
        </section>
      </main>
    </>
  );
};

export default HomePage;
