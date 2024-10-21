import React from 'react';
import '../styles/ModalComponent.css';

const ModalComponent = ({ content, onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
          <div className="modal-body">
            {content.map((section, index) => {
              if (section.type === 'text') {
                return <p key={index}>{section.text}</p>;
              }
              if (section.type === 'image') {
                return <img key={index} src={section.src} alt={section.alt} style={{ maxWidth: '100%', height: 'auto' }} />;
              }
              if (section.type === 'youtube') {
                return (
                  <div key={index} style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                      title="YouTube Video"
                      src={`https://www.youtube.com/embed/${section.id}`}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    //   frameBorder="0"
                      allowFullScreen
                    />
                  </div>
                );
              }
              if (section.type === 'pdf') {
                return (
                  <iframe
                    key={index}
                    src={section.src}
                    style={{ width: '100%', height: '500px' }} // Adjust height as needed
                    // frameBorder="0"
                  >
                    This browser does not support PDFs. Please download the PDF to view it: <a href={section.src}>Download PDF</a>
                  </iframe>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    );
  };
  

export default ModalComponent;
