import automatedDate from "../shared/helpers/automatedDate";
import Social from "./socials";

const About: React.FC = () => {
  return (
    <div id="about">
      <section className="container my-3 pb-3 sectionMinHeight text-dark">
        <div className="row align-items-center">
          <div className="col-md-8 align-self-start">
            <h1>Luke Sloane-Bulger</h1>
            <p>Hello,</p>
            <p>
              I'm Luke Sloane-Bulger, I'm a Full-Stack Software Engineer with{" "}
              {automatedDate("2018-02-01")} years of full-time experience.
            </p>
            <p>I'm a BSc Computer Science Graduate from Keele University.</p>
            <p>
              Outside of work, I have a passion for strength training and
              sports.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="../assets/profile.jpg"
              alt="Profile"
              className="rounded-circle img-fluid"
              style={{ width: "150px", height: "150px" }}
            />
            <div className="container pt-3">
              <Social colour="dark" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
