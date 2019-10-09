import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "https://source.unsplash.com/user/erondu/1200x1000"
    };
  }
  render() {
    let style = {
      width: "30rem",
      height: "37rem",
      marginLeft: 30,
      marginTop: 30,
      textAlign: "center",
      backgroundColor: "#f7f7f7",
      fontFamily: "Verdana",
      color: "black"
    };
    let social_media = {
      paddingBottom: 30,
      fontSize: 30,
      color: "#ed1250",
      justifyContent: "space-evenly"
    };
    return (
      <div>
        <div className="card" style={style}>
          <div>
            <img
              class="avatar"
              alt="avatar"
              src="https://kitt.lewagon.com/placeholder/users/cveneziani"
            />
            <h1 id="header">First Card</h1>
          </div>
          <img
            style={{ width: "28rem", margin: "0 auto" }}
            src={this.state.src}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <p className="card-text">Card Test - It looks really good!</p>
            <div className="footer">
              <div className="footer-links">
                <div style={social_media}>
                  <a href="https://www.facebook.com/juanpablo.solano.9619">
                    <FontAwesomeIcon id="facebook" icon={faFacebook} />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FontAwesomeIcon id="instagram" icon={faInstagram} />
                  </a>
                  <a href="https://github.com/JuanPabloSolano1">
                    <FontAwesomeIcon id="github" icon={faGithub} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Card />, document.getElementById("root"));
