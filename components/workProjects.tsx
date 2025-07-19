import { useEffect, useState } from "react";
import ICard from "../shared/interfaces/ICard";
import CardView from "./card/cardView";
import ModalContent from "./modal/modalContent";
import Pagination from "./pagination";
import getPlaceholderImg from "../shared/helpers/getPlaceholderImg";

const placeholderImg = getPlaceholderImg();
const bet365AAMModalContent: IProjectContent[] = [
  {
    title: "Customer Statements",
    date: "2025",
    description: (
      <>
        <p>
          Contributed to system design and rebuilt a legacy .NET Customer
          Statements tool into a modern version using Golang, Kafka, SQL, and
          TypeScript (React) within a small team.
        </p>
      </>
    ),
  },
  {
    title: "Prove Prefill",
    date: "2024-2025",
    description: (
      <>
        <p>
          Contributed to system design and delivered the Prove Prefill feature
          in a small team, enabling frictionless account registration for US
          users.
        </p>
      </>
    ),
  },
  {
    title: "Version 9 Dark Mode",
    date: "2023-2024",
    description: (
      <>
        <p>
          Upgraded the join and first deposit payment forms for all supported
          countries in a small team, aligning with Product requirements and
          Design templates.
        </p>
      </>
    ),
  },
];

const redeyeModalContent: IProjectContent[] = [
  {
    title: "Custom Font API",
    date: "2022-2023",
    description: (
      <>
        <p>
          Developed a Custom Fonts API endpoint using PHP and MongoDB to
          dynamically serve clients' custom fonts for the Email Builder
          application.
        </p>
        <p>
          Previously hardcoded, this API and database solution streamlined font
          additions and eliminated the need for app releases as client requests
          grew.
        </p>
        <p>Tech Stack: PHP, MongoDB</p>
      </>
    ),
  },
  {
    title: "Web Push",
    date: "2022-2023",
    description: (
      <>
        <p>
          Delivered and contributed to the system design of a Web Push feature,
          enabling clients to send dynamic web push notifications to subscribed
          users.
        </p>
        <p>Tech stack: Node.js (TypeScript, Express.js), Kafka, SQL, Docker.</p>
      </>
    ),
  },
  {
    title: "Asset Manager",
    date: "2022-2023",
    description: (
      <>
        <p>
          Added an Email Builder folder feature to the existing Asset Manager,
          allowing clients to save and access custom email templates in one
          centralised location on RedEye’s Marketing Automation platform.
        </p>
        <p>Tech Stack: JavaScript, PHP, and SQL</p>
      </>
    ),
  },
  {
    title: "Email Builder",
    date: "2021-2022",
    description: (
      <>
        <p>
          Enhanced RedEye’s Marketing Automation app by integrating features
          from the third-party Beefree email template tool:
        </p>
        <ul>
          <li>Save Rows: Reuse template content across emails.</li>
          <li>
            Display Conditions: Show content dynamically, e.g. for basket
            abandonment.
          </li>
          <li>Comments: Add collaborative notes on templates.</li>
          <li>
            Dynamic Images: Support for dynamic text, countdowns, and more.
          </li>
          <li>Custom Web Fonts: Use custom fonts in templates.</li>
        </ul>
        <p>Tech Stack: JavaScript, PHP, and SQL</p>
      </>
    ),
  },
  {
    title: "SE Planner Bot",
    date: "2021",
    description: (
      <>
        <p>
          Identified notification gaps in Microsoft Planner, which made task
          tracking difficult.
        </p>
        <p>
          Built a PHP API to check the board every minute; changes trigger a
          Slack Bot that posts updates to the team’s Slack channel.
        </p>
        <p>
          Tech stack: PHP, Microsoft Graph API, MongoDB, Gauge/Taiko (Node.js),
          Slack Bot, Cron Job, Docker.
        </p>
      </>
    ),
  },
];

const bet365MBOModalContent: IProjectContent[] = [];

const capulaModalContent: IProjectContent[] = [];

const keelesuModalContent: IProjectContent[] = [
  {
    title: "Graduation E-Commerce Shop",
    date: "2018",
    description: (
      <>
        <p>
          Built on the existing Ecommerce shop to include a Graduation
          content/items that the physical shop was selling.
        </p>
      </>
    ),
  },
  {
    title: "Redesign the Students' Union Website",
    date: "2017-2018",
    description: (
      <>
        <p>
          Upgraded the KeeleSU website to a modern usable state for users in a
          small team.
        </p>
      </>
    ),
  },
];

const uniModalContent: IProjectContent[] = [
  {
    title:
      "Dissertation Site: Improving Usability & Security on E-Commerce Sites",
    description: (
      <>
        <p>
          My Dissertation aimed to find a potential answer for improving the
          conflict between usability and security on E-Commerce websites. At the
          cost of heightened security, usability and functionality will suffer
          and vice versa.
        </p>
        <p>
          There are three forms of login security the user will encounter, some
          may be combined into Two-Factor or Three-Factor Authentication:
        </p>
        <ul>
          <li>Passwords (Something you know).</li>
          <li>Pins/One-Time Passwords (OTP) (Something you have).</li>
          <li>Biometrics (Something you are).</li>
        </ul>
        <p>
          Passwords are commonly the forefront of security, though their
          effectiveness depends on the users’ ability to both create and
          remember a secure/complex password without the need to write it down,
          presenting a potential memorability issue and relying on the weakest
          link in computer security – Humans.
        </p>
        <p>
          Pins and One-Time Passwords (OTP) is valid for only one login session.
          Typically OTPs are sent from the web server to the user via SMS
          message or Email. This eliminates the user memorability issue, and is
          discussed as a possible replacement for traditional passwords due to
          its balance in usability and security.
        </p>
        <p>
          Biometric authentication is a login measure that records a unique
          physical characteristic of the user, such as their fingerprint or
          facial pattern. Biometrics is considered the most usable method of
          login in terms of speed and presents a heightened security compared to
          traditional passwords. However, there are also a number of ethical
          concerns and privacy risks on how the users’ actual physical
          characteristic data is stored and used, what if it is stolen?
        </p>
        <p>
          Concluding my research, in analysis from critical/literature reviews,
          self-evaluations, surveys and wireframes I discovered that OTPs were
          the most preferable choice of login among users, and supported a
          balance between security and usability.
        </p>
        <p>Tech Stack: PHP, JavaScript, HTML, CSS</p>
      </>
    ),
  },
  {
    title:
      "Website Technologies: Responsive Website (HTML, CSS, JavaScript, PHP)",
    description: (
      <>
        <p>
          Created a responsive website with a specific range of functionality to
          meet requirements and constraints based on a product of choice. In my
          coursework, I chose to do a sport I like, which is Judo. This website
          uses HTML, CSS, JavaScript and PHP.
        </p>
        <p>Tech Stack: PHP, JavaScript, HTML, CSS</p>
      </>
    ),
  },
  {
    title: "Programming: Priority Queue",
    description: (
      <>
        <p>
          A Priority Queue is an abstract data type which is like a regular
          queue or stack data structure, but where additionally each element has
          a "priority" associated with it. In a priority queue, an element with
          high priority is served before an element with low priority.
        </p>
        <p>
          Here several workers are assigned random jobs at compile time and use
          a number of resources to complete the task, when they finish they move
          onto the next job until all the jobs in the queue are completed.
        </p>
        <p>Tech Stack: Java</p>
      </>
    ),
  },
  {
    title: "Animation & Multimedia: MaFox Takes Flight (Java)",
    description: (
      <>
        <p>
          Legacy of MaFox is designed using Processing 3.0.1 with the Java
          Programming Language as shown in the screenshots below which are run
          in the Java Applet.
        </p>
        <p>
          Legacy of MaFox is a side-scrolling game with similar mechanic/laws as
          Flappy Bird, which I based this game on. The objective of the game is
          to direct the character “MaFox” who seemingly continuously moves to
          the right, between sets of varying sized pipes. If the player touches
          the pipes, falls off screen or hits the spikes above, they lose.
          However, each pair of pipes that he does fly between he will gain one
          point. MaFox will fly upwards when the up arrow key is pressed and if
          the key is not pressed he will fall in speeds varying to the
          alternating gravity.
        </p>
        <p>Tech Stack: Java</p>
      </>
    ),
  },
  {
    title: "Bioinformatics: Motif Matcher",
    description: (
      <>
        <p>
          The Bioinformatics Tool uses Python 3.6 with the Biopython importation
          package to connect to the Bioinformatic Resource Portal.
        </p>
        <p>
          This tool uses a pattern motif which is used to find amino acid
          sequence patterns that is widespread and has biological significance.
          The particular pattern motif used for this program is as follows:
          <code>{"{P}1-{PKRHW}2-[VLSWFNQ]3-[ILTYWFN]4-[FIY]5-{PKRH}6"}</code>
        </p>
        <p>Tech Stack: Python</p>
      </>
    ),
  },
];

const workProjects: ICard[] = [
  {
    title: "bet365 - AAM",
    startDate: "2023",
    endDate: "Ongoing",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "bet365aam",
      title: "bet365 Projects",
      body: (
        <div>
          <p>
            <strong>Tech Stack: </strong>Golang, C#, TypeScript, React, SQL,
            Riak and Docker.
          </p>
          <p>
            Delivered numerous high-impact backend and web features for Accounts
            & Authentication Management: robust APIs, performance improvements,
            and country-specific functionality for Site Services. Most notable
            are:
          </p>
          {bet365AAMModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
  {
    title: "RedEye",
    startDate: "2021",
    endDate: "2023",
    img: placeholderImg,
    shortDescription: "short",
    readMoreModal: {
      id: "redeye",
      title: "RedEye Projects",
      body: (
        <div>
          <p>
            <strong>Tech Stack: </strong>JavaScript, TypeScript, NodeJS, React,
            PHP, Kafka, Docker, SQL and MongoDB.{" "}
          </p>
          <p>
            Worked on a number of small/large projects. Some of which include:
          </p>
          {redeyeModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
  {
    title: "bet365 - MBO",
    startDate: "2019",
    endDate: "2021",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "bet365mbo",
      title: "bet365 - MBO Projects",
      body: (
        <>
          <p>
            <strong>Tech Stack: </strong>C#, VB.Net, and SQL.
          </p>
          <p>
            Numerous support, process, and performance improvements, alongside
            small and large-scale feature projects for the business’s account,
            administration, and verification tools across multiple supported
            countries.
          </p>
          {bet365MBOModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </>
      ),
    },
  },
  {
    title: "Capula",
    startDate: "2018",
    endDate: "2019",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "capula",
      title: "Capula Projects",
      body: (
        <>
          <p>
            <strong>Tech Stack: </strong>C#, SQL
          </p>
          <p>
            Contributed to secure systems for high-compliance clients in a small
            team using C# and SQL. Gained experience in VMware, system and
            network architecture.
          </p>
          {capulaModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </>
      ),
    },
  },
  {
    title: "KeeleSU",
    startDate: "2017",
    endDate: "2018",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "keelesu",
      title: "KeeleSU Projects",
      body: (
        <div>
          <p>
            <strong>Tech Stack: </strong>JavaScript and PHP.
          </p>
          {keelesuModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
  {
    title: "Uni Projects",
    startDate: "2015",
    endDate: "2018",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "universityprojects",
      title: "Keele University Projects",
      body: (
        <div>
          <p>
            Worked on a number of practicals in Computer Science. Some of which
            include:
          </p>
          {uniModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
];

const WorkProjects: React.FC = () => {
  const maxPostPerPage = 4;
  const [items, setItems] = useState<ICard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(maxPostPerPage);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts: ICard[] = items.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const getItems = () => setItems(workProjects);
    getItems();
  }, []);

  return (
    <div id="workProject">
      <section className="container my-3 pb-3 sectionMinHeight text-dark">
        <div className="row text-center pb-3">
          <h1>Work Projects</h1>
        </div>
        <CardView project={currentPosts} />
        {items.length > maxPostPerPage && (
          <Pagination
            totalPosts={items.length}
            postsPerPage={postPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </div>
  );
};

export default WorkProjects;
