import "./header.css"

import Logo from "../img/site-logo/logo.svg"
import { useState } from "react";

// const click = () => {
//   setNightMode(!nightMode)
// }



 function Header() {

  const [nightMode, setNightMode] = useState(true)
  const [darkTheme, setDarkTheme] = useState(true)
  return (

    <>
  <header className="header">
    <div className="container">
      <div className={nightMode ? "header-top" : "header-top night"}>
        <a className="logo" href="#">
          <img className="logo-img" src={Logo} alt="logo alivio" width="80" height="23" />
        </a>
        <ul className="header-list">
          <li className="header-item">
            <a className={nightMode ? "header-link" : "header-link night"} href="#">Why Alivio</a>
          </li>

          <li className="header-item">
            <a className={nightMode ? "header-link" : "header-link night"} href="#">Solutions</a>
          </li>

          <li className="header-item">
            <a className={nightMode ? "header-link" : "header-link night"} href="#">Community</a>
          </li>

          <li className="header-item">
            <a className={nightMode ? "header-link" : "header-link night"} href="#">Pricing</a>
          </li>
        </ul>

        <a className={nightMode ? "sign-link" : "sign-link night"} href="#">Sign in</a>

        <button className={nightMode ? "trial-link" : "trial-link night"} onClick={() => setNightMode(!nightMode)}>{nightMode ? "On dark" : "On light"}</button>
      </div>
    </div>

    <section className="section-aware">
      <div className="container">
        <p className={darkTheme ? "aware-heading" : "aware-heading dark"}>Be aware, Manage well.</p>
        <p className={darkTheme ? "aware-text" : "aware-text dark"}>Everyone experiences stress in different ways.
          Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
          <button className="aware-link" onClick={() => setDarkTheme(!darkTheme)}>Find Your Way</button>
        </div>
      </section>
    </header>
    </>
  )
}

export default Header
