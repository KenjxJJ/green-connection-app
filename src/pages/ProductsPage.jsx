import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductDetailContext } from "../contexts/ProductDetailsContext";

import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const ProductsPage = () => {
  // Obtain all products
  const { productsInfo } = useContext(ProductDetailContext);
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
    setIsDoneLoading(true);
  }, [productsInfo]);

  return (
    <>
      {isDoneLoading ? (
        <section className="my-1">
          <header className="all-products-section px-4 py-5 my-n1">
            <h3 className="my-3"> All products </h3>
            <p className="lead">
              Here is the list of all items we can bring close to you! Select to
              see the details and then order today!
            </p>
          </header>
          <main className="px-3 d-md-flex justify-content-between">
            <div className="py-3 w-lg-75 d-md-flex flex-wrap">
              {productsInfo.map((product) => (
                <>
                  <Card className="w-md-75 shadow my-2 m-md-4" key={product.id}>
                    <CardBody>
                      <CardTitle tag="h5">
                        $ {product.product_price_in_dollars}
                      </CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {product.item_number}
                      </CardSubtitle>
                      <CardText className="py-3">
                        {product.description}
                      </CardText>
                      <Link
                        className="btn border-secondary"
                        to={`/product/${product.id}`}
                      >
                        See Details
                      </Link>
                    </CardBody>
                  </Card>
                </>
              ))}
            </div>
            <div className="buttons py-4 mx-2">
              <Link
                id="btn-add-product"
                to={"/add-product"}
                className="btn my-3 d-block w-100"
              >
                Add Product
              </Link>
              <Link
                to={"/create-package"}
                id="btn-create-package"
                className="btn my-3 d-block w-100"
              >
                Create Package
              </Link>
            </div>
          </main>
        </section>
      ) : (
        <>
         <section className="d-flex justify-content-center align-items-center w-50">
          <div class="spinner-border text-light" role="status">
            <span class="sr-only">Loading...</span>
          </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductsPage;
