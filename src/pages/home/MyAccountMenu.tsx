import { Link } from "react-router-dom";
import "./MyAccountMenu.scss";
import img from "../../assets/img/onions.png";
export default function MyAccountMenu() {
  const data = require("./OrderData.json");
  return (
    <>
      <div className="menu-container">
        <div className="menu-wrapper">
          <div className="out_row">
            <div className="top_inner_row">
              <span className="account">My Account</span>
            </div>
            <div className="bottom_inner_row">
              <div className="order global-border-radius">My Order</div>
              <div className="address global-border-radius">My Address</div>
              <div className="profile global-border-radius">My Profile</div>
              <div className="wishlist global-border-radius">My Wish List</div>
            </div>
          </div>

          {data.map((value: any) => {
            return (
              <div className="details global-border-radius">
                <div className="top-inner-row ">
                  <div className="order-date">
                    Ordered On: {value.orderDate}
                  </div>
                  <div className="order-number">Order No#: {value.id}</div>
                </div>
                <div className="bottom-inner-row ">
                  <section className="image">
                    <img src={img} alt="" />
                  </section>
                  <div className="amount">$20</div>
                  <div className="order-details">
                    <div className="order-status">Status: {value.status}</div>
                    <button className="view-order-details global-border-radius">
                      View Order Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
