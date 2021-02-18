import "./hw.css"

import Noutbook from "../img/personalize/personalize.png"
import Book from "../img/write/book.png"
import Girl from "../img/alivio-girl/girl.png"

export default function Hw() {
  return (

    <>
  <div className="container">
      <section className="binnima">
        <section className="how-it-works-wrapper">
          <h2 className="how-it-work">How it works</h2>
          <div className="explanation-wrapper">
            <div className="explanation-title-wrapper">
              <p className="explanation-title">Understand & Release the stress in 3 steps</p>
            </div>
            <div className="explanation-text-wrapper">
              <p className="explanation-text">Alivio offers as many journals it takes, tackling different areas such as anxiety, overwhelmedness, sadness, or anger, and a variety of personal causes, to help you become aware of your emotions, and guide you in how to manage stress.</p>
            </div>
          </div>
        </section>

        <section className="registration-wrapper">
          <h2 className="visually-hidden">How its registration</h2>
          <div className="steps personalize">
            <p className="steps-text">Answer a quick survey about how you express yourself, what causes you stress, and what area would you like to work on. This way, we can fully personalize your journal!</p>
            <img className="personalize-img" src={Noutbook} width="390" height="492" />
          </div>

          <div className="steps write writedown">
            <p className="steps-text">Write, draw, reflect, understand. Alivio will guide you through the prompts and will help you manage your stress!</p>
            <img className="write-img" src={Book} alt="book img" width="390" height="492" />
          </div>

          <div className="steps alivio">
            <p className="steps-text">Now you are aware, and have a way to manage and overcome your own stress.What are you waiting for? Alivio today!</p>
            <img className="alivio-img" src={Girl}  alt="girl img" width="390" height="492" />
          </div>
        </section>
      </section>
    </div>
    </>
  )
}

