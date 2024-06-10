import ICard from "../../shared/interfaces/ICard";

const Card: React.FC<ICard> = (card: ICard) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 mb-2">
                    <div className="card">
                        <img src={card.img} className="card-img-top" alt={card.title} />
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <a href="#" className="btn btn-primary">Read More</a>  {/* Loads a modal... */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;