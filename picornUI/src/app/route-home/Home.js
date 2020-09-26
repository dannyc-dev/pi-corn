import React, { useState, useEffect, useCallback } from 'react'; 
import StreamPreview from "../core/stream-preview/StreamPreview"; 
import Banner from "../core/banner/Banner"
import "./Home.scss";

function Home(props) {
    const [registeredDevices, setRegisteredDevices] = useState([]);

    const handleRegistration = useCallback(() => {
        fetchDevices();
    });

    const fetchDevices = async () => {
        const response = await fetch(`${props.objUI.config.api_endpoint_getDevices}`);
        if (!response.ok) {
            //catch error 
            console.log(response);
        } else {
            const response_json = await response.json();
            setRegisteredDevices(response_json["registered_devices"]);
        }
    };

    useEffect(() => {
        fetchDevices();
        props.objUI["update_registered_devices"] = handleRegistration
      }, []);

    return (
        <div className="page-body">
            <Banner title="Camera Dashboard" objui={props.objUI}/>
            <div className="stream-container"> 
                { registeredDevices &&
                    registeredDevices.map((endpoint, index) => {
                        return(
                            <div className="stream-widget"  key={ index }>
                                <StreamPreview objui={props.objUI} streamSource={ endpoint }/>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default Home;