import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>JobRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="careers">Careers</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
