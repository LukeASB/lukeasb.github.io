import ICard from "../../shared/interfaces/ICard";
import Modal from "../modal/modal";

const Card: React.FC<ICard> = (card: ICard) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card" style={{ minHeight: '200px' }}>
        <img src={card.img} className="card-img-top" alt={card.title} />
        <div className="card-body d-flex flex-column align-items-center">
          <div className="title-block" style={{ minHeight: '20px' }}>
            <h5 className="card-title">{card.title}</h5>
          </div>
          
          <p className="text small">{card.endDate ? `${card.startDate}-${card.endDate}` : card.startDate}</p>
          <button
            type="button"
            className="btn btn-primary btn-custom robo popup-trigger popmake-680"
            data-popup-id="680"
            data-do-default="0"
            data-bs-toggle="modal"
            data-bs-target={`#${card.readMoreModal.id}`}
          >
            Read More
          </button>
          <Modal
            id={card.readMoreModal.id}
            title={card.readMoreModal.title}
            body={card.readMoreModal.body}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
