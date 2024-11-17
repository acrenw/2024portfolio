import React from 'react';
import '../styles/ModalComponent.css';

function renderGalleryItem(section) {
  if (section.type === 'image') {
    return (
      <div className="image-container">
        <img src={section.src} alt={section.alt} style={{ maxWidth: '100%', height: 'auto' }} />
        {section.caption && <div className="caption">{section.caption}</div>}
      </div>
    );
  }
  if (section.type === 'video') {
    return (
      <video src={section.src} controls style={{ maxWidth: '100%', height: 'auto' }}>
        Your browser does not support the video tag.
      </video>
    );
  }
  if (section.type === 'youtube') {
    return (
      <iframe
        title="YouTube Video"
        src={`https://www.youtube.com/embed/${section.id}`}
        style={{ width: '100%', height: 'auto' }}
        allowFullScreen
      />
    );
  }
  if (section.type === 'pdf') {
    return (
      <iframe src={section.src} style={{ width: '100%', height: '500px' }}>
        This browser does not support PDFs. Please download the PDF to view it: <a href={section.src}>Download PDF</a>
      </iframe>
    );
  }
  return null;
}

function renderNonGalleryItem(section) {
  if (section.type === 'text') {
    return <p className="text-content">{section.text}</p>;
  }
  if (section.type === 'list') {
    return <ul className="text-content"><li>{section.text}</li></ul>;
  }
  if (section.type === 'info') {
    return <i className="text-content">{section.text}</i>;
  }
  if (section.type === 'title') {
    return <h2 className="text-content" style={{ textAlign: 'center' }}>{section.text}</h2>;
  }
  if (section.type === 'subtitle') {
    return <h3 className="text-content">{section.text}</h3>;
  }
  return null;
}

const ModalComponent = ({ content, onClose }) => {
  const galleryItems = [];
  const finalContent = [];

  content.forEach((section, index) => {
    const isGalleryItem = ['image', 'video', 'youtube', 'pdf'].includes(section.type);

    if (isGalleryItem) {
      galleryItems.push(
        <div className="gallery-item" key={index}>
          {renderGalleryItem(section)}
        </div>
      );
    } else {
      if (galleryItems.length > 0) {
        finalContent.push(
          <div className="gallery-container" key={`gallery-container-${index}`}>
            {galleryItems.slice()}
          </div>
        );
        galleryItems.length = 0; 
      }
      finalContent.push(
        <div key={index}>
          {renderNonGalleryItem(section)}
        </div>
      );
    }
  });

  if (galleryItems.length > 0) {
    finalContent.push(
      <div className="gallery-container" key="gallery-container-last">
        {galleryItems}
      </div>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          {finalContent}
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
