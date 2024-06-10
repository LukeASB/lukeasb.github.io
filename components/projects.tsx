import CardView from "./card/cardView";

const Project: React.FC = () => {
    return (
        <div id="project">
            <section className="container my-3 pb-3 sectionMinHeight text-light">
                <div className="row text-center">
                    <h1>Projects</h1>
                </div>
                <CardView />
            </section>
        </div>
    );
}

export default Project;