import About from "../about";
import History from "../history";
import Project from "../projects";

const Home: React.FC = () => {
    return (
        <div id="home">
            {/* <!-- Body Content --> */}
            <div className="container content">
                <About />
                <History />
                <Project />
            </div>
        </div>
    );
};

export default Home;
