import React from 'react';
import './TrashButton.css'; 
import trashIcon from '../../assets/trashcan.png'; // Import the icon

const TrashButton = ({ onClick }) => {
  return (
    <button className="trash_button" onClick={onClick}>
      <img 
        src={trashIcon} 
        alt="Trashcan Icon" 
        style={{ width: '24px', height: '24px' }} 
        className="trash_icon"
      />
    </button>
  );
};

export default TrashButton;
