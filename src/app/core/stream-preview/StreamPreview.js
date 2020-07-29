import React from 'react'; 
import "./StreamPreview.scss";

function StreamPreview(props) {
    return (
        <img alt="Camera Stream" src={props.streamSource}/>
    )
}

export default StreamPreview;