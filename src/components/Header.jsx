import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { useState } from "react";

const Header = () => {
    const booking = useSelector(store => store.BookingSlice);
    let [baaroverly, setbararoverly] = useState("baarsoverly");
    let [bar, setbar] = useState("baaar");
  
    const barrOverlay = () => {
      setbararoverly("baarsoverlay show");
      setbar("baaar show");
    };
  
    const deletebar = () => {
      setbararoverly("baarsoverlay");
      setbar("baaar");
    };

  return (
    <>
      <header>
        <div className="nav">
        <div className="logo">
            <img src="./images/Capture.PNG" alt="" />
          </div>
          <div className="homelist">
            <Link to="/" className="textstyle">
              <div className="home1">Home</div>
            </Link>
           <Link to="/Hotel" className="textstyle"><div className="home1">Hotels</div></Link>
            <Link to="/MyBooking" className="textstyle"><div className="home1">MyBooking <b style={{fontSize:"14px", color: "white",backgroundColor:"#303030",padding:"1px 6px",borderRadius:"100%"}}>{booking.length}</b></div></Link>
            <Link to="/AboutUs" className="textstyle"><div className="home1">About Us</div></Link>
            <Link to="/ContactUs" className="textstyle"><div className="home1">Contact Us</div></Link>
            <div className="baar" onClick={barrOverlay}>
              <img src="./images/aaaaw.png" alt="" />
            </div>
          </div>
        </div>
        <div className={baaroverly}></div>
        <div className={bar}>
          <div className="cross" onClick={deletebar}>
            <img src="./images/sde...png" alt="" />
          </div>
          <div className="hhmc">
            <Link to="/" className="textstyle">
              <div
                className="home4"
                style={{
                  borderTop: "1px solid #3635354b",
                  borderBottom: "1px solid #3635354b",
                }}
              >
                Home
              </div>
            </Link>
            <Link to="/MyBooking" className="textstyle">
              <div
                className="home4 "
                style={{ borderBottom: "1px solid #3635354b" }}
              >
               MyBooking
              </div>
            </Link>
            <Link to="/MyBooking" className="textstyle"><div className="home4" style={{borderBottom: "1px solid #3635354b"}}>MyBooking <b style={{fontSize:"14px", color: "white",backgroundColor:"#303030",padding:"1px 6px",borderRadius:"100%"}}>{booking.length}</b></div></Link>

            <Link to="/AboutUs" className="textstyle">
              <div
                className="home4 "
                style={{ borderBottom: "1px solid #3635354b" }}
              >
                About Us
              </div>
            </Link>
            <Link to="/ContactUs" className="textstyle">
              <div
                className="home4 "
                style={{ borderBottom: "1px solid #3635354b" }}
              >
                Contact Us
              </div>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
