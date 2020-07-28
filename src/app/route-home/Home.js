import React, { useState, useEffect } from 'react'; 
import StreamPreview from "../core/stream-preview/StreamPreview"; 

function Home(props) {
    return (
        <React.Fragment>
            <div>Title</div>
            <StreamPreview objUI= { props.objUI }/>
        </React.Fragment>
    )
}

export default Home;