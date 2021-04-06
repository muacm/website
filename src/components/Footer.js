import React from 'react'
import 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle.js'
const Footer = () => {
    return (
        <div>
            <div id="footer" style={{backgroundColor: '#16425b'}}>
            <div class="f_container">
            <div class="box1">
                <img src="MuACMlogo.png" alt="MUACM Demo Logo" />
            </div>
            <div class="box2">
                <h3>Useful Links</h3>
                <ul>
                <a href="http://medicaps.ac.in">
                    <li>Medicaps University</li>
                </a>
                <a href="https://sticmedicaps.org.in">
                    <li>STIC</li>
                </a>
                <a href="https://acm.org">
                    <li>ACM</li>
                </a>
                <a href="">
                    <li>Terms and Conditions</li>
                </a>
                </ul>
            </div>
            <div class="box2">
                <h3>Social Media Handles</h3>
                <ul>
                <a href="https://www.instagram.com/mu_acm/">
                    <li><i class="fa fa-instagram"></i></li>
                </a>
                <a href="https://www.linkedin.com/company/acm-student-chapter-medicaps/?trk=public_pos">
                    <li><i class="fa fa-linkedin"></i></li>
                </a>
            
                </ul>
            </div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                <center>
                <div class="carousel-item active">
                    <img class="d-block" src="slide.jfif" alt="First slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block"  src="slide.jfif" alt="Second slide"/>
                </div>
                <div class="carousel-item">
                    <img class="d-block"  src="slide.jfif" alt="Third slide"/>
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
            <hr background-color="white"/><br/>
            <div>
            <center><p>Copyright &copy; 2021 <a>MUACM</a> All rights Reserved</p></center><br/>
            </div>
        </div></div>
    )
}

export default Footer
