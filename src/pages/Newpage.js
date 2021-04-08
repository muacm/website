import React from 'react'
import '../styles/new.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from '../components/Navbar'
import Parallax from 'react-rellax'
import Eventcard from '../components/Eventcard'
import Helmet from 'react-helmet'
const Newpage = () => {
    return (
        <div>
             <Helmet>
                <script src='main.js'></script>
                <script src='particle.js'></script>
                <script src='jquery-3.5.1.js'></script>
                <title>MUACM</title>
            </Helmet>
            <Navbar></Navbar><br/><br/><br/>
            <div className='sections'>
            <section className='first' id='sec1'>
            <center>
            <Parallax speed={5}>
                <canvas id="mycanvas"></canvas>
            </Parallax>
                <br/>
                <h3 className='text-white'>Tagline</h3></center>
                <div class="container" style={{display:'none'}}>
        <canvas>your browser is not support canvas, please upgrade your browser</canvas>
      <div class="input">
          <button id="updateButton" >submit</button>
        </div>
      </div>
            </section>
            <section>
            <Parallax speed={3} centered='true' percentage={0}><br/>
                <h2>About Medicaps</h2><br/>
                <p className='lead'> Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.</p><br/>
            </Parallax>
            </section>
            <section>
            <Parallax speed={3} centered='true' percentage={0}>
                <h2>About Medicaps</h2><br/>
                <p className='lead'> Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.</p><br/>
            </Parallax>
            </section>
            <section>
                <h2>About Medicaps</h2><br/>
                <p className='lead'> Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.</p><br/>
            </section>
            <section>
                <h2>About Medicaps</h2><br/>
                <p className='lead'> Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.</p><br/>
            </section>
            <section>
            <h4>Events</h4><br/>
            <div className='egrid'>
                <Eventcard title="first event" text='First event conducted by ACM' date='31/03/2021'></Eventcard>
                <Eventcard title="first event" text='First event conducted by ACM' date='01/04/2021'></Eventcard>
            </div>   
            </section>
            <section>
                <h2>Gallary</h2>
                <h2>Handles</h2>
            </section>
        </div>
        </div>
    )
}

export default Newpage
