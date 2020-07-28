import React, { useState, useEffect } from 'react'; 
import StreamPreview from "../core/stream-preview/StreamPreview"; 
import Banner from "../core/banner/Banner"

import "./Home.scss";

function Home(props) {
    return (
        <div className="page-body">
            <Banner title="Dashboard"/>
            <div className="stream-container"> 
                <StreamPreview objUI= { props.objUI }/>
            </div>
        </div>
    )
}

export default Home;