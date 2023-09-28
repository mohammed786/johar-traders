import React, { FunctionComponent } from "react";

interface ProductsProps {
  products: {
    name: string;
    image: string;
    brand: string;
    description: string;
    thickness: string;
  }[];
}

const Products: FunctionComponent<ProductsProps> = ({ products }) => {
  return (
    <section id="section-2" className="section__products">
      <div className="product section-width__regular">
        <div className="products__header">
          <h2 className="section-header__heading">See Our Products</h2>
          <div className="section-header__sub-heading">
            Finest Glass For Your House
          </div>
        </div>
        <div className="products__wrapper">
          {products.map((product) => (
            <div className="product-card">
              <div className="product-card__img product-card__img--top">
                <img src={product.image} alt="" />
              </div>
              <div className="product-card__content">
                <div className="product-card__text">
                  <h3 className="product-card__heading">{product.name}</h3>
                  <ul className="product-card__properties">
                    <li>
                      <strong>Brand:</strong>
                      {product.brand}
                    </li>
                    {/* <li>
                      <strong>Thikness:</strong> {product.thickness}
                    </li> */}
                  </ul>
                  <p className="product-card__details">{product.description}</p>
                </div>
                <button className="product-card__btn--subtle">Get Quote</button>
              </div>
            </div>
          ))}
          <div className="products__cta">
            <a href="/products.html" className="products__see-all-link">
              See All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
