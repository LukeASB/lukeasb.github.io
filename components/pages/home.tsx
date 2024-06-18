import About from "../about";
import History from "../history";
import SideProjects from "../sideProjects";
import WorkProjects from "../workProjects";

const Home: React.FC = () => {
  return (
    <div id="home">
      {/* <!-- Body Content --> */}
      <div className="container content">
        <About />
        <History />
        <WorkProjects />
        <SideProjects />
      </div>
    </div>
  );
};

export default Home;
