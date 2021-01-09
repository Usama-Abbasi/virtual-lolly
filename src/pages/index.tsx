
import React from "react"
import { navigate } from "gatsby"
import Lolly from "../component/lolly"
import Header from "../component/Header"

export default function Home() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="lollies">
        <div>
          <Lolly
            fillLollyTop="#944f64"
            fillLollyBottom="#44320f"
            fillLollyMiddle="#85998f"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#c43737"
            fillLollyBottom="#492525"
            fillLollyMiddle="#225e9b"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#115c42"
            fillLollyBottom="#422f16"
            fillLollyMiddle="#17a3ce"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#c92775"
            fillLollyBottom="#740f3f"
            fillLollyMiddle="#330c1f"
          />
        </div>
        <div>
          <Lolly
            fillLollyTop="#573c0d"
            fillLollyBottom="#0c7bd1"
            fillLollyMiddle="#c9f4ff"
          />
        </div>
      </div>
      <input
      style = {{margin: '35px'}}
        className="createButton"
        type="button"
        value="Make New lolly for your Friend"
        onClick={() => {
          navigate("/createNewlolly")
        }}
      />
    </div>
  )
}