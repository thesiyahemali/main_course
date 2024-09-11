import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// addToCart mate import karu che
import { useDispatch } from "react-redux";
import { addToCart } from "./../cartSlice";
export const Category =  () => {
  const [product, setproduct] = useState([]); //product ma loop farvi aetle nya data print thase
  const [catName, setcatName] = useState(""); //catname print karvi niche aetle aenathi apne print thase

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    // dblClick.json ma data jay teno data apo aaevu kidhu se
    axios.get(`http://localhost:8000/category?id=${id}`).then((result) => {
      setcatName(result.data[0].name); //name ne aya set karvu
      //  console.log(result.data[0].name);
      // .name aetla mate lidthu k product ma apde ae namethi data serch karva jasu

      axios
        .get(
          //   category nu name aaevse uper nu
          // product mathi productcategory malse aa api thi
          `http://localhost:8000/product?productCategory=${result.data[0].name}`
        )
        .then((res) => {
          //   console.log(res.data);
          setproduct(res.data); // product ne set karvi
        });
    });
  }, [id]);

  //  add to cart coding
  const addtocartdata =  (pid) => {
    console.log(pid);
    //  aa userid thi data lavsu apde
    let uid = localStorage.getItem("userid");
    // alert(uid)
    if (uid) {
      // cart valu api lava aya aema apde pid store karvi aetle aeni id male
      axios.get(`http://localhost:8000/cart?uid=${uid}`).then((result) => {
        // console.log(result.data);
        if (result.data.length != 0) {
          let cartdata = result.data.filter((result) => {
            return result.pid == pid;
          });
          if (cartdata.length != 0) {
            // aya update no
            axios
              .patch(`http://localhost:8000/cart/${cartdata[0].id}`, {
                quntity: parseInt(cartdata[0].quntity + 1),
              })
              .then((result) => {
                dispatch(addToCart(1));
              });
          } else {
            // aya add no code
            axios
              .post(`http://localhost:8000/cart`, {
                pid: pid,
                uid: uid,
                quntity: 1,
              })
              .then((result) => {
                dispatch(addToCart(1));
              });
          }
        } else {
          axios
            .post(`http://localhost:8000/cart`, {
              pid: pid,
              uid: uid,
              quntity: 1,
            })
            .then((result) => {
              dispatch(addToCart(1));
            });
        }
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div>
        <section className="full-width_padding">
          <div
            className="full-width_border border-2"
            style={{ borderColor: "#eeeeee" }}
          >
            <div className="shop-banner position-relative ">
              <div
                className="background-img"
                style={{ backgroundColor: "#eeeeee" }}
              >
                <img
                  loading="lazy"
                  src="../images/shop/shop_banner_character1.png"
                  width={1759}
                  height={420}
                  alt="Pattern"
                  className="slideshow-bg__img object-fit-cover"
                />
              </div>
              <div className="shop-banner__content container position-absolute start-50 top-50 translate-middle">
                <h2 className="stroke-text h1 smooth-16 text-uppercase fw-bold mb-3 mb-xl-4 mb-xl-5">
                  {catName}
                  {/* // category ne print karvi aya  */}
                </h2>
              
              </div>
              {/* /.shop-banner__content */}
            </div>
            {/* /.shop-banner position-relative */}
          </div>
          {/* /.full-width_border */}
        </section>

        <section className="shop-main container">
          <div className="d-flex justify-content-between mb-4 pb-md-2">
            <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
              <a
                href="#"
                className="menu-link menu-link_us-s text-uppercase fw-medium"
              >
                Home
              </a>
              <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                /
              </span>
              <a
                href="#"
                className="menu-link menu-link_us-s text-uppercase fw-medium"
              >
                The Shop
              </a>
            </div>
            {/* /.breadcrumb */}
            <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
              <select
                className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0"
                aria-label="Sort Items"
                name="total-number"
              >
                <option selected="">Default Sorting</option>
                <option value={1}>Featured</option>
                <option value={2}>Best selling</option>
                <option value={3}>Alphabetically, A-Z</option>
                <option value={3}>Alphabetically, Z-A</option>
                <option value={3}>Price, low to high</option>
                <option value={3}>Price, high to low</option>
                <option value={3}>Date, old to new</option>
                <option value={3}>Date, new to old</option>
              </select>
              <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0" />
              <div className="col-size align-items-center order-1 d-none d-lg-flex">
                <span className="text-uppercase fw-medium me-2">View</span>
                <button
                  className="btn-link fw-medium me-2 js-cols-size"
                  data-target="products-grid"
                  data-cols={2}
                >
                  2
                </button>
                <button
                  className="btn-link fw-medium me-2 js-cols-size"
                  data-target="products-grid"
                  data-cols={3}
                >
                  3
                </button>
                <button
                  className="btn-link fw-medium js-cols-size"
                  data-target="products-grid"
                  data-cols={4}
                >
                  4
                </button>
              </div>
              {/* /.col-size */}
              <div className="shop-asc__seprator mx-3 bg-light d-none d-lg-block order-md-1" />
              <div className="shop-filter d-flex align-items-center order-0 order-md-3">
                <button
                  className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
                  data-aside="shopFilter"
                >
                  <svg
                    className="d-inline-block align-middle me-2"
                    width={14}
                    height={10}
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_filter" />
                  </svg>
                  <span className="text-uppercase fw-medium d-inline-block align-middle">
                    Filter
                  </span>
                </button>
              </div>
              {/* /.col-size d-flex align-items-center ms-auto ms-md-3 */}
            </div>
            {/* /.shop-acs */}
          </div>
          {/* /.d-flex justify-content-between */}
          <div
            className="products-grid row row-cols-2 row-cols-md-3 row-cols-lg-4"
            id="0products-grid"
          >
            {/* product ma apde loop farvi aetle aenathi apne product aaevse tena data malse ane print thase  */}
            {product.map((result) => {
              return (
                <>
                  <div className="product-card-wrapper">
                    <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                      <div className="pc__img-wrapper">
                        <div
                          className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
                          data-settings='{"resizeObserver": true}'
                        >
                          <div
                            className="swiper-wrapper"
                            id="swiper-wrapper-5537b5836dd8df7e"
                            aria-live="polite"
                            style={{
                              transform: "translate3d(-255px, 0px, 0px)",
                              transitionDuration: "0ms",
                            }}
                          >
                            <div
                              className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                              data-swiper-slide-index={1}
                              role="group"
                              aria-label="1 / 4"
                              style={{ width: 255 }}
                            >
                              <a href="product1_simple.html">
                                <img
                                  loading="lazy"
                                  src="../images/products/product_1-1.jpg"
                                  width={330}
                                  height={400}
                                  alt="Cropped Faux leather Jacket"
                                  className="pc__img"
                                />
                              </a>
                            </div>

                            {/* /.pc__img-wrapper */}
                            <div
                              className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                              data-swiper-slide-index={1}
                              role="group"
                              aria-label="3 / 4"
                              style={{ width: 255 }}
                            >
                              <a href="product1_simple.html">
                                <img
                                  loading="lazy"
                                  src={result.productUrl}
                                  width={330}
                                  height={400}
                                  alt="Cropped Faux leather Jacket"
                                  className="pc__img"
                                />
                              </a>
                            </div>
                            {/* /.pc__img-wrapper */}
                            <div
                              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                              data-swiper-slide-index={0}
                              role="group"
                              aria-label="4 / 4"
                              style={{ width: 255 }}
                            >
                              <a href="product1_simple.html">
                                <img
                                  loading="lazy"
                                  src="../images/products/product_1.jpg"
                                  width={330}
                                  height={400}
                                  alt="Cropped Faux leather Jacket"
                                  className="pc__img"
                                />
                              </a>
                            </div>
                          </div>
                          <span
                            className="pc__img-prev"
                            tabIndex={0}
                            role="button"
                            aria-label="Previous slide"
                            aria-controls="swiper-wrapper-5537b5836dd8df7e"
                          >
                            <svg
                              width={7}
                              height={11}
                              viewBox="0 0 7 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_prev_sm" />
                            </svg>
                          </span>
                          <span
                            className="pc__img-next"
                            tabIndex={0}
                            role="button"
                            aria-label="Next slide"
                            aria-controls="swiper-wrapper-5537b5836dd8df7e"
                          >
                            <svg
                              width={7}
                              height={11}
                              viewBox="0 0 7 11"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_next_sm" />
                            </svg>
                          </span>
                          <span
                            className="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                          />
                        </div>
                        <button
                          className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                          data-aside="cartDrawer"
                          title="Add To Cart"
                          onClick={() => {
                            addtocartdata(result.id);
                          }}
                        >
                          Add To Cart
                        </button>
                      </div>
                      <div className="pc__info position-relative">
                        <p className="pc__category">{result.productCategory}</p>
                        <h6 className="pc__title">
                          <Link to={`/viwproduct/${result.id}`}>
                            {result.productName}
                          </Link>
                        </h6>
                        <div className="product-card__price d-flex">
                          <span className="money price">
                            ${result.productPrice}
                          </span>
                        </div>
                        <div className="product-card__review d-flex align-items-center">
                          <div className="reviews-group d-flex">
                            <svg
                              className="review-star"
                              viewBox="0 0 9 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_star" />
                            </svg>
                            <svg
                              className="review-star"
                              viewBox="0 0 9 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_star" />
                            </svg>
                            <svg
                              className="review-star"
                              viewBox="0 0 9 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_star" />
                            </svg>
                            <svg
                              className="review-star"
                              viewBox="0 0 9 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_star" />
                            </svg>
                            <svg
                              className="review-star"
                              viewBox="0 0 9 9"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <use href="#icon_star" />
                            </svg>
                          </div>
                          <span className="reviews-note text-lowercase text-secondary ms-1">
                            8k+ reviews
                          </span>
                        </div>
                        <button
                          className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                          title="Add To Wishlist"
                        >
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_heart" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          {/* /.products-grid row */}
          <p className="mb-1 text-center fw-medium">SHOWING 36 of 497 items</p>
          <div
            className="progress progress_uomo mb-3 ms-auto me-auto"
            style={{ width: 300 }}
          >
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "39%" }}
              aria-valuenow={39}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="text-center">
            <a
              className="btn-link btn-link_lg text-uppercase fw-medium"
              href="#"
            >
              Show More
            </a>
          </div>
        </section>
      </div>
    </>
  );
};
