import React from 'react';
import './TrashButton.css'; // Import your CSS file

const TrashButton = () => {
  return (
    <button className="trash_button">
      <a href="https://www.flaticon.com/free-icons/trashcan" title="trashcan icons" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1216/1216783.png" 
          alt="Trashcan Icon" 
          style={{ width: '24px', height: '24px' }} 
        />
      </a>
    </button>
  );
};

export default TrashButton;