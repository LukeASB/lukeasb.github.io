import Social from "./socials";

const Footer: React.FC = () => {
  return (
    // <!-- Footer -->
    <footer className="footer mt-auto bg-dark">
      <div className="container text-center">
        <Social colour="light"/>
        <span className="text-light">© Luke Sloane-Bulger</span>
      </div>
    </footer>
  );
};

export default Footer;
