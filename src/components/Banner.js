import React from "react";

let bannerText = {
    textAlign:"center",
    color:"white",
    backgroundImage: 'url(http://www.themesltd.com/headers2/unlaced_nike_grey_sneakers.png)',
    backgroundSize: 500,
    height: 50,
    paddingTop: 125,
    paddingRight: 100
};

const Banner = () =>
    <div className="row"  style={bannerText}>
        <div className="col-lg-12">
        </div>
    </div>

export default Banner;
