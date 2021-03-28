import React, { useContext } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailsContext";
import { Link } from "react-router-dom";
const CreateNewPackagePage = () => {
  const { productsInfo } = useContext(ProductDetailContext);

  return (
    <>
      <section className="">
        <div className="bg-secondary mx-n3 py-4 px-5 text-white">
        <header className="w-100">
          <h3> Create New Package </h3>
          <p className="mt-3"> Add new package for a specific product, that you will choose from the list of products in our database.
          </p>
          <p>Add a new <Link className="other-link" to={'/add-product'}>product</Link> instead!</p>
        </header>
        </div>
        <main>
          <section className="p-4 d-flex justify-content-center">
            <main className="w-md-75 w-lg-50 new-product-section border shadow rounded p-3">
              <form
                className="form"
                method="POST"
                enctype="multipart/form-data"
                action="{onSubmit()}"
              >
                <legend className="pb-3 mb-0 readonly">
                  <h4>New Product </h4>
                </legend>
                <label for="product">Product</label>
                <select
                  type="text"
                  class="form-control"
                  id="item-number"
                  placeholder="B123456723"
                >
                  <option selected value="base">
                    Please Select
                  </option>
                  {productsInfo.map((product) => (
                    <option value={product.id}>
                      {product.description.substring(0, 33) + "..."}
                    </option>
                  ))}
                </select>
                <label for="product-bill-ref">Bill Reference</label>
                <input
                  type="text"
                  class="form-control"
                  id="product-bill-ref"
                  maxlength="200"
                  placeholder="W345612525"
                />{" "}
                <label for="package-size">Size</label>
                <input
                  class="form-control"
                  id="package-size"
                  minLength="0"
                  placeholder="100, 200 or Size A..."
                />{" "}
                <label for="package-weight">Weight</label>
                <input
                  type="text"
                  class="form-control"
                  id="package-weight"
                  maxlength="200"
                  placeholder="kilograms, ounces..."
                />{" "}
                <label for="package-origin">Country of Origin</label>
                <input
                  type="text"
                  class="form-control"
                  id="package-origin"
                  maxlength="200"
                  placeholder="Uganda"
                />{" "}
                <input className="ml-2" type="checkbox" id="package-safety" />
                <label for="package-safety">Dangerous Good</label>
                <label className="d-block mt-2" for="date-of-arrival">
                  Date of Arrival
                </label>
                <input
                  type="datetime-local"
                  class="form-control"
                  id="date-of-arrival"
                />
                <input
                  className="ml-2"
                  type="checkbox"
                  id="package-delivered"
                  placeholder=""
                />
                <label for="package-delivered">Recieved</label>
              <button  type="submit" className="mx-1 mt-3 d-block btn btn-submit-package">Submit</button>
              </form>
            </main>
          </section>
        </main>
      </section>
    </>
  );
};

export default CreateNewPackagePage;
