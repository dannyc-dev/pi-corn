import React from 'react'; 
import "./StreamPreview.scss";

function StreamPreview(props) {
    return (
        <img alt="Camera Stream" src={ props.objUI.config.mjpeg_endpoint }/>
    )
}

export default StreamPreview;