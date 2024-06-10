import ICard from "../../shared/interfaces/ICard";
import Card from "./card";

const projects: ICard[] = [
    { title: "Project 1", img: "https://via.placeholder.com/200", description: ""},
]

const CardView: React.FC = () => {
    return (
        <>
            { projects.map((item, i) => <Card key={`${item.title}_${i}`} title={item.title} img={item.img} description={item.description} />) } 
        </>
    );
}

export default CardView;