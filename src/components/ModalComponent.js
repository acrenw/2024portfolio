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
                return <p key={index} className="text-content">{section.text}</p>;
              }
              return null;
            })}
            <div className="gallery-container">
              {content.map((section, index) => {
                if (section.type === 'image') {
                  return (
                    <div key={index} className="gallery-item">
                      <div className="image-container">
                        <img src={section.src} alt={section.alt} style={{ maxWidth: '100%', height: 'auto' }} />
                        {section.caption && (
                          <div className="caption">
                            {section.caption}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
                if (section.type === 'video') {
                  return (
                    <div key={index} className="gallery-item">
                      <video src={section.src} alt={section.alt} controls style={{ maxWidth: '100%', height: 'auto' }}>
                      Your browser does not support the video tag.
                      </video>
                    </div>
                  );
                }
                if (section.type === 'youtube') {
                  return (
                    <div key={index} className="gallery-item" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                      <iframe
                        title="YouTube Video"
                        src={`https://www.youtube.com/embed/${section.id}`}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        allowFullScreen
                      />
                    </div>
                  );
                }
                if (section.type === 'pdf') {
                  return (
                    <div key={index} className="gallery-item">
                      <iframe
                        src={section.src}
                        style={{ width: '100%', height: '500px' }} // #TODO: change height maybe
                      >
                        This browser does not support PDFs. Please download the PDF to view it: <a href={section.src}>Download PDF</a>
                      </iframe>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default ModalComponent;
