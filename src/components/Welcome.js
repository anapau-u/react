import React from 'react'
import './Login/login.css';

function welcome({ username }) {
    return (
        <div className='welcome-message'>
            aloooo, {username} ! 
        </div>
    );
}
export default welcome;