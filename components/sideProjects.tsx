import Link from "next/link";
import ICard from "../shared/interfaces/ICard";
import CardView from "./card/cardView";
import ModalContent from "./modal/modalContent";

const bookStoreAppModalContent: IProjectContent[] = [
  {
    title: "BookStoreApp",
    description: (
      <>
          <p>
            The Basic Book Store App is a web application that displays book recommendations.
          </p>
          <p>
            Users can browse through existing book lists and create their own recommendations.
          </p>
          <p>
          The app simplifies the process of sharing top book picks with friends and family, eliminating the need to respond to individual requests.
          </p>
          <Link className="link-opacity-50-hover" href="https://github.com/LukeASB/BookStoreApp">https://github.com/LukeASB/BookStoreApp</Link>
      </>
    )
  },
];

// May separate these into another view.
const sideProjects: ICard[] = [
  {
    title: "LukeLifts",
    startDate: "2023",
    endDate: "Ongoing",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "lukelifts",
      title: "LukeLifts",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>TypeScript (Next.js, React.js)</p>
          <p>
            Numerous support, process/performance improvements, small/large scale project changes to add functionality to various countries in the Site Services' Team. Some of these projects include:
          </p>

          {/* {bet365UPUIModalCOntent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)} */}
        </div>
      ),
    },
  },
  {
    title: "BookStoreApp",
    startDate: "2023",
    endDate: "Ongoing",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "bookstoreapp",
      title: "BookStoreApp",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>Backend: Golang Web Service, MongoDB. Frontend: ReactJS Framework created with with Nextjs and TypeScript</p>
          {bookStoreAppModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
  {
    title: "Finanical Ticker Grid",
    startDate: "2023",
    endDate: "Ongoing",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "financialtickergrid",
      title: "Finanical Ticker Grid",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>Frontend: TypeScript, HTML, CSS. Backend: Node.js (TypeScript, Express.js)</p>
          <p>
            Numerous support, process/performance improvements, small/large scale project changes to add functionality to various countries in the Site Services' Team. Some of these projects include:
          </p>
          {/* {bet365UPUIModalCOntent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)} */}
        </div>
      ),
    },
  },
];



const SideProjects: React.FC = () => {
  return (
    <div id="project">
      <section className="container my-3 pb-3 sectionMinHeight text-light">
        <div className="row text-center pb-3">
          <h1>Side Projects</h1>
        </div>
        <CardView project={sideProjects}/>
      </section>
    </div>
  );
};

export default SideProjects;
