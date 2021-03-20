import React, { createContext, useEffect, useState } from "react";

import axios from "axios";
import { API_URL } from "../constants";

// Create a context
export const ProductDetailContext = createContext();

//   {
//     id: "xdrw423456s",
//     dateOfArrival: "2012-09-12",
//     price: 892000,
//     isOrderMade: false,
//     isAtCityHub: false,
//     isAtWareHouse: false,
//     isOrderDelivered: false,
//     percentageOnProgress: 0

// },

// Context Provider
const ProductDetailsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch Data and initialize data
    const source = axios.CancelToken.source();

    const fetchProducts = async () => {
      try {
        await axios.get(API_URL, {
           cancelToken: source.token,
        }).then((res) => setProducts([...res.data]));
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };
    fetchProducts();
    return () => {
      source.cancel();
    }
  }, []);

  return (
    <ProductDetailContext.Provider value={{ productsInfo: products }}>
      {props.children}
    </ProductDetailContext.Provider>
  );
};
export default ProductDetailsContextProvider;
