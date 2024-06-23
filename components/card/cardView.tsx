import ICardView from "../../shared/interfaces/ICardView";
import Card from "./card";

const CardView: React.FC<ICardView> = ({ project }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        {project.map((item, i) => (
          <Card
            key={`${item.title}_${i}`}
            title={item.title}
            startDate={item.startDate}
            endDate={item.endDate}
            img={item.img}
            shortDescription={item.shortDescription}
            readMoreModal={item.readMoreModal}
          />
        ))}
      </div>
    </div>
  );
};

export default CardView;
