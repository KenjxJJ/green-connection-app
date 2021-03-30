import React, { useState } from "react";

const AddNewProductPage = () => {
  const [newProduct, setNewProduct] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  //  Check input values
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
   
    setNewProduct({
      ...newProduct,
      [target.name]: value,
      product_image : selectedFile
    });
  };

  // Submit a new product
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newProduct);
  };

  return (
    <>
      <section className="p-4 d-flex justify-content-center">
        <main className="w-md-75 w-lg-50 new-product-section border shadow rounded p-3">
          <form
            className="form"
            method="POST"
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <legend className="pb-2 mb-0 readonly">
              <h1> New Product </h1>
            </legend>
            <label htmlFor="item-number">Item Number</label>
            <input
              type="text"
              className="form-control"
              id="item-number"
              name="item_number"
              placeholder="B123456723"
              onChange={handleChange}
            />{" "}
            <label htmlFor="product-price">Price ($)</label>
            <input
              type="text"
              className="form-control"
              id="product-price"
              name="product_price_in_dollars"
              placeholder="The cost of the product in dollars"
              onChange={handleChange}
            />{" "}
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="The short note about the product"
              onChange={handleChange}
            />{" "}
            <label htmlFor="product-quantity">Quantity</label>
            <input
              type="text"
              className="form-control"
              id="product-quantity"
              name="quantity"
              placeholder="20, 167, 560..."
              onChange={handleChange}
            />{" "}
            <label htmlFor="product-serial-number">Serial Number</label>
            <input
              type="text"
              className="form-control"
              id="product-serial-number"
              placeholder="12356787324"
              name="serial_number"
              onChange={handleChange}
            />{" "}
            <label htmlFor="batch-number">Batch Number</label>
            <input
              type="text"
              className="form-control"
              id="product-batch-number"
              name="batch_number"
              placeholder="Batch Number"
              onChange={handleChange}
            />{" "}
            <label htmlFor="product-revision-number">Revision Number</label>
            <input
              type="text"
              className="form-control"
              id="product-revision-number"
              placeholder="W2"
              name="rev_number"
              onChange={handleChange}
            />{" "}
            <label htmlFor="product-image">Upload Product Image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setSelectedFile(e.target.files[0].name)}
              id="product-image"
              name="product_image"
            />
            <button className="btn bg-primary text-white my-3" type="submit">
              Submit
            </button>
          </form>
        </main>
      </section>
    </>
  );
};

export default AddNewProductPage;
