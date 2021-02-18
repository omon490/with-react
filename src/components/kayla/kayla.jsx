import "./kayla.css"

import Video from "../img/customers-info-img/video.png"
import { useState } from "react"

export default function Kayla() {
  const [darkMode, setDarkMode] = useState(true)
 return (

  <>
<section className={darkMode ? "customers" : "customers dark-mode"}>
      <div className="container">
        <div className="customers-wrapper">
          <div className="customers-info">
            <h2 className={darkMode ? "customers-title" : "customers-title dark-mode"}>Let's hear about Kayla's success story</h2>
            <p className="customers-text">See how well Alivio works in a real customer’s life.</p>
            <button className={darkMode ? "customers-link" : "customers-link dark-mode"} onClick={() => setDarkMode(!darkMode)}>Let's get started</button>
          </div>
          <div className="customers-video">
            <img className="customers-video-img" src={Video} alt="video" />
          </div>
        </div>
      </div>
    </section>
  </>
 )
}