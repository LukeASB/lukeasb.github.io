import React from "react";

const Spinner: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
