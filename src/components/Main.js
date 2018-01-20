import React from "react";

let imageEdit = {
    width:200,
    height:150,
    margin: 0,
    padding: 0
};

let borderEdit = {
    borderWidth:0.5,
    borderColor:"#000000",
    borderRadius: 40,
    borderStyle: "solid",
    width:225,
    height:150,
    margin:30
};

const Main = props =>
    <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-10">
            <div className="row">
                {props.results.map(data =>
                    <div className="col-lg-3" style={borderEdit} onClick={props.handleImageClick.bind(null, data.imgId)}>
                        <img className="img-responsive" style={imageEdit} alt={data.imgAlt} src={data.imgUrl}/>
                    </div>
                )}
            </div>
        </div>
        <div className="col-lg-1"></div>
    </div>

export default Main;
