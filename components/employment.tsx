import IEntry from "../shared/interfaces/IEntry";
import Entry from "./entry";

const entries: IEntry[] = [
  {
    title: "bet365 | Software Developer - User Platform User Interface (UPUI)",
    date: "Oct 2023-Ongoing",
    description: (
      <>
        <p>
          Full-Stack Software Developer. Tasked with debugging and providing
          fixes for the company's various applications/services using
          TypeScript/JavaScript, Golang, C#, and SQL in the Site Services team.
        </p>
        <p>
          Worked on projects to add new functionality to the existing web
          application and APIs.
        </p>
      </>
    ),
  },
  {
    title: "RedEye | Software Engineer",
    date: "Sep 2021-Oct 2023",
    description: (
      <>
        <p>
          Full-Stack Software Developer. Tasked with debugging and providing
          fixes for the company's various applications/services using
          JavaScript, TypeScript, NodeJS, ReactJS, PHP, SQL and MongoDB. Used
          Microsoft Azure and Docker.
        </p>
        <p>
          {" "}
          Worked on projects to add new functionality to the existing web
          application, and worked on services to provide automation.
        </p>
      </>
    ),
  },
  {
    title: "bet365 | Junior Software Developer - Member’s Back Office (MBO)",
    date: "Sep 2021-Oct 2023",
    description: (
      <>
        <p>
          Tasked with debugging and providing fixes for the company's various
          applications/services using C#, VB.Net and SQL in the Member's Back
          Office team. Worked on in-house projects to add new functionality to
          existing applications.
        </p>
      </>
    ),
  },
  {
    title: "Capula Ltd | Graduate Software Engineer - Nuclear Department",
    date: "Jun 2018-Aug 2019",
    description: (
      <>
        <p>
          Tasked with project work in a team-based environment to deliver
          systems for highly-classified clients in accordance to their
          functional/non-functional requirements.
        </p>
        <p>
          Worked and developed two projects using VMware, ESXi, Group Policy,
          Powershell ISE Script and C# in the company's Nuclear Department.
        </p>
      </>
    ),
  },
  {
    title: "KeeleSU - Web Developer (Part-Time)",
    date: "Feb 2017-Jun 2018",
    description: (
      <>
        <p>
          Tasked with the redesign and development of the Student Unions’
          website.
        </p>
        <p>
          Tasked with deploying the Graduation E-Commerce Shop ready for
          Graduation.
        </p>
        <p>Here I used wireframes, HTML(5), CSS, JavaScript and PHP.</p>
      </>
    ),
  },
  {
    title:
      "Dimensions Leisure Centre / Fenton Manor - Lifeguard / Gym Assistant",
    date: "Jun 2015-Jun 2019",
    description: (
      <>
        <p>
          Lifeguard - Worked in a team-based environment to survey/patrol
          aquatic activities for any potential hazards/dangers to pool users.
          Used First Aid skills and responded to any emergency events that
          occured.
        </p>
        <p>
          Gym Assistant - Used Personal Trainer Level 3 qualification to provide
          health & fitness advice to clients.
        </p>
      </>
    ),
  },
  {
    title: "Waterworld & M-Club - Lifeguard",
    date: "Jun 2012-Jun 2015",
    description: <p></p>,
  },
];

const Employment: React.FC = () => {
  return (
    <div id="employment">
      <section className="container my-3 pb-3 sectionMinHeight sectionBorder text-light">
        <div className="row text-center pb-3">
          <h1>Employment</h1>
        </div>
        {entries.map((item, i) => (
          <Entry
            key={`${item.title}_${i}`}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Employment;
