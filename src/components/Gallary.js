import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Gallary = () => {
    return (
        <div className='container'>
           <center><h2>Gallery</h2></center> <br/> <br/><br/>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <center>
                    <div class="carousel-item active">
                    <img class="d-block first" style={{width: '50vw'}} src="slide.jfif" alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block first" style={{width: '50vw'}} src="slide.jfif" alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block first" style={{width: '50vw'}} src="slide.jfif" alt="Third slide"></img>
                    </div></center>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
                </div>
    </div>
    )
}

export default Gallary
