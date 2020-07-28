import React, { useState, useEffect } from 'react'; 

const Home = (props) => {
    return (
        <React.Fragment>
            <div>Title</div>
            <img src={ props.objUI.config.mjpeg_endpoint }/>
        </React.Fragment>
    )
}

export default Home;