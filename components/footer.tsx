const Footer: React.FC = () => {
    return (
        // <!-- Footer -->
        <footer className="footer mt-auto bg-dark">
            <div className="container text-center">
                <div className="mb-3">
                    <a
                        href="https://www.linkedin.com/in/luke-sloane-bulger/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light me-1"
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                    <a
                        href="https://medium.com/@luke.sloanebulger"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light me-1"
                    >
                        <i className="fab fa-medium fa-2x"></i>
                    </a>
                    <a
                        href="https://github.com/LukeASB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light me-1"
                    >
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                </div>
                <span className="text-light">© Luke Sloane-Bulger</span>
            </div>
        </footer>
    );
};

export default Footer;
