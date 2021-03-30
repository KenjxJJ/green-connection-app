import React, { useContext, useState } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailsContext";
import { Link } from "react-router-dom";
const CreateNewPackagePage = () => {
  const { productsInfo } = useContext(ProductDetailContext);

  const [newPackage, setNewPackage] = useState({});

  //  Check input values
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setNewPackage({ ...newPackage, [name]: value });
  };

  // Submit a new product
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newPackage);
  };

  return (
    <>
      <section className="">
        <div className="bg-secondary mx-n3 py-4 px-5 text-white">
          <header className="w-100">
            <h3> Create New Package </h3>
            <p className="mt-3">
              {" "}
              Add new package for a specific product, that you will choose from
              the list of products in our database.
            </p>
            <p>
              Add a new{" "}
              <Link className="other-link" to={"/add-product"}>
                product
              </Link>{" "}
              instead!
            </p>
          </header>
        </div>
        <main>
          <section className="p-4 d-flex justify-content-center">
            <main className="w-md-75 w-lg-50 new-product-section border shadow rounded p-3">
              <form
                className="form"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <legend className="pb-3 mb-0 readonly">
                  <h4>New Package </h4>
                </legend>
                <label htmlFor="product">Product</label>
                <select
                  type="text"
                  className="form-control"
                  id="item-number"
                  name="product"
                  onChange={handleChange}
                >
                  <option defaultValue={"Please Select"} value="base">
                    Please Select
                  </option>
                  {productsInfo.map((product) => (
                    <option value={product.id}>
                      {product.description.substring(0, 33) + "..."}
                    </option>
                  ))}
                </select>
                <label htmlFor="product-bill-ref">Bill Reference</label>
                <input
                  type="text"
                  className="form-control"
                  id="product-bill-ref"
                  maxLength="200"
                  name="bill_reference"
                  placeholder="W345612525"
                  onChange={handleChange}
                />{" "}
                <label htmlFor="product-inv-ref">Invoice Reference</label>
                <input
                  type="text"
                  className="form-control"
                  id="product-inv-ref"
                  maxLength="200"
                  name="invoice_reference"
                  placeholder="W345612525"
                  onChange={handleChange}
                />{" "}
                <label htmlFor="package-size">Size</label>
                <input
                  className="form-control"
                  id="package-size"
                  name="size"
                  minLength="0"
                  placeholder="100, 200 or Size A..."
                  onChange={handleChange}
                />{" "}
                <label htmlFor="package-weight">Weight</label>
                <input
                  type="text"
                  className="form-control"
                  id="package-weight"
                  maxLength="200"
                  name="weight"
                  placeholder="kilograms, ounces..."
                  onChange={handleChange}
                />{" "}
                <label htmlFor="package-origin">Country of Origin</label>
                <input
                  type="text"
                  className="form-control"
                  id="package-origin"
                  name="country_of_origin"
                  maxLength="200"
                  placeholder="Uganda"
                  onChange={handleChange}
                />{" "}
                <input
                  className="ml-2"
                  type="checkbox"
                  onChange={handleChange}
                  name="is_a_dangerous_good"
                  id="package-safety"
                />
                <label htmlFor="package-safety">Dangerous Good</label>
                <label className="d-block mt-2" htmlFor="date-of-arrival">
                  Date of Arrival
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="date-of-arrival"
                  name="date_of_arrival"
                  onChange={handleChange}
                />
                <input
                  className="ml-2"
                  type="checkbox"
                  id="package-delivered"
                  placeholder=""
                  name="is_recieved"
                  onChange={handleChange}
                />
                <label htmlFor="package-delivered">Recieved</label>
                <button
                  type="submit"
                  className="mx-1 mt-3 d-block btn btn-submit-package"
                >
                  Submit
                </button>
              </form>
            </main>
          </section>
        </main>
      </section>
    </>
  );
};

export default CreateNewPackagePage;
