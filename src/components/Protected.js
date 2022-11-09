import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
  const { Cmp, Abc } = props;

  const navigate = useNavigate();
  useEffect(() => {
    let login1 = localStorage.getItem("login");

    if (login1 !== "login") {
      navigate("/");
    } else {
      navigate("/Photos");
    }
  });
  return (
    <div>
      <Cmp />
      <Abc />
    </div>
  );
}
