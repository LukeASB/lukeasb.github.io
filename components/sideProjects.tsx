import Link from "next/link";
import ICard from "../shared/interfaces/ICard";
import CardView from "./card/cardView";
import ModalContent from "./modal/modalContent";

import { useEffect, useState } from "react";
import Pagination from "./pagination";
import getPlaceholderImg from "../shared/helpers/getPlaceholderImg";

const placeholderImg = getPlaceholderImg();

const habitsAppModalContent: IProjectContent[] = [
  {
    title: "DoHabitsApp",
    description: (
      <>
        <p>
          The DoHabitsApp is a web app that allows the user to add a number of
          habits to track daily on a calendar.
        </p>
        <p>
          Minimum Viable Product: Web App that allows individual users to track
          their habits by ticking the day of on the calendar.
        </p>
        <p>
          Users should be able to register/login to view all their habits on the
          home page and individual habits by clicking on them in a navigation
          menu.
        </p>
        <p>Users should be able to create, update and delete their habits.</p>
        <Link
          className="link-opacity-50-hover"
          href="https://github.com/LukeASB/HabitsApp"
        >
          https://github.com/LukeASB/HabitsApp
        </Link>
      </>
    ),
  },
];

const lukeWebPortfolioModalContent: IProjectContent[] = [
  {
    title: "Web Portfolio",
    description: (
      <>
        <p>Web Portfolio for this site.</p>
        <Link
          className="link-opacity-50-hover"
          href="https://github.com/LukeASB/lukeasb.github.io"
        >
          https://github.com/LukeASB/lukeasb.github.io
        </Link>
      </>
    ),
  },
];

const lukeLiftsModalContent: IProjectContent[] = [
  {
    title: "LukeLifts",
    description: (
      <>
        <p>Personal Training Website that hosts my training products.</p>
        <p>Transactions handled via Stripe.</p>
        <Link
          className="link-opacity-50-hover"
          href="https://github.com/LukeASB/LukeLiftsV2"
        >
          https://github.com/LukeASB/LukeLiftsV2
        </Link>
      </>
    ),
  },
];

const bookStoreAppModalContent: IProjectContent[] = [
  {
    title: "BookStoreApp",
    description: (
      <>
        <p>
          The Basic Book Store App is a web application that displays book
          recommendations.
        </p>
        <p>
          Users can browse through existing book lists and create their own
          recommendations.
        </p>
        <p>
          The app simplifies the process of sharing top book picks with friends
          and family, eliminating the need to respond to individual requests.
        </p>
        <Link
          className="link-opacity-50-hover"
          href="https://github.com/LukeASB/BookStoreApp"
        >
          https://github.com/LukeASB/BookStoreApp
        </Link>
      </>
    ),
  },
];

const financialTickerGridModalContent: IProjectContent[] = [
  {
    title: "Financial Ticker",
    description: (
      <>
        <p>
          Basic Financial Ticker Grid for a Tech Test. Iterates through a
          dataset to display financial data.
        </p>
        <p>
          Frontend - Basic Financial Ticker Grid that uses data to generate
          basic financial ticker grid.
        </p>
        <p>
          Backend - NodeJS backend that supplies the snapshot and deltas data
          for the finanical ticker grid.
        </p>
        <Link
          className="link-opacity-50-hover"
          href="https://github.com/LukeASB/Basic-Financial-Ticker-Grid"
        >
          https://github.com/LukeASB/Basic-Financial-Ticker-Grid
        </Link>
      </>
    ),
  },
];

const sideProjects: ICard[] = [
  {
    title: "DoHabitsApp",
    startDate: "2024",
    endDate: "2025",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "habitsapp",
      title: "DoHabitsApp",
      body: (
        <div>
          <p>
            <strong>Tech Stack: </strong>TypeScript (Next.js, React), Golang,
            MongoDB
          </p>
          {habitsAppModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
  {
    title: "Web Portfolio",
    startDate: "2024",
    endDate: "",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "lukesbwebportfolio",
      title: "Web Portfolio",
      body: (
        <div>
          <p>
            <strong>Tech Stack: </strong>TypeScript (Next.js, React)
          </p>
          {lukeWebPortfolioModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
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
          <p>
            <strong>Tech Stack: </strong>TypeScript (Next.js, React)
          </p>
          {lukeLiftsModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
  {
    title: "Book Store App",
    startDate: "2023",
    endDate: "",
    img: placeholderImg,
    shortDescription: "",
    readMoreModal: {
      id: "bookstoreapp",
      title: "BookStoreApp",
      body: (
        <div>
          <p>
            <strong>Tech Stack: </strong>Golang, TypeScript (React, Next.js),
            MongoDB.
          </p>
          {bookStoreAppModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
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
          <p>
            <strong>Tech Stack: </strong> Node.js (TypeScript, Express.js),
            TypeScript, HTML, CSS.
          </p>
          {financialTickerGridModalContent.map((content, i) => (
            <ModalContent key={`${content}_${i}`} content={content} />
          ))}
        </div>
      ),
    },
  },
];

const SideProjects: React.FC = () => {
  const maxPostPerPage = 4;
  const [items, setItems] = useState<ICard[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(maxPostPerPage);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts: ICard[] = items.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    const getItems = () => setItems(sideProjects);
    getItems();
  }, []);

  return (
    <div id="sideProject">
      <section className="container my-3 pb-3 sectionMinHeight text-dark">
        <div className="row text-center pb-3">
          <h1>Side Projects</h1>
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

export default SideProjects;
