import ICard from "../shared/interfaces/ICard";
import CardView from "./card/cardView";
import ModalContent from "./modal/modalContent";

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
    title: "BookStore App",
    startDate: "2023",
    endDate: "Ongoing",
    img: "https://via.placeholder.com/400",
    shortDescription: "",
    readMoreModal: {
      id: "bookstoreapp",
      title: "BookStore App",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>TypeScript/JavaScript, Golang, C#, and SQL.</p>
          <p>
            Numerous support, process/performance improvements, small/large scale project changes to add functionality to various countries in the Site Services' Team. Some of these projects include:
          </p>
          {/* {bet365UPUIModalCOntent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)} */}
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
