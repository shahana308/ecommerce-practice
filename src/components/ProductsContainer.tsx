import React, { useEffect, useState } from "react";
import { IProducts, IProductsResponse } from "../utils/types/IProducts";
import Products from "./Products";
import Seachbar from "./Seachbar";
import useDebounce from "../hooks/useDebounce";
import Cart from "./Cart";

const calculatePagesCount = (pageSize: number, totalCount: number) => {
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};

const url = "https://dummyjson.com/products";
const limit = 9;
const ProductsContainer = () => {
  const [products, setProducts] = useState<IProducts[]>();
  const [searchValue, setSearchValue] = useState<string>();
  const debouncedRenderedItems = useDebounce(searchValue, 500);
  const [debounceSearchValue, setDebounceSearchValue] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [skip, setSkip] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        debounceSearchValue
          ? `${url}/search?q=${debounceSearchValue}&limit=${limit}&skip=${skip}`
          : `${url}?limit=${limit}&skip=${skip}`
      );
      const data: IProductsResponse = await response.json();
      setProducts(data.products);
      setLoading(false);

      setPages(calculatePagesCount(data?.limit, data?.total));
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    fetchProducts();
  }, [debounceSearchValue, skip]);

  useEffect(() => {
    setDebounceSearchValue(searchValue);
  }, [debouncedRenderedItems]);

  return (
    <div>
      <h1 className="header">Products</h1>
      <Cart />
      <Seachbar onChange={onSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          {products?.length === 0 ? (
            <p>No product found</p>
          ) : (
            <div className="products-container">
              {products?.map((product: IProducts) => (
                <Products product={product} key={product.id} />
              ))}
            </div>
          )}
        </React.Fragment>
      )}
      <div className="flex center">
        {[...Array(pages).keys()].map((val: number) => (
          <div
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
            }}
            key={val}
            onClick={() => setSkip(val * limit)}>
            {val + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsContainer;
