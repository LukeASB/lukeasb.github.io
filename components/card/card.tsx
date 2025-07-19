import { useEffect, useState } from "react";
import ICard from "../../shared/interfaces/ICard";
import Modal from "../modal/modal";
import Image from "next/image";

const Card: React.FC<ICard> = (card: ICard) => {
  const [cardStyle, setCardStyle] = useState({ minHeight: "200px" });
  const [cardTitle, setCardTitle] = useState({ minHeight: "0px" });

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 1430px)").matches) {
        console.log("1400");
        setCardStyle({ minHeight: "200px" });
        setCardTitle({ minHeight: "10px" });
      }

      if (window.matchMedia("(max-width: 1400px)").matches) {
        console.log("1400");
        setCardStyle({ minHeight: "200px" });
        setCardTitle({ minHeight: "55px" });
      }

      if (window.matchMedia("(max-width: 990px)").matches) {
        console.log("990");
        setCardStyle({ minHeight: "270px" });
        setCardTitle({ minHeight: "75px" });
      }

      if (window.matchMedia("(max-width: 767px)").matches) {
        console.log("767");
        setCardTitle({ minHeight: "10px" });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="col-md-2 mb-3">
      <div className="card" style={cardStyle}>
        <img
          src={card.img}
          className="card-img-top"
          alt={card.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column align-items-center">
          <div className="title-block" style={cardTitle}>
            <h5 className="card-title">{card.title}</h5>
          </div>
          <p className="text small">
            {card.endDate
              ? `${card.startDate}-${card.endDate}`
              : card.startDate}
          </p>
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
