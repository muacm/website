import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Handles = () => {
    return (
        <div className='container'>
            <center><h2>Handles</h2></center><br/>
            <div className ="social-handles container">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6781830270019608576" height="400" width="300" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            <iframe src='https://www.instagram.com/p/CMsDAVWBVde/embed' height="400" width="320"></iframe>
            </div><br/><br/>
        </div>
    )
}

export default Handles
