import React from 'react'
import InstagramEmbed from 'react-instagram-embed';

const Handles = () => {
    return (
        <div className='container'>
            <center><h2>Handles</h2></center><br/>
            <div className ="social-handles container">
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6781830270019608576" height="400" width="300" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
            <InstagramEmbed url='https://www.instagram.com/p/CMsDAVWBVde/' maxWidth={320}
            clientAccessToken='123|456'
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}>

            </InstagramEmbed>
            </div><br/><br/>
        </div>
    )
}

export default Handles
