import React, { useState, useEffect } from "react";

const Orders = () => {
  const [ordersMade, setOrderMade] = useState(null);
  
  useEffect(() => {  
    setOrderMade(null)
  }, [])
  return (
    <>
      <section className="py-2 border-bottom">
        <header>
          <h2>Orders</h2>
        </header>
        <main className="mt-3">
          {ordersMade ? (
            <section className="card p-3"> Order One. </section>
          ) : (
            <section className="text-hidden py-3 px-1">No orders made yet!</section>
          )}
        </main>
      </section>
    </>
  );
};

export default Orders;
