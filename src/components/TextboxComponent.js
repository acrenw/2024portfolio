import React from 'react';
import '../styles/TextboxComponent.css';

const TextboxComponent = ({ content, onClose }) => {
  return (
    <div className="textbox-overlay">
      <div className="textbox-content">
        <div className="textbox-header">
          <span className="textbox-name">Cera Wang</span>
        </div>
        <button className="textbox-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="textbox-body">
          {content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextboxComponent;
