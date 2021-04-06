import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Events = () => {
    return (
        <div className='container'><br/>
                       <center><h2>Events</h2></center>  <br/> <br/><br/>
            <div className='event_container'>
                    <div class="event Eventcontainer">
                        <img class="rounded-circle" src="demo_character.jpg" alt="Card  cap"></img>
                        <div class="overlay rounded-circle">
                            <div class="text">Core Member <br/> Recruitment Session</div>
                            <div class="textDesc container">The following event was being held to recruit
                            Core team members in the MUACM family and move our way to the
                            chartering of the chapter.</div>
                        </div>
                    </div>
                    <div class="event Eventcontainer">
                    <img class="rounded-circle" src="demo_character.jpg" alt="Cardcap"></img>
                    <div class="overlay rounded-circle">
                        <div class="text">Core Member <br/> Recruitment Session</div>
                        <div class="textDesc container">The following event was being held to recruit
                        Core team members in the MUACM family and move our way to the
                        chartering of the chapter.</div>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Events
