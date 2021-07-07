import React from "react";

import styles from "./app.scss";

import ProductList from "./components/ProductList";

import data from "./product_list.json";

export default () => (
  <div className={styles.app}>
    <div className={styles.main}>
      <div>
        <ProductList products={data} />
      </div>
    </div>
  </div>
);
