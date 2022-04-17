import "./about.css";
import Award from "../../img/vikrant.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          // <img
          //   src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          //   alt=""
          //   className="a-img"
          // />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Currently, I am working as a Manager in Charlesworth Nuts Pvt ltd.
        </p>
        <p className="a-desc">
          I have done Graduation certificate in Full Stack Web Development from University of Adelaide.
        </p>
        <div className="a-award">
          // <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title"></h4>
            <p className="a-award-desc">

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
