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
              I’m Luke, a Full-Stack Software Engineer with 5+ years of
              experience and a BSc Computer Science Graduate from Keele
              University.
            </p>
            <p>
              Skilled in Golang, TypeScript/React/Node.js, C#, SQL, NoSQL
              (MongoDB, Riak) and cloud infrastructure (AWS, GCP, Docker).
              Experienced in building high-throughput APIs and real-time
              systems, delivering secure, maintainable code within
              cross-functional teams. Passionate about creating reliable
              products that solve real-world problems at scale.
            </p>
            <p>
              Outside of coding, I have a passion for strength training and
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
