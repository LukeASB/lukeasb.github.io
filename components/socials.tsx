interface ISocial {
  colour: string;
}
const Social: React.FC<ISocial> = ({ colour }) => {
  return (
    <div className="mb-3">
      <a
        href="https://www.linkedin.com/in/luke-sloane-bulger/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${colour} me-1`}
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a
        href="https://medium.com/@luke.sloanebulger"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${colour} me-1`}
      >
        <i className="fab fa-medium fa-2x"></i>
      </a>
      <a
        href="https://github.com/LukeASB"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-${colour} me-1`}
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
  );
};

export default Social;
