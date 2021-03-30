import React from "react";
import Invoices from "../components/Invoices";
import Receipts from "../components/Receipts";
import Orders from "../components/Orders";

const TransactionsPage = () => {
  return (
    <>
      <section className="my-0 transactions-page">
        <div className="mx-auto">
          <header className="transaction-header mx-n2 lead py-4 px-5 text-center">
            <h1 className="py-3"> All Transactions</h1>
            <p>
              Here is the overview of the transactions made on this platform
              currently.
            </p>
          </header>
          <main className="px-4 py-3 w-75 mx-auto">
            <Orders />
            <Invoices />
            <Receipts />
          </main>
        </div>
      </section>
    </>
  );
};

export default TransactionsPage;
