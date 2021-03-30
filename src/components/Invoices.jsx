import React, {useState} from "react";

const Invoices = () => {

const [invoicesCreated, setInvoicesCreated] = useState(null)

  return (
    <>
      <section className="py-3 border-bottom">
        <header>
          <h2>Invoices</h2>
        </header>
        <main className="mt-3">
          {invoicesCreated ? (
            <section className="card p-3"> Invoice One. </section>
          ) : (
            <section className="text-hidden py-3 px-1">
              No invoices made yet!
            </section>
          )}
        </main>
      </section>
    </>
  );
};

export default Invoices;
