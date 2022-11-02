import "./styles.scss";
import user from "../../imgs/user.svg";
import envelope from "../../imgs/envelope.svg";
import heart from "../../imgs/heart.svg";
import trolley from "../../imgs/trolley.svg";
import phone from "../../imgs/phone.svg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faUser, faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const TopBar = () => {
  return (
    <div className="topBar" style={{ backgroundColor: "#7E33E0" }}>
      <div className="content-container">
        <ul className="topbar-left">
          <li className="contact-left">
            <img src={envelope} alt="" />
            <span> </span>
            mhhasanul@gmail
          </li>
          <li className="contact-left">
            <img src={phone} alt="" />
            <span> </span>
            (12345)67890
          </li>
        </ul>

        <div className="topbar-right">
          <select name="language" id="language" className="topbar-right">
            <option value="English">English</option>
            <option value="English">French</option>
            <option value="English">English</option>
          </select>
          <select name="currency" className="topbar-right">
            <option value="USD">USD</option>
            <option value="USD">GDP</option>
          </select>
          <li className="topbar-right">
            Login <img src={user} alt="" />
          </li>

          <li className="topbar-right">
            WishList <img src={heart} alt="" />
          </li>

          <li className="topbar-right">
            Trolley-icon <img src={trolley} alt="" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
