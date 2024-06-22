import Link from "next/link";
import ICard from "../shared/interfaces/ICard";
import CardView from "./card/cardView";
import ModalContent from "./modal/modalContent";

import { useEffect, useState } from "react";
import Pagination from "./pagination";
import getPlaceholderImg from "../shared/helpers/getPlaceholderImg";

const placeholderImg = getPlaceholderImg();

const lukeLiftsModalContent: IProjectContent[] = [
  {
    title: "LukeLifts",
    description: (
      <>
        <p>
          Personal Training Website that hosts my training products.
        </p>
        <Link className="link-opacity-50-hover" href="https://github.com/LukeASB/LukeLiftsV2">https://github.com/LukeASB/LukeLiftsV2</Link>
      </>
    )
  }
];

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

const financialTickerGridModalContent: IProjectContent[] = [
  {
    title: "Financial Ticker",
    description: (
      <>
        <p>
          Basic Financial Ticker Grid. Iterates through a dataset to display financial data.
        </p>
        <p>
          Frontend - Basic Financial Ticker Grid that uses data to generate basic financial ticker grid.
        </p>
        <p>
          Backend - NodeJS backend that supplies the snapshot and deltas data for the finanical ticker grid.
        </p>
        <Link className="link-opacity-50-hover" href="https://github.com/LukeASB/Basic-Financial-Ticker-Grid">https://github.com/LukeASB/Basic-Financial-Ticker-Grid</Link>
      </>
    )
  }
];

const sideProjects: ICard[] = [
  {
    title: "LukeLifts",
    startDate: "2024",
    endDate: "",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "lukelifts",
      title: "LukeLifts",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>TypeScript (Next.js, React.js)</p>
          {lukeLiftsModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
  {
    title: "BookStoreApp",
    startDate: "2023",
    endDate: "",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "bookstoreapp",
      title: "BookStoreApp",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>Backend: Golang Web Service, MongoDB. Frontend: React.js Framework created with with Next.js and TypeScript</p>
          {bookStoreAppModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
  {
    title: "Finanical Ticker",
    startDate: "2023",
    endDate: "",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "financialtickergrid",
      title: "Finanical Ticker",
      body: (
        <div>
          <p><strong>Tech Stack: </strong>Frontend: TypeScript, HTML, CSS. Backend: Node.js (TypeScript, Express.js)</p>
          {financialTickerGridModalContent.map((content, i) => <ModalContent key={`${content}_${i}`} content={content} />)}
        </div>
      ),
    },
  },
];

const SideProjects: React.FC = () => {
  const [ items, setItems ] = useState<ICard[]>([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postPerPage, setPostPerPage] = useState(8);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts: ICard[] = items.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const getItems = () => setItems(sideProjects);
    getItems();
  }, []);

  return (
    <div id="sideProject">
      <section className="container my-3 pb-3 sectionMinHeight text-light">
        <div className="row text-center pb-3">
          <h1>Side Projects</h1>
        </div>
        <CardView project={currentPosts}/>
        { items.length > 0 && <Pagination totalPosts={items.length} postsPerPage={postPerPage} setCurrentPage={setCurrentPage}/>}
      </section>
    </div>
  );
};

export default SideProjects;
