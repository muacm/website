import React, { useEffect } from "react";
import Profile from "../components/Profile";
import "../styles/teams.css";

const Teams2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id="contact" className="row m-0 pt-5">
      <div className="col-12 text-center">
        <div className="container mt-5">
          <center>
            <h1 className="pt-4">Our Team</h1>
            <br />
            <h2>Faculty Coordinator</h2>
            <br />
            <Profile
              src="MuACMlogo.png"
              name="Dheeraj Rane"
              post="Faculty Coordinator"
            ></Profile>
            <br />
            <h2>Council Members</h2>
            <br />
          </center>
          <div className="row m-0 justify-content-center">
            <Profile
              src="profile/Screenshot_20210324-075137 - nishant gandhi.jpg"
              name="Nishant Gandhi"
              post="Chairman"
            ></Profile>
            <Profile
              src="profile/IMG-20200426-WA0003-01 - Sarthak Khandelwal.jpeg"
              name="Sarthak Khandelwal"
              post="Vice Chairman"
            ></Profile>
            <Profile
              src="profile/IMG_20210211_110652-IT-AHiteshiGupta.png"
              name="Hiteshi Gupta"
              post="Treasurer"
            ></Profile>
          </div>
          <br />
          <br />
          <center>
            <h2>Core Members</h2>
          </center>
          <br />
          <br />
          <div className="row m-0 justify-content-center">
            <Profile
              src="profile/20210221_120714 - Saud Hashmi.jpg"
              name="Saud Hashmi"
              post="Head of Content"
            ></Profile>
            <Profile
              src="profile\profilePhotoRed - Yash Sehgal.jpg"
              name="Yash Sehgal"
              post="Web Developer"
            ></Profile>
            <Profile
              src="profile/B643E1F2-D6DF-4AA0-B0AE-C3BD7331A4F7 - Riya ahuja.jpeg"
              name="Riya Ahuja"
              post="Head of Management"
            ></Profile>
            <Profile
              src="profile/PicsArt_09-26-10.41.10 - Samriddhi Kaur.jpg"
              name="Samriddhi Kaur"
              post="Head of Graphics"
            ></Profile>
            <br />
            <Profile
              src="profile/PhotoGrid_Plus_1614346924324 - Ritika Maheshwari.jpg"
              name="Ritika Maheshwari"
              post="Head of Marketing"
            ></Profile>
            <Profile
              src="profile/IMG_20190309_221336_573 - mihir dutta.jpg"
              name="Mihir Dutta"
              post="Technical Head"
            ></Profile>
            <br />
          </div>
          <br />
          <br />
          <center>
            <h2>Executive Members</h2>
          </center>
          <br />
          <div className="row m-0 justify-content-center">
            <Profile
              src="profile/1.jpeg"
              name="Tanisha Jain"
              post="Graphic Designer"
            ></Profile>
            <Profile
              src="profile/20210401_122040 - Mayank Verma.jpg"
              name="Mayank Verma"
              post="Management Team"
            ></Profile>
            <Profile
              src="profile/DP - JASPREET OP.jpg"
              name="Jaspreet Singh Saini"
              post="Executive Member"
            ></Profile>
            <Profile
              src="profile/IMG_3620 - Samarth Sharma.jpg"
              name="Samarth Sharma"
              post="Marketing and Management"
            ></Profile>
            <Profile
              src="profile/B453BF47-756C-49E1-B6FA-22798BF40169 - Aditi Mandlik.jpeg"
              name="Aditi Mandlik"
              post="Content and Graphics Team"
            ></Profile>
            <Profile
              src="profile/IMG_20210401_085701_389 - prateeti.jpg"
              name="Preeti Mehta Jain"
              post="Marketing and Management"
            ></Profile>
            <Profile
              src="profile/IMG_20210402_092458 - Rajesh Nathani.jpg"
              name="Rajesh Nathani"
              post="Web Developmetn Team"
            ></Profile>
            <Profile
              src="profile/IMG-20210113-WA0146 - Aditi Dandawate.jpg"
              name="Aditi Dandawate"
              post="Content and Graphics"
            ></Profile>
            <Profile
              src="profile/IMG_20210402_161033 - SUCHISMITA NANDA.jpg"
              name="Suchismita Nanda"
              post="Marketing and Management"
            ></Profile>
            <Profile
              src="profile/Snapchat-1584659022 - Ishika Shahaney.jpg"
              name="Ishika Shahaney"
              post="Marketing and Management"
            ></Profile>
            <Profile
              src="profile/B612_20210313_210823_219 - Raj Soni.jpg"
              name="Raj Soni"
              post="Marketing and Management"
            ></Profile>
            <Profile
              src="profile/IMG-20210127-WA0820 - P-1 59 Anushka Jain.jpg"
              name="Anushka Jain"
              post="Marketing and Management"
            ></Profile>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Teams2;
