const ModalContent: React.FC<IModalContent> = (modalContent: IModalContent) => {
  return (
    <>
      <h6>{modalContent.content.title}</h6>
      {modalContent.content.date && (
        <p className="text-muted">{modalContent.content.date}</p>
      )}
      {modalContent.content.description}
    </>
  );
};

export default ModalContent;
