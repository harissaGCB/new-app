import { useState, useEffect } from "react";
import logo from "./../assets/images/logos/logo.png";
import { Link } from "react-router-dom";
import "./style.css";
import { signout } from "../Redux/auth/authAction";
import { useDispatch } from "react-redux";
import { FaBars } from "react-icons/fa";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const signouthadle = async (e) => {
    e.preventDefault();
    dispatch(signout());
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarVisible(false);
      } else {
        setIsSidebarVisible(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!isSidebarVisible && (
        <button className="showSidebarBtn" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      )}

      <div id="sidebarArea" className={isSidebarVisible ? "visible" : "hidden"}>
        <div className="logoArea">
          <img src={logo} alt="Logo" />
          <button className="hideSidebarBtn" onClick={toggleSidebar}>
            <FaBars size={24} />
          </button>
        </div>

        <div>
          <Link to="/dashboard">
            <span>Dashboard</span>
          </Link>
          <Link to="/news">
            <span>News</span>
          </Link>
          <button onClick={signouthadle} className="btnLogout">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
