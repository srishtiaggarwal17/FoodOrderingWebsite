import { useState } from "react";
import { Link} from "react-router-dom";
import Darkmode from "./Darkmode";
import logoblack from "../assets/logob1.png"
import logowhite from "../assets/logow.png"

const Header=()=>{
    const [darkmodetoogle,setdarkmodetoogle]= useState(false);
    return (
        <div className="header-container  dark:tw-bg-[#832a2afa]">
          <div className="logo ">
            <img className="tw-w-48 tw-h-39 tw-object-contain" src={darkmodetoogle?logowhite:logoblack} alt="logo" />
          </div>
          <div className="">
            <ul className="nav-items ">
              <li><Link to="/" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link">HOME</Link></li>
              <li><Link to="/about" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link">ABOUT</Link></li>
              <li><Link to="/contact" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link">CONTACT</Link> </li>
              <li>
              <Link to="/cart" className="nav-link dark:tw-text-zinc-200" aria-label="nav-link"><i className="ri-shopping-cart-fill tw-text-xl"></i></Link>
              </li>
              <li>
                <Darkmode darkMode={darkmodetoogle} setdarkMode={setdarkmodetoogle}/>
              </li>
            </ul>
          </div>
        </div>
      );
}

export default Header;
