import React from 'react'; 
import "./StreamPreview.scss";

import ColorCameraIcon from "../../../assets/camera_color.svg";
import Alert from "../../../assets/alert.svg";
import Target from "../../../assets/target.svg";
import Trash from "../../../assets/bin.svg";

function StreamPreview(props) {
    const iconOnClick = (e) => {
        console.log(e.target.name);
    };

    const deleteDevice = async (e) => {
        const formData = {};
        formData['device'] = e.target.id;
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        };
        const response = await fetch(`${props.objui.config.api_endpoint_delete}`, requestOptions);
        if (!response.ok) {
            //catch error 
            console.log(response);
        } else {
            console.log(response);
            const response_json = await response.json();
            //TODO Do something with response_json / return meaningful data
            props.objui.update_registered_devices();
        }
    };

    return (
            <>
                <img alt="Camera Stream" src={props.streamSource}/>
                <div className="stream-preview-controller">
                    <div className="icon-container">
                        <img className="camera-icon" name="camera" src={ColorCameraIcon} onClick={(e) => iconOnClick(e)}/>
                        <img className="camera-icon" name="alert" src={Alert} onClick={(e) => iconOnClick(e)}/>
                        <img className="camera-icon" name="target" src={Target} onClick={(e) => iconOnClick(e)}/>
                        <img className="camera-icon" name="delete" id={props.streamSource} src={Trash} onClick={(e) => deleteDevice(e)}/>
                    </div>
                </div>
            </>
    )
}

export default StreamPreview;