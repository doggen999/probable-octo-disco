import React from "react";

import PropTypes from "prop-types";

import styles from "./ProductCard.scss";

export const ProductCard = ({ product }) => {
  const formatCurrency = (
    value,
    options = { locale: "en-US", currency: "USD" }
  ) => {
    return new Intl.NumberFormat(options.locale, {
      style: "currency",
      currency: options.currency,
    }).format(value);
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        {product.filename && <img src={product.filename} />}
      </div>
      <div className={styles.productData}>
        <div className={styles.brand_name}>{product.brand_name}</div>
        <div className={styles.product_name}>{product.product_name}</div>
        <div className={styles.actual_price}>
          {formatCurrency(product.actual_price)}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    brand_name: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    actual_price: PropTypes.number.isRequired,
  }),
};
ProductCard.defaultProps = {
  product: {
    brand_name: "Brand name",
    product_name: "Product name",
    filename: "foo",
    actual_price: 9.99,
  },
};

export default ProductCard;
