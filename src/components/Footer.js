import React from "react";

let footerStyle = {
    textAlign:"center",
    height:20,
    marginTop: 5,
    borderTop: 2,
    borderTopStyle: "solid",
    borderTopColor: "#000000"
};

const Footer = props =>
    <div>
        <div className="row" style={footerStyle}>
            <div className="col-lg-12">
                <h5>Memory Game!</h5>
            </div>
        </div>
    </div>

export default Footer;