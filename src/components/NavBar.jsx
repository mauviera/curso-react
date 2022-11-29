import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="row">
        <div className="col-md-6">
            <nav class="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={"images/logo.svg"} width={80} alt="Logo CompuTech" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/Remeras">Remeras</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Jeans">Jeans</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Zapatillas">Zapatillas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/Accesorios">Accesorios</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>

            <div className="col-md-6 d-flex justify-content-end align-items-cente " width={32}>
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;