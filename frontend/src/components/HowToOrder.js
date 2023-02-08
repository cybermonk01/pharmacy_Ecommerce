// import { Divider } from "@mui/material";
import React from "react";
// import "./Order.css";

const HowToOrder = () => {
  return (
    <>
      <div className="order">
        <div className="Heading">
          <h2>How to Order</h2>
        </div>

        <div className="Heading__Content">
          <h3 className="SubHeading__Text">Order Online</h3>
          {/* <Divider /> */}

          <div class="online">
            <ol>
              <li>
                <span>
                  Search for medication(s) you would like to buy and click on
                  “add to cart”.
                </span>
              </li>
              <li>
                <span>
                  Once the product has been added to your shopping cart, you may
                  sign-up as a New Customer, or you can login as an Existing
                  Customer.{" "}
                </span>
              </li>
              <li>
                <span>
                  If you have selected “New” customer please complete the basic
                  sign-up information.{" "}
                </span>
              </li>
              <li>
                <span>Click on “Order Now”. </span>
              </li>
              <li>
                <span>
                  Print the prescription order form if you have ordered a
                  prescription item.
                </span>
              </li>
            </ol>
          </div>

          <div class="video">
            <iframe src="//www.dailymotion.com/embed/video/x6xb6hm?queue-enable=false"></iframe>
          </div>
          <div className="Vedio__content">
            Our customer service representative Margaret gives you the{" "}
            <a href="https://www.dailymotion.com/video/x1291e9" target="_blank">
              guide to safely order prescription drugs
            </a>{" "}
            from Canada Pharmacy Online.
          </div>

          <div class="phone">
            <h2>Order By Phone</h2>
            {/* <Divider /> */}
            <p>
              Call <span className="Phone__Text">+(161)62740771 </span> if you
              would like to place your order with one of our customer service
              agents.
            </p>
            <p>
              We are open from{" "}
              <span className="Phone__Text">4:30AM - 8:00PM</span> on Monday to
              Friday, and from
              <span className="Phone__Text">7:00AM - 3:30PM</span> on Saturday
              and Sunday(Pacific Time).
            </p>
            <p>
              During all other times, you may still place your order online or
              by faxing or mailing our customer sign-up forms.{" "}
            </p>
          </div>

          <div class="fax">
            <h2>Order By Mail or Fax</h2>
            {/* <Divider /> */}
            <p>
              To place an order by mail, fax or email, you can download and
              print our Order form in
              <a href="https://www.canadapharmacyonline.com/docs/Orderform.doc">
                Microsoft Word
              </a>{" "}
              or in
              <a href="https://www.canadapharmacyonline.com/docs/Orderform.pdf">
                PDF format
              </a>
              .
            </p>
            <p>
              Fax Number: <span className="Fax__Text">+(161)62740771</span>
            </p>
            <p>
              Mailing Address:
              <span className="Fax__Text">canadianpharmacy987@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToOrder;
