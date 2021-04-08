import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Helmet} from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Teams = () => {
  return (
    <div>

    <Helmet>
      <title>MUACM - Teams</title>
    </Helmet>

    <Navbar></Navbar>       {/** appending navbar component here */}

    {/** adding team members profile cards */}
      <div id="teams-page">
        <h1 class="heading">Our Team</h1>
        <div class="teamsContainer">

          <h2 class="team_section_title">Faculty Coordinator</h2>
          <div class="layer_hod">    

            <div class="profile_card">
              <img src="/static/MuACMlogo.png" alt="profile-photo" class="profile_image" />
                <h3 class="profile_name">Dheeraj Rane</h3>
                <p class="profile_desc">Faculty Coordinator</p>
                <div class="profile_icons">
                  <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-twitter-square"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
                  <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>

            <h2 class="team_section_title">Council Members</h2>
            <div class="layer_council">
          
              <div class="profile_card">
                <img src="static/profile/Screenshot_20210324-075137 - nishant gandhi.jpg" alt="profile-photo" class="profile_image" />
                  <h3 class="profile_name">Nishant Gandhi</h3>
                  <p class="profile_desc">Vice-Chair, Council Body, MUACM</p>
                  <div class="profile_icons">
                    <a href="https://www.linkedin.com/in/nishant-gandhi-1503" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://www.twitter.com/nishant1503" target="_blank"><i class="fab fa-twitter-square"></i></a>
                    <a href="https://www.facebook.com/nishant.gandhi.1515" target="_blank"><i class="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/_irresponsible__beardo_" target="_blank"><i class="fab fa-instagram"></i></a>
                    <a href="https://github.com/nishant1503" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                  </div>
                </div>

                <div class="profile_card">
                  <img src="../../static/profile/IMG-20200426-WA0003-01 - Sarthak Khandelwal.jpeg
        " alt="profile-photo" class="profile_image" />
                    <h3 class="profile_name">Sarthak Khandelwal</h3>
                    <p class="profile_desc">Vice-Chair, Council Body, MUACM</p>
                    <div class="profile_icons">
                      <a href="https://www.linkedin.com/in/forwet/" target="_blank"><i class="fab fa-linkedin"></i></a>
                      <a href="https://twitter.com/Sarthak60130220" target="_blank"><i class="fab fa-twitter-square"></i></a>
                      <a href="https://www.facebook.com/sarthakforwet/" target="_blank"><i class="fab fa-facebook"></i></a>
                      <a href="https://www.instagram.com/sarthakkhandelwal7676/" target="_blank"><i class="fab fa-instagram"></i></a>
                      <a href="https://github.com/sarthakforwet" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                    </div>
      </div>

                  <div class="profile_card">
                    <img src="../../static/profile/IMG_20210211_110652 - IT- A Hiteshi Gupta.png" alt="profile-photo" class="profile_image" />
                      <h3 class="profile_name">Hiteshi Gupta</h3>
                      <p class="profile_desc">Treasure MU-ACM</p>
                      <div class="profile_icons">
                        <a href="https://www.linkedin.com/in/hiteshi-gupta-7a51b5191/" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://www.twitter.com/hiteshii_" target="_blank"><i class="fab fa-twitter-square"></i></a>
                      
                        <a href="https://www.instagram.com/hiteshiiiii__" target="_blank"><i class="fab fa-instagram"></i></a>

                      </div>
      </div>
                  </div>

                  <h2 class="team_section_title">Core Members</h2>
                  <div class="layer_core">
                  
                    <div class="profile_card">
                      <img src="../../static/profile/profilePhotoRed - Yash Sehgal.jpg" alt="profile-photo" class="profile_image" />
                        <h3 class="profile_name">Yash Sehgal</h3>
                        <p class="profile_desc">Web Developer</p>
                        <div class="profile_icons">
                          <a href="https://www.linkedin.com/in/yash-sehgal-55b7711a4/" target="_blank"><i class="fab fa-linkedin"></i></a>
                          <a href="https://twitter.com/YashSeh90869786" target="_blank"><i class="fab fa-twitter-square"></i></a>
                          <a href="https://www.facebook.com/yash.sehgal.96780/" target="_blank"><i class="fab fa-facebook"></i></a>
                          <a href="https://www.instagram.com/sehgalyash_/" target="_blank"><i class="fab fa-instagram"></i></a>
                          <a href="https://github.com/yashsehgal" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                        </div>
      </div>

                      <div class="profile_card">
                        <img src="../../static/profile/20210221_120714 - Saud Hashmi.jpg" alt="profile-photo" class="profile_image" />
                          <h3 class="profile_name">Saud Hashmi</h3>
                          <p class="profile_desc">Head of Content</p>
                          <div class="profile_icons">
                            <a href="https://www.linkedin.com/in/saud-hashmi-19a317a3/" target="_blank"><i class="fab fa-linkedin"></i></a>
                            <a href="https://twitter.com/Hash_Saud" target="_blank"><i class="fab fa-twitter-square"></i></a>
                            <a href="https://www.facebook.com/saud.hashmi.161/" target="_blank"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/i_s.a.u.d/" target="_blank"><i class="fab fa-instagram"></i></a>
                            <a href="https://github.com/SuperbSaud/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                          </div>
      </div>

                        <div class="profile_card">
                          <img src="../../static/profile/B643E1F2-D6DF-4AA0-B0AE-C3BD7331A4F7 - Riya ahuja.jpeg" alt="profile-photo" class="profile_image" />
                            <h3 class="profile_name">Riya Ahuja</h3>
                            <p class="profile_desc">Head of Management</p>
                            <div class="profile_icons">
                              
                              
                            
                              <a href="https://www.instagram.com/riyaahuja84" target="_blank"><i class="fab fa-instagram"></i></a>
                            </div>
      </div>
                          <div class="profile_card">
                            <img src="../../static/profile/PicsArt_09-26-10.41.10 - Samriddhi Kaur.jpg" alt="profile-photo" class="profile_image" />
                              <h3 class="profile_name">Samriddhi Kaur</h3>
                              <p class="profile_desc">Head of Graphics</p>
                              <div class="profile_icons">
                                <a href="https://www.linkedin.com/in/samriddhi-kaur-b02b78204/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                <a href="#" target="_blank"><i class="fab fa-twitter-square"></i></a>
                            
                                <a href="https://www.instagram.com/samriddhi.k.562" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a href="https://github.com/samriddhik562/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                              </div>
      </div>

                          </div>
                          <div class="layer_core">
                           
                            <div class="profile_card">
                              <img src="../../static/profile/PhotoGrid_Plus_1614346924324 - Ritika Maheshwari.jpg" alt="profile-photo" class="profile_image" />
                                <h3 class="profile_name">Ritika Maheshwari</h3>
                                <p class="profile_desc">Head of Marketing</p>
                                <div class="profile_icons">
                                  <a href="https://www.linkedin.com/in/ritika-maheshwari-7837871ab/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                
                                  <a href="https://www.facebook.com/ritika.maheshwari.10" target="_blank"><i class="fab fa-facebook"></i></a>
                                  <a href="https://www.instagram.com/__ritika16" target="_blank"><i class="fab fa-instagram"></i></a>
                                </div>
      </div>

                              <div class="profile_card">
                                <img src="../../static/profile/IMG_20190309_221336_573 - mihir dutta.jpg" alt="profile-photo" class="profile_image" />
                                  <h3 class="profile_name">Mihir Dutta</h3>
                                  <p class="profile_desc">Head of Web Development</p>
                                  <div class="profile_icons">
                                    <a href="https://www.linkedin.com/in/mihirduttaa/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                    <a href="https://twitter.com/exclusivemihir" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                    <a href="https://www.facebook.com/profile.php?id=100005641725979" target="_blank"><i class="fab fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/mihirduttaa/" target="_blank"><i class="fab fa-instagram"></i></a>
                                  </div>
      </div>

                              </div>

                              <h2 class="team_section_title">Executive Members</h2>
                              <div class="layer_executive_01">
                              
                                <div class="profile_card">
                                  <img src="../../static/profile/20210401_122040 - Mayank Verma.jpg" alt="profile-photo" class="profile_image" />
                                    <h3 class="profile_name">Mayank Verma</h3>
                                    <p class="profile_desc">Management Team</p>
                                    <div class="profile_icons">
                                      <a href="https://www.linkedin.com/in/mayank-v-946404131/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                  
                                     
                                      <a href="https://www.instagram.com/vmayank_007" target="_blank"><i class="fab fa-instagram"></i></a>
                                      <a href="https://github.com/MVerma44/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                    </div>
      </div>

                                  <div class="profile_card">
                                    <img src="../../static/profile/DP - JASPREET OP.jpg" alt="profile-photo" class="profile_image" />
                                      <h3 class="profile_name">Jaspreet Singh Saini</h3>
                                      <p class="profile_desc">Executive member</p>
                                      <div class="profile_icons">
                                        <a href="https://www.linkedin.com/in/jaspreet-singh-saini-a916111b2/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                        <a href="https://twitter.com/s_jaspreet099" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                   
                                        <a href="https://www.instagram.com/official_jaspreet_saini/" target="_blank"><i class="fab fa-instagram"></i></a>
                                        <a href="http://github.com/Jaspreet099/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                      </div>
      </div>

                                    <div class="profile_card">
                                      <img src="../../static/profile/IMG_3620 - Samarth Sharma.jpg" alt="profile-photo" class="profile_image" />
                                        <h3 class="profile_name">Samarth Sharma</h3>
                                        <p class="profile_desc">Marketing and Management team</p>
                                        <div class="profile_icons">
                                          <a href="https://www.linkedin.com/in/samarth-sharma2406/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                      
                                        
                                          <a href="https://www.instagram.com/_samarth_sharma._" target="_blank"><i class="fab fa-instagram"></i></a>
                                          <a href="http://github.com/24samarth/" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                        </div>
      </div>

                                      <div class="profile_card">
                                        <img src="../../static/profile/B453BF47-756C-49E1-B6FA-22798BF40169 - Aditi Mandlik.jpeg" alt="profile-photo" class="profile_image" />
                                          <h3 class="profile_name">Aditi Mandlik</h3>
                                          <p class="profile_desc">Content and Graphics Team</p>
                                          <div class="profile_icons">
                                            <a href="https://www.linkedin.com/in/aditi-mandlik-b95386209/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                           
                                            <a href="https://www.instagram.com/aditimandlik" target="_blank"><i class="fab fa-instagram"></i></a>
                                          </div>
      </div>
                                      </div>

                                      <div class="layer_executive_01">
                                   
                                        <div class="profile_card">
                                          <img src="../../static/profile/IMG_20210401_085701_389 - prateeti.jpg" alt="profile-photo" class="profile_image" />
                                            <h3 class="profile_name">Prateeti Mehta Jain</h3>
                                            <p class="profile_desc">Management and Marketing</p>
                                            <div class="profile_icons">
                                              <a href="https://www.linkedin.com/in/prateeti-mehta-33186420a/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                              <a href="https://www.twitter.com/PrateetiJ" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                              <a href="https://www.facebook.com/prateeti.mehtajain" target="_blank"><i class="fab fa-facebook"></i></a>
                                              <a href="https://www.instagram.com/prateetimjain" target="_blank"><i class="fab fa-instagram"></i></a>
                                            </div>
      </div>

                                          <div class="profile_card">
                                            <img src="../../static/profile/IMG_20210402_092458 - Rajesh Nathani.jpg" alt="profile-photo" class="profile_image" />
                                              <h3 class="profile_name">Rajesh Nathani</h3>
                                              <p class="profile_desc">Web Development Team</p>
                                              <div class="profile_icons">
                                                <a href="https://www.linkedin.com/in/rajesh-nathani-5a186a145/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                              
                                                <a href="https://www.instagram.com/rajesh.nathani1/" target="_blank"><i class="fab fa-instagram"></i></a>
                                                <a href="https://github.com/RajeshNathani" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                              </div>
      </div>
                                            <div class="profile_card">
                                              <img src="../../static/profile/IMG-20210113-WA0146 - Aditi Dandawate.jpg" alt="profile-photo" class="profile_image" />
                                                <h3 class="profile_name">Aditi Dandawate</h3>
                                                <p class="profile_desc">Content and Graphics</p>
                                                <div class="profile_icons">
                                                  <a href="https://www.linkedin.com/in/aditi-dandawate-84704120b" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                  
                                                  <a href="https://www.instagram.com/aditi_dandawate" target="_blank"><i class="fab fa-instagram"></i></a>
                                                </div>
    </div>
                                              <div class="profile_card">
                                                <img src="../../static/profile/IMG_20210402_161033 - SUCHISMITA NANDA.jpg" alt="profile-photo" class="profile_image" />
                                                  <h3 class="profile_name">Suchismita Nanda</h3>
                                                  <p class="profile_desc">Marketing and Management</p>
                                                  <div class="profile_icons">
                                                    <a href="https://www.linkedin.com/in/suchismita-nanda-221a4b201" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                    <a href="https://twitter.com/Suchi2407?s=08" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                            
                                                    <a href="https://www.instagram.com/invites/contact/?i=pivi53g5o4cg&utm_content=fi9u6l3" target="_blank"><i class="fab fa-instagram"></i></a>
                                                    <a href="https://github.com/suchismita2407" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                                  </div>
      </div>
                                              </div>

                                              <div class="layer_executive_01">
                                          
                                                <div class="profile_card">
                                                  <img src="../static/profile/Snapchat-1584659022 - Ishika Shahaney.jpg" alt="profile-photo" class="profile_image" />
                                                    <h3 class="profile_name">Ishika Shahaney</h3>
                                                    <p class="profile_desc">Marketing and Management</p>
                                                    <div class="profile_icons">
                                                      <a href="https://www.linkedin.com/in/ishika-shahaney-b9b945201" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                      <a href="https://twitter.com/IShahaney" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                                      <a href="https://m.facebook.com/ishika.shahaney.5" target="_blank"><i class="fab fa-facebook"></i></a>
                                                      <a href="https://www.instagram.com/__ishika1903/" target="_blank"><i class="fab fa-instagram"></i></a>
                                                      <a href="https://github.com/Ishika1903" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                                    </div>
      </div>

                                                  <div class="profile_card">
                                                    <img src="../../static/profile/B612_20210313_210823_219 - Raj Soni.jpg" alt="profile-photo" class="profile_image" />
                                                      <h3 class="profile_name">Raj Soni</h3>
                                                      <p class="profile_desc">Marketing and Management</p>
                                                      <div class="profile_icons">
                                                        <a href="https://www.linkedin.com/in/raj-soni-5306141b6/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                        <a href="https://twitter.com/Raj_Soni0717" target="_blank"><i class="fab fa-twitter-square"></i></a>
                                                       
                                                        <a href="https://www.instagram.com/raj_soni0717" target="_blank"><i class="fab fa-instagram"></i></a>
                                                      </div>
      </div>

                                                    <div class="profile_card">
                                                      <img src="../../static/profile/IMG-20210127-WA0820 - P-1 59 Anushka Jain.jpg" alt="profile-photo" class="profile_image" />
                                                        <h3 class="profile_name">Anushka Jain</h3>
                                                        <p class="profile_desc">Marketing and Management</p>
                                                        <div class="profile_icons">
                                                          <a href="https://www.linkedin.com/in/anushka-jain-88a548209/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                      
                                                          <a href="https://www.facebook.com/profile.php?id=100023260056891" target="_blank"><i class="fab fa-facebook"></i></a>
                                                          <a href="https://www.instagram.com/anushkajain_28" target="_blank"><i class="fab fa-instagram"></i></a>
                                                        </div>
      </div>
                                                      <div class="profile_card">
                                                        <img src="../../static/profile/29045DC0-32E0-4B9B-ABCB-74A251AD4861 - Tanisha Jain.jpeg" alt="profile-photo" class="profile_image" />
                                                          <h3 class="profile_name">Tanisha Jain</h3>
                                                          <p class="profile_desc">Graphic Designing</p>
                                                          <div class="profile_icons">
                                                            <a href="https://www.linkedin.com/in/tanisha-jain-60703120b/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                                       
                                                            <a href="https://www.instagram.com/tanishahahaaha" target="_blank"><i class="fab fa-instagram"></i></a>
                                                          </div>
      </div>
                                                      </div>
                                                    </div>
    

    </div>
    </div>
    
  )
};


export default Teams;