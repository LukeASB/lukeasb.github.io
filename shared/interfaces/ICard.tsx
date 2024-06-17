import IModal from "./IModal";

interface ICard {
    title: string,
    img: string,
    startDate: string,
    endDate: string,
    shortDescription: string
    readMoreModal: IModal,
}

export default ICard;