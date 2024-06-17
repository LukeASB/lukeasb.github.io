import IModal from "../../shared/interfaces/IModal";

const Modal: React.FC<IModal> = (modal: IModal) => {
  return (
    <div
      className="modal fade"
      id={modal.id}
      tabIndex={-1}
      aria-labelledby={`${modal.id}Label`}
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-black">
            <h5 className="modal-title" id={`${modal.id}Label`}>
              {modal.title}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-black text-start">{modal.body}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
