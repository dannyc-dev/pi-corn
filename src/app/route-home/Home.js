import React, { useState, useEffect } from 'react'; 

function Home(props) {
    return (
        <React.Fragment>
            <div>Title</div>
            <img alt="Camera Stream" src={ props.objUI.config.mjpeg_endpoint }/>
        </React.Fragment>
    )
}

export default Home;