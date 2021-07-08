import React, { useState } from "react";
import classNames from "classnames";
import PropTypes, { object } from "prop-types";

import styles from "./ProductList.scss";

import ProductCard from "../ProductCard/";

export const ProductList = ({ products }) => {
  const [sortAsc, setSortAsc] = useState(true);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const paginationSize =
    Math.floor(window.innerWidth / 130) * Math.floor(window.innerHeight / 300);
  const handlerCallback = (sortAsc) => {
    setSortAsc(sortAsc);
  };
  return (
    <div>
      <div className={styles.listHeader}>
        <div className={styles.pagination}>
          <div
            className={classNames(paginationIndex === 0 && styles.disabled)}
            onClick={() => {
              if (paginationIndex === 0) {
                return;
              }
              setPaginationIndex(0);
            }}
          >
            <span className={styles.pointer}>&lt;&lt;&nbsp;&nbsp;</span>
          </div>
          <div
            className={classNames(paginationIndex === 0 && styles.disabled)}
            onClick={() => {
              if (paginationIndex === 0) {
                return;
              }
              setPaginationIndex(paginationIndex - 1);
            }}
          >
            <span className={styles.pointer}>&lt;&nbsp;&nbsp;</span>
          </div>
          {`${paginationIndex + 1} (${Math.ceil(
            products.length / paginationSize
          )})`}
          <div
            className={classNames(
              paginationIndex ===
                Math.ceil(products.length / paginationSize - 1) &&
                styles.disabled
            )}
            onClick={() => {
              if (
                paginationIndex ===
                Math.ceil(products.length / paginationSize - 1)
              ) {
                return;
              }
              setPaginationIndex(paginationIndex + 1);
            }}
          >
            <span className={styles.pointer}>&nbsp;&nbsp;&gt;</span>
          </div>
          <div
            className={classNames(
              paginationIndex ===
                Math.ceil(products.length / paginationSize - 1) &&
                styles.disabled
            )}
            onClick={() => {
              if (
                paginationIndex ===
                Math.ceil(products.length / paginationSize - 1)
              ) {
                return;
              }
              setPaginationIndex(
                Math.ceil(products.length / paginationSize - 1)
              );
            }}
          >
            <span className={styles.pointer}>&nbsp;&nbsp;&gt;&gt;</span>
          </div>
        </div>

        <div className={styles.sorting}>
          <span
            className={classNames(sortAsc && styles.activeSort)}
            onClick={() => {
              setSortAsc(true);
            }}
          >
            asc
          </span>
          <span>&nbsp;|&nbsp;</span>
          <span
            className={classNames(!sortAsc && styles.activeSort)}
            onClick={() => {
              setSortAsc(false);
            }}
          >
            desc
          </span>
        </div>
      </div>

      <div className={styles.productList}>
        {products &&
          products
            .sort((a, b) => {
              const aPrice = a.actual_price,
                bPrice = b.actual_price;
              return sortAsc ? aPrice - bPrice : bPrice - aPrice;
            })
            .slice(
              paginationIndex * paginationSize,
              paginationIndex * paginationSize + paginationSize
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      product_name: PropTypes.string.isRequired,
      brand_name: PropTypes.string.isRequired,
      actual_price: PropTypes.number,
      base_price: PropTypes.number.isRequired,
      filename: PropTypes.string.isRequired,
    })
  ),
};
ProductList.defaultProps = {
  products: [
    {
      id: 404449,
      product_name: "ette",
      brand_name: "Dyrberg / Kern",
      actual_price: 55.0,
      base_price: 55.0,
      filename:
        "http://images.booztx.com/dyrbergkern/400x523/329679_ette_sg_crystal.jpg",
    },
    {
      id: 414661,
      product_name: "braided mobile chain",
      brand_name: "Octopus",
      actual_price: 44.9,
      base_price: 44.9,
      filename: "http://images.booztx.com/octopus/400x523/SC09-750MU.jpg",
    },
    {
      id: 478269,
      product_name: "FUNKY FOXY LEGGING BOX SUPPLY/BLACK 11",
      brand_name: "Pieces",
      actual_price: 16.95,
      base_price: 16.95,
      filename: "http://images.booztx.com/pieces/400x523/ps17033156_black.jpg",
    },
    {
      id: 495559,
      product_name: "LOUISE",
      brand_name: "Dyrberg/Kern",
      actual_price: 37.0,
      base_price: 37.0,
      filename:
        "http://images.booztx.com/dyrbergkern/400x523/dyr333315_rgcrystal.jpg",
    },
  ],
};
export default ProductList;
