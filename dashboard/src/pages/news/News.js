import React, { useEffect } from "react";
import "./News.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import isAuth from "../../Utils/isAuth.js";
import Sidebar from "../../layouts/Sidebar.js";

const News = () => {
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
      <h1>News</h1>
    </div>
  );
};

export default News;
