import About from "../about";
import Education from "../education";
import Employment from "../employment";

const Home: React.FC = () => {
    return (
        <div id="home">
            {/* <!-- Body Content --> */}
            <div className="container content">
                <About />
                <Employment />
                <Education />
            </div>
        </div>
    );
};

export default Home;
