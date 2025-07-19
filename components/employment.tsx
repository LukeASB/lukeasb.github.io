import IEntry from "../shared/interfaces/IEntry";
import Entry from "./entry";

const entries: IEntry[] = [
  {
    title: "bet365 | Software Developer - Accounts & Authentication Management",
    date: "Oct 2023-Ongoing",
    description: (
      <>
        <p>
          Develop and maintain features on the company’s products and services —
          extend and build robust APIs for account registration, sign-in/out and
          account recovery using Golang, C#, TypeScript, React, SQL, Riak and
          Docker.
        </p>
        <p>
          Designed and delivered a Prove Prefill feature, enabling frictionless
          account registration for US users.
        </p>
        <p>Use AI tools (RooAI, Cody) to boost daily productivity.</p>
        <p>Mentor and help junior developers to strengthen team performance.</p>
      </>
    ),
  },
  {
    title: "RedEye | Software Engineer",
    date: "Sep 2021-Oct 2023",
    description: (
      <>
        <p>
          Developed and maintained features on the company’s products and
          services to drive client success on the Marketing Platform using
          JavaScript, TypeScript, NodeJS, React, PHP, Kafka, Docker, SQL and
          MongoDB.
        </p>
        <p>
          Extended and built APIs, including a Custom Fonts API and a new Web
          Push Notifications System.
        </p>
        <p>
          Created automation tools and Slack bots to streamline team workflows.
        </p>
        <p>Mentor and help junior developers to strengthen team performance.</p>
      </>
    ),
  },
  {
    title: "bet365 | Junior Software Developer - Member’s Back Office (MBO)",
    date: "Sep 2021-Oct 2023",
    description: (
      <>
        <p>
          Developed and maintained features for internal applications and
          services using C#, VB.Net, and SQL.
        </p>
      </>
    ),
  },
  {
    title: "Capula Ltd | Graduate Engineer - Nuclear Department",
    date: "Jun 2018-Aug 2019",
    description: (
      <>
        <p>
          Contributed to secure systems for high-compliance clients in a small
          team using C# and SQL. Gained experience in VMware, system and network
          architecture.
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
          Redesigned and maintained the Keele Student Union website with
          JavaScript and PHP.
        </p>
      </>
    ),
  },
  {
    title:
      "Dimensions Leisure Centre/ Fenton Manor – Lifeguard & Gym Assistant",
    date: "Jun 2015-Jun 2019",
    description: <></>,
  },
];

const Employment: React.FC = () => {
  return (
    <div id="employment">
      <section className="container my-3 pb-3 sectionMinHeight sectionBorder text-dark">
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
