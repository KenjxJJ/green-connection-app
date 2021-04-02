import React, { useContext, useState, useEffect } from "react";
import { ProductDetailContext } from "../contexts/ProductDetailsContext";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

const ProductDetailsPage = (route) => {
  const [singleProduct, setSingleProduct] = useState({});
  const [isDoneLoading, setIsDoneLoading] = useState(false);
  const { productsInfo } = useContext(ProductDetailContext);
  const product_key = route.match.params.id;

  useEffect(() => {
    const selectedProduct = productsInfo.find(
      (product) => product.id === +product_key
    );
    // console.log(selectedProduct);
    setSingleProduct(selectedProduct);
    setIsDoneLoading(true);
  }, [product_key, productsInfo]);

  //  Add a selected product to the order list  
  const addToList = (e) => {
    // Prevent event transmission downawrds
    e.preventDefault();
    //  console.log("CLicked add to list", id);
    alert("Clicked add to list", product_key);
  };


  return (
    <>
      {isDoneLoading ? (
        <div className="row">
          <section className="my-1 w-100">
            <header className="bg-dark px-4 py-5 mt-n1 text-white">
              <p className="lead col-lg-8 mx-auto">
                {" "}
                See the details, click the add to list button to add more
                orders, or order this today!{" "}
              </p>
            </header>
            <main className="px-2 col-lg-8 mx-lg-auto">
              <section>
                <div className="product-details p-4">
                  <div className="d-flex justify-content-between">
                    <Card className="shadow w-50 w-lg-25">
                      <CardBody className="px-3 py-5">
                        <p className="lead">
                          {" "}
                          <span className="font-weight-normal">
                            Item No.{" "}
                          </span>{" "}
                          : {singleProduct.item_number}
                        </p>
                        <p className="lead">
                          <span className="font-weight-normal">Quantity</span> :{" "}
                          {singleProduct.quantity}
                        </p>
                        <p className="lead">
                          <span className="font-weight-normal">Price ($)</span>{" "}
                          : {singleProduct.product_price_in_dollars}
                        </p>
                        <p className="lead">
                          <span className="font-weight-normal">
                            Description{" "}
                          </span>
                          : {singleProduct.description}
                        </p>
                      </CardBody>
                    </Card>
                    <div className="ml-4 mw-50">
                      <img
                        className="img-product"
                        src={singleProduct.product_image}
                        alt={singleProduct.description}
                      />
                    </div>
                  </div>
                  <section className="p-3">
                    <h4 className="py-3">More Details</h4>
                    <small>
                      <p>Batch Number : {singleProduct.batch_number}</p>
                      <p>Serial Number : {singleProduct.serial_number}</p>
                      <p>Revision Number : {singleProduct.batch_number}</p>
                    </small>
                  </section>
                  <section className="px-3 d-flex flex-nowrap justify-content-between">
                    <button onClick={(e)=>addToList(e)} className="btn btn-success text-white bg-success">
                      Add to List
                    </button>

                    <Link to={"/trace"}>
                      <button className="btn">Order Now!</button>
                    </Link>
                  </section>
                </div>
              </section>
            </main>
          </section>
        </div>
      ) : (
        <section className="d-flex justify-content-center align-content centerw-50">
          <div
            className="spinner-grow text-info m-5"
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetailsPage;
