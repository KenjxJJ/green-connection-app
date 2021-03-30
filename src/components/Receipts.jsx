import React, { useState, useEffect } from "react";

const Receipts = () => {
  const [receiptsPaid, setReceiptsPaid] = useState(null);

  useEffect(() => {
    setReceiptsPaid(null);
  }, []);

  return (
    <>
      <section className="py-3">
        <header>
          <h2>Receipts</h2>
        </header>
        <main className="mt-3">
          {receiptsPaid ? (
            <section className="card p-3"> Receipt One. </section>
          ) : (
            <section className="text-hidden py-3 px-1">
              No receipts paid yet!
            </section>
          )}
        </main>
      </section>
    </>
  );
};

export default Receipts;
