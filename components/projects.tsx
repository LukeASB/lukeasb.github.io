const Project: React.FC = () => {
    return (
        <div id="project">
            <section className="container my-3 pb-3 sectionMinHeight text-light">
                <div className="row text-center">
                    <h1>Projects</h1>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mb-2">
                            <div className="card">
                                <img src="https://via.placeholder.com/200" className="card-img-top" alt="Project 1" />
                                <div className="card-body">
                                    <h5 className="card-title">Project 1</h5>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Project;