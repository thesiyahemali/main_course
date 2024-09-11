import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Shop = () => {
  // State to store all products and the selected category
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(''); // State to track the selected category

  useEffect(() => {
    axios.get('http://localhost:8000/product')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Function to handle category clicks
  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Filter products based on selected category
  const filteredProducts = category
    ? products.filter(product => product.productCategory === category)
    : products;

  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.productCategory))];

  return (
    <>
      <section className="full-width_padding">
        <div className="full-width_border border-2" style={{ borderColor: "#eeeeee" }}>
          <div className="shop-banner position-relative">
            <div className="background-img" style={{ backgroundColor: "#eeeeee" }}>
              <img
                loading="lazy"
                src="https://themewagon.github.io/ultras/images/banner2.jpg"
                width={1759}
                height={420}
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="shop-banner__content container position-absolute start-50 top-50 translate-middle">
              <h2 className="stroke-text h1 smooth-16 text-uppercase fw-bold mb-3 mb-xl-4 mb-xl-5">
                {category ? category :'category'}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="shop-main container">
        <div className="d-flex justify-content-between mb-4 pb-md-2">
          <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
            <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">
              Home
            </a>
            <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
              /
            </span>
            <a href="#" className="menu-link menu-link_us-s text-uppercase fw-medium">
              The Shop
            </a>
          </div>
          {/* /.breadcrumb */}
          <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
            {/* Other controls */}
          </div>
        </div>

        {/* Category Filter Section */}
        <div className="category-filter d-flex justify-content-center mb-4">
          <button
            className={`btn btn-secondary ${category === '' ? 'active' : ''}`}
            onClick={() => handleCategoryClick('')}
          >
            All
          </button>
          {categories.map((categoryItem) => (
            <button
              key={categoryItem}
              className={`btn btn-secondary ms-2 ${category === categoryItem ? 'active' : ''}`}
              onClick={() => handleCategoryClick(categoryItem)}
            >
              {categoryItem}
            </button>
          ))}
        </div>
        
        {/* Display selected category name */}
        {category && (
          <h3 className="text-center mb-4">{category}</h3>
        )}

        {/* Product Grid */}
        <div className="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4" id="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card-wrapper">
              <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  {/* Swiper Container */}
                  <div
                    className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                    data-settings='{"resizeObserver": true}'
                  >
                    <div className="swiper-wrapper" aria-live="polite">
                      {/* Swiper Slide */}
                      <div className="swiper-slide" style={{ width: 255 }}>
                        <a href="">
                          <img
                            loading="lazy"
                            src={product.productUrl}
                            width={330}
                            height={400}
                            alt={product.productName}
                            className="pc__img"
                            onClick={() => handleCategoryClick(product.productCategory)} // Image click sets category
                            style={{ cursor: 'pointer' }} // Add cursor pointer style for UX
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    data-aside="cartDrawer"
                    title="Add To Cart"
                  >
                    Add To Cart
                  </button>
                </div>

                {/* Product Info Section */}
                <div className="pc__info position-relative">
                  <p className="pc__category">{product.productCategory}</p>
                  <h6 className="pc__title">
                    <a href="">{product.productName}</a>
                  </h6>
                  <div className="product-card__price d-flex">
                    <span className="money price">${product.productPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination or "Show More" Button */}
        <p className="mb-1 text-center fw-medium">SHOWING {filteredProducts.length} of {products.length} items</p>
        <div className="progress progress_uomo mb-3 ms-auto me-auto" style={{ width: 300 }}>
          <div className="progress-bar" role="progressbar" style={{ width: "39%" }} aria-valuenow={39} aria-valuemin={0} aria-valuemax={100} />
        </div>
        <div className="text-center">
          <a className="btn-link btn-link_lg text-uppercase fw-medium" href="#">
            Show More
          </a>
        </div>
      </section>
    </>
  );
};

export default Shop;
