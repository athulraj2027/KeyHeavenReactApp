import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";

const AdminLayout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/admin/login";
  return (
    <div>
      {!isLoginPage && <Menu />}
      <Outlet />
    </div>
  );
};

export default AdminLayout;
