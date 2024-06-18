import ICard from "../shared/interfaces/ICard";
import CardView from "./card/cardView";
import ModalContent from "./modal/modalContent";


const bet365UPUIModalCOntent: IProjectContent[] = [
  {
    title: "Version 9 Dark Mode",
    description: (
      <>
        <p>
          Upgraded the bet365 websites join form and first deposit payment
          forms to their latest version for each country the company supplies
          its product to.
        </p>
      </>
    )
  },
  {
    title: "Bulgaria Regulatory Changes",
    description: (
      <>
        <p>
          Added new functionality to the Bulgaria join form to meet regulation standards.
        </p>
      </>
    )
  },
  {
    title: "Argentina Regulatory Changes",
    description: (
      <>
        <p>
          Added new functionality to the Argentina join form to meet regulation standards.
        </p>
      </>
    )
  }
];

const redeyeModalContent: IProjectContent[] = [
  {
    title: "Custom Font API",
    description: (
      <>
        <p>Added a Custom Fonts API endpoint using PHP, MongoDB to dynamically retrieve clients' custom fonts for the Email Builder application.</p>
        <p>
          Originally these were hardcoded into the application. Popularity grew for these so the API / MongoDB was required to prevent the need
          for an app release, and to streamline the process of adding custom fonts for client requests to the DB.
        </p>
      </>
    )
  },
  {
    title: "Web Push",
    description: (
      <>
          <p>
            Worked in a team to implement a Web Push feature on the application
            for clients to dynamically send notifications to users that
            subscribe for notifications.
          </p>
          <p>The Web Push Service was made to power this feature that was built with Node.js (TypeScript, Express.js framework), and OracleSQL database.</p>
          <p>
            Added administration panel for client to add their VAPID Keys.
            Assisted with implementation of a Web Push Service to dynamically
            push messages to clients' users.
          </p>
      </>
    )
  },
  {
    title: "Email Builder",
    description: (
      <>
        <p>
          Implemented features from the third party beefree email template
          application on RedEye's Marketing Automation Application primarily using JavaScript, PHP and SQL for clients
          to use:
        </p>
        <ul>
          <li>
            Save Rows Feature - Allows the client to save their template
            content for reuse on other email templates.
          </li>
          <li>
            Display Conditions - implemented feature that allows for specific
            content to show to clients' email subscribers based on specific
            conditions, e.g user's that have abandoned items in their basket.
          </li>
          <li>
            Comments - Allows users to add comments to templates for
            collaboration.
          </li>
          <li>
            Dynamic Images - show images that have dynamic features, such as,
            dynamic text, countdowns, etc...
          </li>
          <li>
            Custom Web Fonts - Allow users to use custom fonts on their email
            templates.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Asset Manager",
    description: (
      <>
          <p>
            Added functionality to add Email Builder folder feature to store
            clients' email templates on RedEye's Marketing Automation app.
          </p>
      </>
    )
  },
  {
    title: "SE Planner Bot",
    description: (
      <>
        <p>
          Whilst the team used Microsoft Planner a problem was found where it
          was hard to track tasks due to a lack of notifications when tasks
          move across the board.
        </p>
        <p>
          Implemented an API built in PHP that tracks the board every minute. If there's
          changes communicates with Slack Bot to display a notification to the
          team's Slack channel.
        </p>
        <p>The tech stack for this was: PHP, Microsoft Graph API, MongoDB, Gauge/Taiko Node.js app (Used to call the SE Planner Bot endpoint, and to automate the need to login to Microsoft), Slack Bot, Cron Job, Docker.</p>
      </>
    )
  }
];

const bet365MBOModalContent: IProjectContent[] = [
  {
    title: "Apple Pay",
    description: (
      <>
        <p>
          Extended originally Apple Pay Deposit/Withdrawal implementation to retrieve the card number from the users Apple Pay Wallet that previously wasn’t possible. This allowed for duplicate payment details checks to be added, and the ability to add a withdrawal process back to the user’s Apply Pay card. Apple Pay previously could only be used on bet365 iOS App, extended this to the browser on supported devices/operating systems.
        </p>
      </>
    )
  },
  {
    title: "Application Updates",
    description: (
      <>
        <p>
          Updated applications to export files to new xlsx format to support Microsoft Excel 2016 compatiablility.
        </p>
      </>
    )
  },
  {
    title: "Germany Regulation Changes",
    description: (
      <>
        <p>
          Modified all team’s supported applications for Germany regulation changes to handle new user deposit limits and responsible gambling requirements.
        </p>
      </>
    )
  },
  {
    title: "Greece Regulation Changes",
    description: (
      <>
        <p>
          Added new status reasons, new custom checks to support the requirement to add daily deposit limits, daily time logged in limits and a responsible gambling check on account creation. Modified Dormant Account Service checks to include Deposit Limit changes and to change the timescale an account is marked is dormant and deleted. Modifed administration applications to handle new changes.
        </p>
      </>
    )
  },
  {
    title: "Affiliate Tool",
    description: (
      <>
        <p>
          Add functionality to existing application to manipulate behaviour based on user statuses.
        </p>
      </>
    )
  },
]

const capulaModalContent: IProjectContent[] = [
  {
    title: "Data Centre & Secure Environment",
    description: (
      <>
        <p>
          Worked in a team-based environment to produce a Data Centre that's
          deesigned to contain/process a high quantity of image files for the
          clients' legacy security system. This project used VMWare, ESXi, vSphere to store virtual machines, Active Directory Domain Services to 
          store user details to access isolated domain remains, Group Policy to lock down the secure workstation, and implemented 2FA on the workstations.
        </p>
        <p>
          To automate the workstation builts provided Powershell ISE and Batch File Scripts to automate installations and features to lockdown/secure workstations.
        </p>
        <p>
          Alongside this aided in producing an application built with C# .Net Framework and SQL used by the
          clients' adminstration to process these digital images.
        </p>
      </>
    )
  }
];

const keelesuModalContent: IProjectContent[] = [
  {
    title: "Redesign the Students' Union Website",
    description: (
      <>
        <p>
          Upgraded the KeeleSU website to a modern
          usable state for users. I worked with the design team's wireframes
          and requirements to update the website.
        </p>
      </>
    )
  },
  {
    title: "Graduation E-Commerce Shop",
    description: (
      <>
        <p>
          Built on the existing Ecommerce shop to include a Graduation content/items that the physical shop was selling. 
        </p>
      </>
    )
  }
];

const uniModalContent: IProjectContent[] = [
  {
    title: "Dissertation Site: Improving Usability & Security on E-Commerce Sites",
    description: (
      <>
        <p>
          During the course of my Dissertation, I aimed to find a potential
          answer for improving the current conflict between usability and
          security on E-Commerce websites. At the cost of heightened security,
          usability and functionality will suffer and vice versa.
        </p>
        <p>
          There are three forms of login security the user will encounter,
          some may be combined into Two-Factor or Three-Factor Authentication:
        </p>
        <ul>
          <li>Passwords (Something you know).</li>
          <li>Pins/One-Time Passwords (OTP) (Something you have).</li>
          <li>Biometrics (Something you are).</li>
        </ul>
        <p>
          Passwords are commonly the forefront of security, though their
          effectiveness depends on the users’ ability to both create and
          remember a secure/complex password without the need to write it
          down, presenting a potential memorability issue and relying on the
          weakest link in computer security – Humans.
        </p>
        <p>
          Pins and One-Time Passwords (OTP) is valid for only one login
          session. Typically OTPs are sent from the web server to the user via
          SMS message or Email. This eliminates the user memorability issue,
          and is discussed as a possible replacement for traditional passwords
          due to its balance in usability and security.
        </p>
        <p>
          Biometric authentication is a login measure that records a unique
          physical characteristic of the user, such as their fingerprint or
          facial pattern. Biometrics is considered the most usable method of
          login in terms of speed and presents a heightened security compared
          to traditional passwords. However, there are also a number of
          ethical concerns and privacy risks on how the users’ actual physical
          characteristic data is stored and used, what if it is stolen?
        </p>
        <p>
          Concluding my research, in analysis from critical/literature
          reviews, self-evaluations, surveys and wireframes I discovered that
          OTPs were the most preferable choice of login among users, and
          supported a balance between security and usability.
        </p>
        <p>Tech Stack: PHP, JavaScript, HTML, CSS</p>
      </>
    )
  },
  {
    title: "Website Technologies: Responsive Website (HTML, CSS, JavaScript, PHP)",
    description: (
      <>
        <p>
          This is a responsive website with a specific range of functionality
          to meet requirements and is based on a product of choice. In my
          coursework, I chose to do a sport I like, which is Judo. This
          website uses HTML, CSS, JavaScript and PHP.
        </p>
        <p>Tech Stack: JavaScript, HTML, CSS</p>
      </>
    )
  },
  {
    title: "Programming: Priority Queue",
    description: (
      <>
        <p>
          A Priority Queue is an abstract data type which is like a regular
          queue or stack data structure, but where additionally each element
          has a "priority" associated with it. In a priority queue, an element
          with high priority is served before an element with low priority.
        </p>
        <p>
          Here several workers are assigned random jobs at compile time and
          use a number of resources to complete the task, when they finish
          they move onto the next job until all the jobs in the queue are
          completed.
        </p>
        <p>Tech Stack: Java</p>
      </>
    )
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
          Legacy of MaFox is a side-scrolling game with similar mechanic/laws
          as Flappy Bird, which I based this game on. The objective of the
          game is to direct the character “MaFox” who seemingly continuously
          moves to the right, between sets of varying sized pipes. If the
          player touches the pipes, falls off screen or hits the spikes above,
          they lose. However, each pair of pipes that he does fly between he
          will gain one point. MaFox will fly upwards when the up arrow key is
          pressed and if the key is not pressed he will fall in speeds varying
          to the alternating gravity.
        </p>
        <p>Tech Stack: Java</p>
      </>
    )
  },
  {
    title: "Bioinformatics: Motif Matcher",
    description: (
      <>
        <p>
          The Bioinformatics Tool uses Python 3.6 with the Biopython
          importation package to connect to the Bioinformatic Resource Portal.
        </p>
        <p>
          This tool uses a pattern motif which is used to find amino acid
          sequence patterns that is widespread and has biological
          significance. The particular pattern motif used for this program is
          as follows:
          <code>{"{P}1-{PKRHW}2-[VLSWFNQ]3-[ILTYWFN]4-[FIY]5-{PKRH}6"}</code>
        </p>
        <p>Tech Stack: Python</p>
      </>
    )
  }
];


const workProjects: ICard[] = [
  {
    title: "bet365 - UPUI",
    startDate: "2023",
    endDate: "Ongoing",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "bet365upui",
      title: "bet365 Projects",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>TypeScript/JavaScript, Golang, C#, and SQL.</p>
          <p>
            Numerous support, process/performance improvements, small/large scale project changes to add functionality to various countries in the Site Services' Team. Some of these projects include:
          </p>
          {bet365UPUIModalCOntent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
  {
    title: "RedEye",
    startDate: "2021",
    endDate: "2023",
    img: "https://via.placeholder.com/400",
    shortDescription: "short",
    readMoreModal: {
      id: "redeye",
      title: "RedEye Projects",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>JavaScript, TypeScript, NodeJS, ReactJS, PHP, SQL and MongoDB. Used
          Microsoft Azure and Docker.</p>
          <p>Worked on a number of small/large projects during my time at RedEye. Some of which include:</p>
          {redeyeModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content}/>)}
        </div>
      ),
    },
  },
  {
    title: "bet365 - MBO",
    startDate: "2019",
    endDate: "2021",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: { 
      id: "bet365mbo",
      title: "bet365 - MBO Projects",
      body: (
        <>
          <p><strong>Tech Stack: </strong>C# .Net Framework .Net Core, VB.NET, SQL.</p>
          <p>
            Numerous support, process/performance improvements, small/large scale project changes to add functionality to various countries for the business’ account, administration and verification tools to for multiple countries that the business supports. Some of these projects include:
          </p>
          {bet365MBOModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </>
      ) 
    },
  },
  {
    title: "Capula",
    startDate: "2018",
    endDate: "2019",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "capula",
      title: "Capula Projects",
      body: (
        <>
          <p><strong>Tech Stack: </strong>C# .Net Framework, SQL, VMware, ESXi, Group Policy, Powershell ISE Script.</p>
          <p>Worked on a number of small/large projects during my time at Capula Ltd. Most notable was:</p>
          {capulaModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </>
      ),
    },
  },
  {
    title: "KeeleSU",
    startDate: "2017",
    endDate: "2018",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "keelesu",
      title: "KeeleSU Projects",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>HTML(5), CSS, JavaScript and PHP.</p>
          <p>Worked on a number of small/large projects during my time at KeeleSU:</p>
          {keelesuModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
  {
    title: "Uni Projects",
    startDate: "2015",
    endDate: "2018",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "universityprojects",
      title: "Keele University Projects",
      body: (
        <div>
          <p>
            Worked on a number of practicals in Computer Science. Some of which include:
          </p>
          {uniModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
];

// May separate these into another view.
const sideProjects: ICard[] = [
  {
    title: "BookStore App",
    startDate: "2023",
    endDate: "Ongoing",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "bet365upui",
      title: "bet365 Projects",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>TypeScript/JavaScript, Golang, C#, and SQL.</p>
          <p>
            Numerous support, process/performance improvements, small/large scale project changes to add functionality to various countries in the Site Services' Team. Some of these projects include:
          </p>
          {bet365UPUIModalCOntent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
];

const WorkProjects: React.FC = () => {
  return (
    <div id="project">
      <section className="container my-3 pb-3 sectionMinHeight text-light">
        <div className="row text-center pb-3">
          <h1>Work Projects</h1>
        </div>
        <CardView project={workProjects}/>
      </section>
    </div>
  );
};

export default WorkProjects;
