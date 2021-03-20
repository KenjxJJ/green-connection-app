import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductDetailContext } from "../contexts/ProductDetailsContext";

import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const ProductsPage = () => {
  // Obtain all products
  const { productsInfo } = useContext(ProductDetailContext);  
  const [isDoneLoading, setIsDoneLoading] = useState(false);

  useEffect(() => {
     setIsDoneLoading(true);
  }, [productsInfo])

  return (
    <>
      { isDoneLoading ? (
      <section className="my-1">
        <header className="bg-dark px-4 py-5 text-white">
          <h3 className="my-3"> All products </h3>
          <p className="lead">
            {" "}
            Here is the list of all items we can bring close to you! Select to
            see the details and then order today.{" "}
          </p>
        </header>
        <main className="px-2">
          {productsInfo.map((product) => (
            <>
              <div className="w-50 py-2">
                <Card className="shadow" key={product.id}>
                  <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {product.item_number}
                    </CardSubtitle>
                    <CardText className="py-3">{product.description}</CardText>
                    <Link className="btn border-secondary" to={`/product/${product.id}`}>
                      See Details
                    </Link>
                  </CardBody>
                </Card>
              </div>
            </>
          ))}
        </main>
      </section>
      ): (
      <>
        <section className="d-flex">
        <p className="lead"> Loading...</p>
        </section>
      </>
      )}
    </>
  );
};

export default ProductsPage;
