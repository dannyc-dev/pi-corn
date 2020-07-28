import React from "react";
import { Link } from "react-router-dom";
import "./Banner.scss";

function Banner(props) {
    return (
        <div className="page-header">
            <span className="header-title">{props.title}</span>
        </div>
    )
}

export default Banner;