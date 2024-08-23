import React, { useEffect, useState } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux"; // delte karva mate KARU se
import { addToCart, addToCartZero, removeCart as rCart } from "../cartSlice";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const [Subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  // aya total item mali  cart  ni
  const total = useSelector((data) => {
    return data.cart.count;
  });

  const dispatch = useDispatch();
  const [cart, setcart] = useState([]);
  const [product, setproduct] = useState([]);
  const [rerenderCart, setRender] = useState(false);
  //  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    // cart ni id mathi local host vali id lava
    // axios ni ander axios aaevtu hoy ne tayre async await no use karva no ek axios hoy tayre .then no use karva no
    const fetchCartdata = async () => {
      const cartdata = await axios.get(
        `http://localhost:8000/cart?uid=${localStorage.getItem("userid")}`
      );
      setcart(cartdata.data);
      // uper vala cart no response aaevo aema aene niche vala ma call karvu aetle aemthi product ni id malse aene aemthi product male
      // const productrequest ae promise ma male
      const productRequests = cartdata.data.map((item) =>
        axios.get(`http://localhost:8000/product/${item.pid}`)
      );
      const productData = await Promise.all(productRequests); // promise male tene aya bar khadva ni se and promise hoy tene awit thi answer lava no hoy
      let pDATA = productData.map((res) => res.data);
      // console.log(pDATA);
      setproduct(pDATA);

      // subtotale cart
      let subtotal = 0;
      cartdata.data.forEach((item) => {
        const product = pDATA.find((p) => p.id === item.pid);
        if (product) {
          subtotal += item.quntity * product.productPrice;
        }
      });
      setSubtotal(subtotal); // Set the subtotal
    };

    fetchCartdata();
  }, [rerenderCart]);

  const removeCart = (id, quntity) => {
    axios.delete(`http://localhost:8000/cart/${id}`).then(() => {
      setRender(!rerenderCart);
      dispatch(rCart(quntity));
    });
  };

  return (
    <>
      <main className="page-wrapper">
        <div className="mb-4 pb-4" />
        <section className="shop-checkout container">
          <h2 className="page-title">Shipping and Checkout</h2>
          <div className="checkout-steps">
            <a className="checkout-steps__item  active" href="/shop_cart">
              <span className="checkout-steps__item-number">01</span>
              <span className="checkout-steps__item-title">
                <span>Shopping Bag</span>
                <em>Manage Your Items List</em>
              </span>
            </a>
            <a className="checkout-steps__item  active" href="/shop_checkout">
              <span className="checkout-steps__item-number">02</span>
              <span className="checkout-steps__item-title">
                <span>Shipping and Checkout</span>
                <em>Checkout Your Items List</em>
              </span>
            </a>
            <a className="checkout-steps__item  " href="/shop_order_complete">
              <span className="checkout-steps__item-number">03</span>
              <span className="checkout-steps__item-title">
                <span>Confirmation</span>
                <em>Review And Submit Your Order</em>
              </span>
            </a>
          </div>
          <form>
            <div className="checkout-form">
              <div className="billing-info__wrapper">
                <h4>BILLING DETAILS</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_first_name"
                        placeholder="First Name"
                        type="text"
                      />
                      <label htmlFor="checkout_first_name">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_last_name"
                        placeholder="Last Name"
                        type="text"
                      />
                      <label htmlFor="checkout_last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_company_name"
                        placeholder="Company Name (optional)"
                        type="text"
                      />
                      <label htmlFor="checkout_company_name">
                        Company Name (optional)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="search-field my-3">
                      <div className="form-label-fixed hover-container js-content_visible">
                        <label htmlFor="search-dropdown" className="form-label">
                          Country / Region*
                        </label>
                        <div className="js-hover__open">
                          <input
                            className="form-control form-control-lg search-field__actor search-field__arrow-down"
                            id="search-dropdown"
                            readOnly=""
                            placeholder="Choose a location..."
                            type="text"
                            defaultValue=""
                            name="search-keyword"
                          />
                        </div>
                        <div className="filters-container js-hidden-content mt-2">
                          <div className="search-field__input-wrapper">
                            <input
                              className="search-field__input form-control form-control-sm bg-lighter border-lighter"
                              placeholder="Search"
                              type="text"
                            />
                          </div>
                          <ul className="search-suggestion list-unstyled">
                            <li className="search-suggestion__item js-search-select">
                              Australia
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              Canada
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              United Kingdom
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              United States
                            </li>
                            <li className="search-suggestion__item js-search-select">
                              Turkey
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mt-3 mb-3">
                      <input
                        className="form-control"
                        id="checkout_street_address"
                        placeholder="Street Address *"
                        type="text"
                      />
                      <label htmlFor="checkout_company_name">
                        Street Address *
                      </label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                      <input
                        className="form-control"
                        id="checkout_street_address_2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_city"
                        placeholder="Town / City *"
                        type="text"
                      />
                      <label htmlFor="checkout_city">Town / City *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_zipcode"
                        placeholder="Postcode / ZIP *"
                        type="text"
                      />
                      <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_province"
                        placeholder="Province *"
                        type="text"
                      />
                      <label htmlFor="checkout_province">Province *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_phone"
                        placeholder="Phone *"
                        type="text"
                      />
                      <label htmlFor="checkout_phone">Phone *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        className="form-control"
                        id="checkout_email"
                        placeholder="Your Mail *"
                        type="email"
                      />
                      <label htmlFor="checkout_email">Your Mail *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="create_account"
                        type="checkbox"
                        defaultValue=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="create_account"
                      >
                        CREATE AN ACCOUNT?
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="ship_different_address"
                        type="checkbox"
                        defaultValue=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="ship_different_address"
                      >
                        SHIP TO A DIFFERENT ADDRESS?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mt-3">
                    <textarea
                      className="form-control form-control_gray"
                      placeholder="Order Notes (optional)"
                      cols={30}
                      rows={8}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="checkout__totals-wrapper">
                <div className="sticky-content">
                  <div className="checkout__totals">
                    <h3>Your Order</h3>
                    <table className="checkout-cart-items">
                      <thead>
                        <tr>
                          <th>PRODUCT</th>
                          <th>SUBTOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {" "}
                        {cart.map((item) => {
                          const matchingProduct = product.find(
                            (result) => result.id === item.pid
                          );

                          return matchingProduct ? (
                            <tr key={item.id}>
                              <td>
                                {matchingProduct.productName} X {item.quntity}
                              </td>
                              <td>
                                ${item.quntity * matchingProduct.productPrice}
                              </td>
                            </tr>
                          ) : null;
                        })}
                      </tbody>
                    </table>
                    <table className="checkout-totals">
                      <tbody>
                        <tr>
                          <th>SUBTOTAL</th>
                          <td>${Subtotal}</td>
                        </tr>
                        <tr>
                          <th>SHIPPING</th>
                          <td>Free shipping</td>
                        </tr>
                        <tr>
                          <th>VAT</th>
                          <td>$19</td>
                        </tr>
                        <tr>
                          <th>TOTAL</th>
                          <td>${Subtotal + 19}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="checkout__payment-methods">
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_1"
                        type="radio"
                        defaultChecked=""
                        name="checkout_payment_method"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_1"
                      >
                        Direct bank transfer
                        <span className="option-detail d-block">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.Your
                          order will not be shipped until the funds have cleared
                          in our account.
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_2"
                        type="radio"
                        name="checkout_payment_method"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_2"
                      >
                        Check payments
                        <span className="option-detail d-block">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_3"
                        type="radio"
                        name="checkout_payment_method"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_3"
                      >
                        Cash on delivery
                        <span className="option-detail d-block">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </span>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        id="checkout_payment_method_4"
                        type="radio"
                        name="checkout_payment_method"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_4"
                      >
                        Paypal
                        <span className="option-detail d-block">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </span>
                      </label>
                    </div>
                    <div className="policy-text">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <a target="_blank" href="/terms">
                        privacy policy
                      </a>
                      .
                    </div>
                  </div>
                  <Link to='/confirmation' className="btn btn-primary btn-checkout">
                    PLACE ORDER
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};

export default CheckOut;
