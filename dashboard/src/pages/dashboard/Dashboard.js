import React, { useEffect } from "react";
import "./Dashboard.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import isAuth from "../../Utils/isAuth.js";
import Sidebar from "../../layouts/Sidebar.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth(dispatch)) {
      navigate("/login");
    }
  }, [dispatch, navigate]);

  return (
    <div>
      <Sidebar />
      <h1>Dashboard</h1>
    </div>
  );
};

export default Dashboard;
