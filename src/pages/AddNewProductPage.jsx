import React from "react";

const AddNewProductPage = () => {
  return (
    <>
      <section className="p-4 d-flex justify-content-center">
        <main className="w-md-75 w-lg-50 new-product-section border shadow rounded p-3">
          <form
            className="form"
            method="POST"
            enctype="multipart/form-data"
            action="{onSubmit()}"
          >
            <legend className="pb-2 mb-0 readonly">
              <h1> New Product </h1>
            </legend>
            <label for="item-number">Item Number</label>
            <input
              type="text"
              class="form-control"
              id="item-number"
              placeholder="B123456723"
            />{" "}
            <label for="product-price">Price ($)</label>
            <input
              type="text"
              class="form-control"
              id="product-price"
              placeholder="The cost of the product in dollars"
            />{" "}
            <label for="description">Description</label>
            <input
              type="text"
              class="form-control"
              id="description"
              placeholder="The short note about the product"
            />{" "}
            <label for="product-quantity">Quantity</label>
            <input
              type="text"
              class="form-control"
              id="product-quantity"
              placeholder="20, 167, 560..."
            />{" "}
            <label for="product-serial-number">Serial Number</label>
            <input
              type="text"
              class="form-control"
              id="product-serial-number"
              placeholder="12356787324"
            />{" "}
            <label for="batch-number">Batch Number</label>
            <input
              type="text"
              class="form-control"
              id="product-batch-number"
              placeholder="Batch Number"
            />{" "}
            <label for="product-revision-number">Revision Number</label>
            <input
              type="text"
              class="form-control"
              id="product-revision-number"
              placeholder="W2"
            />{" "}
            <label for="product-image">Upload Product Image</label>
            <input type="file" className="form-control" id="product-image" />
          </form>
        </main>
      </section>
    </>
  );
};

export default AddNewProductPage;
