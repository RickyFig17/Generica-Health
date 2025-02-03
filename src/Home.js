import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <>
      <h1 className="home-header">Generica Health</h1>
      <h2>{<MedicareHome />}</h2>
      <h2>{<MedicaidHome />}</h2>
      <h2>{<IfpHome />}</h2>
    </>
  );
};

function MedicareHome() {
  const title = "Medicare";
  const message =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="medicare-home-wrapper">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

function MedicaidHome() {
  const title = "Medicaid";
  const message =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="medicaid-home-wrapper">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

function IfpHome() {
  const title = "Individual and Family Plan";
  const message =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="ifp-home-wrapper">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default Home;
