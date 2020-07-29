import React from 'react'; 
import StreamPreview from "../core/stream-preview/StreamPreview"; 
import Banner from "../core/banner/Banner"

import "./Home.scss";

function Home(props) {
    return (
        <div className="page-body">
            <Banner title="Camera Dashboard"/>
            <div className="stream-container"> 
                { props.objUI.config.mjpeg_endpoints.map((endpoint, index) => {
                    return(
                        <StreamPreview key={ index } streamSource={ endpoint }/>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;