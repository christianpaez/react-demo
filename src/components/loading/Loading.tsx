import React from 'react'
import './Loading.css'

const Loading = () => (
    <div className='overlay'>
        <div className='loadingContainer'>
            <div className="lds-dual-ring"></div>
        </div>
    </div>

);

export default Loading;
