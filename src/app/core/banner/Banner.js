import React, { useState } from 'react'; 
import "./Banner.scss";

import ConnectDeviceModal from "../connect-device-modal/ConnectDeviceModal";
import RegisterDeviceModal from '../register-device-modal/RegisterDeviceModal';

function Banner(props) {
    const [connectDeviceModalShow, setConnectDeviceShow] = useState(false);
    const [registerDeviceModalShow, setRegisterDeviceShow] = useState(false);

    return (
        <div className="page-header">
            <span className="header-title">{props.title}</span>
            <div className="link-container">
                <span className="my-devices-link">My Devices</span>
                <span className="connect-device-link" onClick={(e) => {setConnectDeviceShow(true)}}>Connect a Device</span>
                <ConnectDeviceModal show={connectDeviceModalShow} onHide={(e) => {setConnectDeviceShow(false)}}/>
                <span className="register-link" onClick={(e) => {setRegisterDeviceShow(true)}}>Register</span>
                <RegisterDeviceModal show={registerDeviceModalShow} objui={props.objui} onHide={(e) => {setRegisterDeviceShow(false)}}/>
            </div>
        </div>
    )
}

export default Banner;