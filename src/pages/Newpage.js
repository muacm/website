import React, { useEffect } from "react";
import "../styles/new.css";
import "bootstrap/dist/css/bootstrap.css";
import Parallax from "react-rellax";
import Eventcard from "../components/Eventcard";
import Helmet from "react-helmet";
import Gallary from "../components/Gallary";
import Handles from "../components/Handles";

const Newpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      
      <Helmet>
        <script src="main.js"></script>
        <script src="particle.js"></script>
        <script src="jquery-3.5.1.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <title>MUACM</title>
      </Helmet>
      {/* <div className="row m-0 first" id="sec1">
        <div class="col-12 top">
          <Parallax speed={5}>
            <canvas id="mycanvas"></canvas>
          </Parallax>
          <br />
          <h3 className="text-center text-white">Tagline</h3>
          <div class="input">
            <button id="updateButton">submit</button>
          </div>{" "}
          <br />
          <br />
        </div>
      </div> */}
      <section>
        <Parallax speed={-1} centered="true" percentage={0}>
          <div className="container">
            <h2>About Medicaps University</h2>
            <br />
            <p>
              {" "}
              Medi-Caps has been a brand name in the arena of technical
              education. Since its inception in July 2000, Medi-Caps has
              consistently aimed at creating an ideal ambiance for budding
              technocrats and managers; and helping them to grow like true
              professionals. With its highly qualified faculty there seems an
              optimal blend of academic brilliance and industry exposure,
              supplemented by highly specialized visiting faculty and industry
              experts, senior professionals from various segments of different
              industries and business houses. It was time now to spread wings
              and move out for more exposure and widening of the periphery.
            </p>
            <br />
          </div>
        </Parallax>
      </section>
      <section>
        <div className="container">
          <h2>About ACM</h2>
          <br />
          <p>
            The ACM (Association for Computing Machinery) is a 74-year-old
            international scientific and industrial computer society. Through
            its many Special Interest Groups, the ACM fosters research and
            communication in a broad range of computing areas. The society has
            around 100,000 members including students and professionals, spread
            over 174 countries leading to interaction between diversified
            computing enthusiasts. ACM conducts various worldwide competitions
            and seminars, where we have learned and scholarly speakers to
            provide us with the opportunity to increase our knowledge and expand
            our horizons. ACM provides us with one of the most enriching digital
            libraries which consists of database full-text articles and
            bibliographic literature covering computing and information
            technology. This leads us to availability of critical content being
            easily discoverable and accessible. ACM strengthens the computing
            profession's collective voice through strong leadership, promotion
            of the highest standards, and recognition of technical excellence.
            ACM leads us to the pathway following which in the near future,
            world???s biggest problems will be solved using computing
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>About ACM Medicaps Chapter</h2>
          <br />
          <p className="">
            MUACM is an official computing student chapter of Medi-caps
            university under the patronage of technical club STIC. We are not
            just an organization, we are family of like-minded people who intend
            to make a difference in the society, MUACM provides you a platform
            to explore, experience and contribute to the computing world
            globally. It encourages you to pave the path of your career under
            the guidance of professional. The chapter organizes several
            jaw-dropping events, seminars, learning forums, talks by renowned
            speakers, field trips, contests which includes international college
            programming contest, student research competition, it also gives an
            advantage to access all the services and activities of its parent
            organization ACM with an opportunity to develop leadership skills
            all of these develops the competitive spirit and develops the skills
            suitable for the advancement of the technical world. To sum up
            inception of MUACM creates a bridge between you and the computing
            world, it opens the door for your dream success.
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Why Connect with ACM</h2>
          <br />
          <p>
            Anybody who believes that as a professional you want to be the best
            professional you can be and take the world???s computing skills to
            another magical level, then ACM is what speaks to that aspiration.
            Apart from the numerous benefits that we receive such as an
            excellent access to the digital library and various publications,
            ACM considers itself a family where you will feel like you belong,
            the community believes in the growth and prosperity of its members
            and finding solutions to world problems using technical knowledge.
            When you become a member, you become a part of the dynamic changes
            that are transforming our world, by helping to shape the future of
            computing. ACM provides the tools and resources to help get you
            there, by advancing your career and enriching your knowledge with
            life-long learning resources. Additionally, ACM being a reputed
            organisation in the industry leads to higher recognition when it is
            mentioned on a student???s resume especially if you are a part of
            various competitions and events being conducted throughout the year.
            Being a part of this community is an honour in itself and definitely
            leads to your personal and professional growth.
          </p>
        </div>
      </section>
      <section className="bottom">
        <h4>Events</h4>
        <br />
        <div className="row m-0">
          <Eventcard
            title="first event"
            text="First event conducted by ACM"
            date="31/03/2021"
          ></Eventcard>
          <Eventcard
            title="first event"
            text="First event conducted by ACM"
            date="01/04/2021"
          ></Eventcard>
        </div>
      </section>
      <section className="aud">
        <br />
        <Gallary></Gallary>
        <br />
        <Handles />
      </section>
    </>
  );
};

export default Newpage;
