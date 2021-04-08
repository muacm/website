import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import  {Helmet}  from 'react-helmet'
import Navbar from "../components/Navbar";
import Events from '../components/Events'
import Gallary from '../components/Gallary'
import Handles from '../components/Handles'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Helmet>
        <script src='main.js'></script>
        <script src='particle.js'></script>
        <script src='jquery-3.5.1.js'></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <title>MUACM</title>
      </Helmet>


      <Navbar></Navbar>
      <ul class="background ">
      <div class="header-i container" id="canvasdiv target" style={{margin: '2px', height: '100vh', justifyContent:'center', width: '100%'}}><br/><br/>
       <canvas id="mycanvas"></canvas>
        <div class="typing">
          <h3>New Tagline</h3>
        </div>
      </div>

      <div class="container" style={{display:'none'}}>
        <canvas>your browser is not support canvas, please upgrade your browser</canvas>
      <div class="input">
          <button id="updateButton" >submit</button>
        </div>
      </div>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        
      </ul>
       <div className='header-2'><br/>
        <div className='container'>
        <h1>About Medicaps Universty</h1><br/>
         <p className='lead'> Medi-Caps has been a brand name in the arena of technical education. Since its inception in July 2000, Medi-Caps has consistently aimed at creating an ideal ambiance for budding technocrats and managers; and helping them to grow like true professionals. With its highly qualified faculty there seems an optimal blend of academic brilliance and industry exposure, supplemented by highly specialized visiting faculty and industry experts, senior professionals from various segments of different industries and business houses. It was time now to spread wings and move out for more exposure and widening of the periphery.</p><br/>
        <br/><br/>
      <h1>About ACM</h1><br/>
      <p className='lead'>The ACM (Association for Computing Machinery) is a 74-year-old international scientific and industrial computer society. Through its many Special Interest Groups, the ACM fosters research and communication in a broad range of computing areas. The society has around 100,000 members including students and professionals, spread over 174 countries leading to interaction between diversified computing enthusiasts. ACM conducts various worldwide competitions and seminars, where we have learned and scholarly speakers to provide us with the opportunity to increase our knowledge and expand our horizons. ACM provides us with one of the most enriching digital libraries which consists of database full-text articles and bibliographic literature covering computing and information technology. This leads us to availability of critical content being easily discoverable and accessible. ACM strengthens the computing profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM leads us to the pathway following which in the near future, world’s biggest problems will be solved using computing</p>
      <br/><br/>
      <h1>About ACM Medicaps Chapter</h1><br/>
      <p className='lead'>MUACM is an official computing student chapter of Medi-caps university under the patronage of technical club STIC. We are not just an organization, we are family of like-minded people who intend to make a difference in the society, MUACM provides you a platform to explore, experience and contribute to the computing world globally. It encourages you to pave the path of your career under the guidance of professional. The chapter organizes several jaw-dropping events, seminars, learning forums, talks by renowned speakers, field trips, contests which includes international college programming contest, student research competition, it also gives an advantage to access all the services and activities of its parent organization ACM with an opportunity to develop leadership skills all of these develops the competitive spirit and develops the skills suitable for the advancement of the technical world. To sum up inception of MUACM creates a bridge between you and the computing world, it opens the door for your dream success.</p>
      <br/><br/>
      <h1>Why Connect with ACM</h1><br/>
      <p className='lead'>Anybody who believes that as a professional you want to be the best professional you can be and take the world’s computing skills to another magical level, then ACM is what speaks to that aspiration. Apart from the numerous benefits that we receive such as an excellent access to the digital library and various publications, ACM considers itself a family where you will feel like you belong, the community believes in the growth and prosperity of its members and finding solutions to world problems using technical knowledge. When you become a member, you become a part of the dynamic changes that are transforming our world, by helping to shape the future of computing. ACM provides the tools and resources to help get you there, by advancing your career and enriching your knowledge with life-long learning resources. Additionally, ACM being a reputed organisation in the industry leads to higher recognition when it is mentioned on a student’s resume especially if you are a part of various competitions and events being conducted throughout the year. Being a part of this community is an honour in itself and definitely leads to your personal and professional growth.</p>
      </div>
      </div>
          <div className='header-3'>
          <Events></Events><br/>
          <Gallary></Gallary><br/>
          <Handles></Handles><br/>
      </div>
     <Footer></Footer>
    </div>
  )
}

export default Home