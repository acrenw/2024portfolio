import React from 'react';
import '../styles/ModalComponent.css'; // Optional: Include a separate CSS file for styling

const ModalComponent = ({ content, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times; {/* This is a close (X) symbol */}
        </button>
        <div className="modal-body">
          {content} {/* Display the content passed to the modal */}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
