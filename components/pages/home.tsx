import About from "../about";
import Education from "../education";
import Employment from "../employment";
import Project from "../projects";

const Home: React.FC = () => {
    return (
        <div id="home">
            {/* <!-- Body Content --> */}
            <div className="container content">
                <About />
                <Employment />
                <Education />
                <Project />
            </div>
        </div>
    );
};

export default Home;
