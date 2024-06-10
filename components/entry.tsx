import IEntry from "../shared/interfaces/IEntry";

const Entry: React.FC<IEntry> = (entry: IEntry) => {
    return (
        <div className="entry mb-4">
            <h5 className="fw-bold">{entry.title}</h5>
            <p className="text small">{entry.date}</p>
            {entry.description}
        </div>
    )
}

export default Entry;