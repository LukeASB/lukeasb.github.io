const Footer: React.FC = () => {
    return (
        // <!-- Footer -->
        <footer className="footer mt-auto bg-dark">
            <div className="container text-center">
                <div className="mb-3">
                    <a
                        href="https://www.youtube.com/channel/UClCbqNlDf08fv_OJbkPDa_w"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light me-3"
                    >
                        <i className="fab fa-youtube fa-2x"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luke-sloane-bulger/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-light"
                    >
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a>
                </div>
                <span className="text-light">© Luke Sloane-Bulger</span>
            </div>
        </footer>
    );
};

export default Footer;
