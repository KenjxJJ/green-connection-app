import React from "react";
import Invoices from "../components/Invoices";
import Receipts from "../components/Receipts";
import Orders from "../components/Orders";

const TransactionsPage = () => {
  return (
    <>
      <section className="px-4 py-3 transactions-page">
        <header className="transaction-header lead py-4 my-2">
          <h1 className="py-2"> All Transactions</h1>
          <p>
            Here is the overview of the transactions made on this platform
            currently.
          </p>
        </header>
        <main>
          <Orders />
          <Invoices />
          <Receipts />
        </main>
      </section>
    </>
  );
};

export default TransactionsPage;
