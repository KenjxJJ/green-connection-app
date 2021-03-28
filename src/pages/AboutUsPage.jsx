import React from "react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
  return (
    <>
      <section className="about-page px-5 py-5">
      <p className="other-link">&#8592;
        <Link className="other-link my-2 font-weight-bold" href="/"> Back to Home</Link>
        </p>
        <header>
          <h1 className="display-4 brand"> We are at the best!</h1>
          <p className="lead font-weight-bolder font-italic">Slogan: Leave everyone happy!</p>
        </header>
        <main className="py-3 font-weight-normal">
          <p>
            Established in 2020, during the COVID-19 crisis. People globally got
            restricted to their homes, Warehouse goods got stranded with everything of economy stuck in one place.
            Problems became to arise when particular products were definately inaccessible to buy or get, in local communities.
          </p>
          <p>
            {" "}
            There arose need of transport means for easy delivery of such inaccessible products to
            people, door to door in the world amidst the lockdown restrictions
            in various countries. We have served so far over 2,300 homes in so far countries in Europe, United States and Eastern Africa using
            our online platform connecting our well-serving suppliers, consumers and loaders (transporters).
            <br />
            </p>
            <p> Each customer creates an account on this platform, and makes
            an order and we deliver to their doorsteps.
          </p>
        </main>
        <footer className="py-2">
          <p>
            We are the
            <span className="lead font-weight-bold brand"> CargoTracker</span>.
          </p>
        </footer>
      </section>
    </>
  );
};

export default AboutUsPage;
